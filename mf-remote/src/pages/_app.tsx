import "@/styles/tailwind.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  //@ts-ignore getLayout is not a function
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />);
}
