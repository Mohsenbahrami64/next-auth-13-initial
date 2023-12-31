import type { AppProps } from "next/app";
import RootLayout from "./rootLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />;
    </RootLayout>
  );
}
