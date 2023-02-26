import "../src/styles/globals.ts";
import type { AppProps } from "next/app";
import { StyledGlobal } from "@/src/styles";
import { UserProvider } from "@/src/contexts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <StyledGlobal />
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
