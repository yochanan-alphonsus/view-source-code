"use client";

import { fetchHTML } from "@/src/actions";
import React from "react";
import "highlight.js/styles/github.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const [html, setHTML] = React.useState("");
  const [hasContent, setHasContent] = React.useState(false);
  const router = useRouter();

  async function getHTMLCode(formData: FormData) {
    setHTML(await fetchHTML(formData));
    setHasContent((prev) => !prev);
  }

  function tryAgain() {
    setHTML("");
    setHasContent((prev) => !prev);
    router.refresh();
  }

  return (
    <>
      {!hasContent && (
        <>
          <section className="w-full h-screen flex flex-col justify-center items-center">
            <form
              action={getHTMLCode}
              className="flex flex-col justify-between items-center gap-5"
            >
              <h3 className="text-2xl font-bold">View Source Code</h3>
              <input
                type="url"
                name="url"
                placeholder="Website url here"
                className="bg-white text-black text-lg indent-2.5 rounded py-1 w-full"
              />
              <input
                type="submit"
                value="Get Code"
                className="border border-solid border-white hover:border-[#121212] hover:bg-[#ffffff] hover:text-[#121212] transition-all duration-1000 delay-100 ease-in-out w-full rounded py-1 text-center text-xl font-medium cursor-pointer"
              />
            </form>
          </section>
        </>
      )}
      {html.startsWith("It") && (
        <div className="w-full h-screen flex flex-col justify-center items-center font-medium flex-wrap">
          <span className="text-center text-sm md:text-lg">{html}</span>
          <span className="text-center text-sm md:text-lg text-gray-500 pt-2.5">
            Example URL:{" "}
            <Link href="https://github.com/yochanan-alphonsus">
              https://github.com/yochanan-alphonsus
            </Link>
          </span>
          <button
            onClick={tryAgain}
            type="button"
            className="mt-5  border border-solid border-white hover:border-[#121212] hover:bg-[#ffffff] hover:text-[#121212] transition-all duration-1000 delay-100 ease-in-out rounded py-1.5 px-3 text-center text-xl font-medium cursor-pointer"
          >
            Try again now
          </button>
        </div>
      )}
      {hasContent && !html.startsWith("It") && (
        <pre className="w-full h-screen text-sm font-medium flex-wrap">
          <code dangerouslySetInnerHTML={{ __html: html }}></code>
        </pre>
      )}
    </>
  );
}
