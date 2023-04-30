import "server-only";
import alpha from "alphavantage";

let KEY = process.env.ALPHA_KEY;

if (!KEY) {
    console.log(KEY);
    // KEY = "NOKEY";
    throw new Error("No ALPHA_KEY Key set.");
}

const alphaVantage = alpha({ key: KEY });
export default alphaVantage;
