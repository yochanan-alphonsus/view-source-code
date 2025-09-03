"use server";

import * as cheerio from "cheerio";
import hljs from "highlight.js";
import { html as beautifyHTML } from "js-beautify";

export async function fetchHTML(formData: FormData) {
  try {
    const url = formData.get("url") as string;

    const res = await fetch(url, {
      method: "GET",
    });

    const textContent = await res.text();

    const htmlContent = cheerio.load(textContent).html();

    const formattedHTML = beautifyHTML(htmlContent, {
      indent_size: 4,
      indent_char: " ",
      unformatted: ["a", "sub", "sup", "b", "i", "u"],
    });

    return hljs.highlightAuto(formattedHTML).value;
  } catch (error) {
    console.error(error);
    return "It seems that we couldn't reach your desired URL, please, verify your URL for mispelling words or try again later :(";
  }
}
