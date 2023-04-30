import { cache } from "react";

const getDigitalCurrencies = async () => {
    // const file = await fetch(
    //     "https://www.alphavantage.co/digital_currency_list/"
    // );
    // const fileJson = await file.json();
    // const csv = Papa.parse(fileJson, {
    //     header: true,
    // });
    // console.log(csv.data, csv.errors);
    // return csv.data;
    const currs = {
        btc: "Bitcoin",
        eth: "Ethereum",
        doge: "Doge Coin",
        etc: "Ethereum Classic",
        ltc: "Lite Coin",
        ada: "Cardano",
        xmr: "Monero",
        xrp: "Ripple",
        bch: "Bitcoin-Cash",
        sol: "Solana",
        dot: "Polkadot",
    };

    const currsList = Object.entries(currs).map(([slug, name]) => ({
        slug,
        name,
    }));
    return currsList;
};

export const getData = cache(async (currency: string) => {
    console.log("Getting data...");
    let KEY = process.env.ALPHA_KEY;

    if (!KEY) {
        console.log(KEY);
        throw new Error("No ALPHA_KEY Key set.");
    }
    const url = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${currency}&market=USD&apikey=${KEY}`;
    const res = await fetch(url, { next: { revalidate: 600 } });
    console.log(url);

    const data = res.json();
    return data;
});

export const getWeekly = cache(async (currency: string) => {
    const data = await getData(currency);
    const error = data["Error Message"];
    const note = data["Note"];
    if (error || note) {
        return { error, note };
    }
    const meta = { lastRefreshed: data["Meta Data"]["6. Last Refreshed"] };
    const timeSeries = data["Time Series (Digital Currency Daily)"];

    const dates = Object.keys(timeSeries)
        .map((date) => new Date(date))
        .reverse();

    const filteredDates = dates.filter((date, index, arr) => {
        // Get the month and year of the current date
        const month = date.getMonth();
        const year = date.getFullYear();
        const week = Math.floor(date.getDate() / 7);

        // Check if this is the first occurrence of this week in this month of this year
        const isFirstOccurrence =
            arr.findIndex(
                (d) =>
                    d.getFullYear() === year &&
                    d.getMonth() === month &&
                    Math.floor(d.getDate() / 7) === week
            ) === index;

        // Return true if it's the first occurrence, false otherwise
        return isFirstOccurrence;
    });
    const filteredKeys = filteredDates.map((date) =>
        date.toISOString().slice(0, 10)
    );

    const timeSeriesFormatted = filteredKeys.map((key) => {
        return {
            name: key,
            uv: Number(timeSeries[key]["1a. open (USD)"]),
        };
    });

    return { meta, timeSeriesFormatted, timeSeries, error };
});

export const getMonthly = cache(async (currency: string) => {
    const data = await getData(currency);
    const error = data["Error Message"];
    const note = data["Note"];
    if (error || note) {
        return { error, note };
    }
    const meta = { lastRefreshed: data["Meta Data"]["6. Last Refreshed"] };
    const timeSeries = data["Time Series (Digital Currency Daily)"];

    const dates = Object.keys(timeSeries)
        .map((date) => new Date(date))
        .reverse();

    const filteredDates = dates.filter((date, index, arr) => {
        // Get the month and year of the current date
        const month = date.getMonth();
        const year = date.getFullYear();

        // Check if this is the first occurrence of this month in this year
        const isFirstOccurrence =
            arr.findIndex(
                (d) => d.getMonth() === month && d.getFullYear() === year
            ) === index;

        // Return true if it's the first occurrence, false otherwise
        return isFirstOccurrence;
    });
    const filteredKeys = filteredDates.map((date) =>
        date.toISOString().slice(0, 10)
    );

    const timeSeriesFormatted = filteredKeys.map((key) => {
        return {
            name: key,
            uv: Number(timeSeries[key]["1a. open (USD)"]),
        };
    });

    return { meta, timeSeriesFormatted, timeSeries, error };
});

export const getDaily = cache(async (currency: string) => {
    const data = await getData(currency);
    const error = data["Error Message"] || null;
    const note = data["Note"];

    if (error || note) {
        return { error, note };
    }

    const meta = { lastRefreshed: data["Meta Data"]["6. Last Refreshed"] };
    const timeSeries = data["Time Series (Digital Currency Daily)"];
    const timeSeriesFormatted =
        timeSeries &&
        Object.keys(timeSeries)
            .reverse()
            .map((key) => {
                return {
                    name: key,
                    uv: Number(timeSeries[key]["1a. open (USD)"]),
                };
            });
    return { meta, timeSeriesFormatted, timeSeries, error };
});

export const getDigitalCurrencyName = async (slug: string) => {
    const currs = await getDigitalCurrencies();
    // let name = "";
    const cur = currs.filter((cur) => cur.slug === slug)[0];
    if (!cur) return null;
    return cur.name;
};

export const getDigitalCurrencyIconUrl = (slug: string) => {
    return `https://coinicons-api.vercel.app/api/icon/${slug.toLowerCase()}`;
};

export { getDigitalCurrencies };
