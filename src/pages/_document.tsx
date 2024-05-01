import { pretendard } from "@/lib/fonts";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={pretendard.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
