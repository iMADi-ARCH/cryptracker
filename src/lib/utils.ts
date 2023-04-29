import Papa from "papaparse";
import alphaVantage from "./alphaVantage";
import { cache } from "react";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

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
        // dope: "Dope Coin",
        etc: "Ethereum Classic",
        ltc: "Lite Coin",
    };

    const currsList = Object.entries(currs).map(([slug, name]) => ({
        slug,
        name,
    }));
    return currsList;
};

export const getData = cache(async (currency: string) => {
    const data = await alphaVantage.crypto.daily(currency, "USD");
    return data;
});

export const getTimeSeries = cache(async (currency: string) => {
    const data = await getData(currency);
    // let error = null
    const error = data["Error Message"] || null;
    const timeSeries = data["Time Series (Digital Currency Daily)"];

    if (error) {
        return { error };
    }
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
    return { timeSeriesFormatted, timeSeries, error };
});

export const getDigitalCurrencyName = async (slug: string) => {
    const currs = await getDigitalCurrencies();
    // let name = "";
    const cur = currs.filter((cur) => cur.slug === slug)[0];
    return cur.name;
};

export const getDigitalCurrencyIconUrl = (slug: string) => {
    return `https://coinicons-api.vercel.app/api/icon/${slug}`;
};

export { getDigitalCurrencies };
