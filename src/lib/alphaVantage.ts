import alpha from "alphavantage";

const KEY = process.env.ALPHA_KEY;
// let alphaVantage;
if (!KEY) {
    throw new Error("Me: No ALPHA_KEY Key set.");
}

const alphaVantage = alpha({ key: KEY });
export default alphaVantage;
