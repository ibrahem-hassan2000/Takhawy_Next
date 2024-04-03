import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import "@mantine/notifications/styles.css";
import "@mantine/core/styles.css";
import "./globals.css";
import Script from "next/script";
import Footer from "../../../Components/Footer";
import LayNav from "../../../Components/LayNav";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Takhawy",
  description: "One Trip, Two Joys , Save And Deliver!",
};

export default function RootLayout({ children, params }) {
  const messages = useMessages();
  return (
    <html lang={params.locale} dir={params.locale==="ar"?"rtl":"ltr"} >
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Script async src="/js/jquery-3.6.1.min.js" />
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <MantineProvider>
            <Notifications />
            <LayNav locale={params.locale} />
            <main>{children}</main>
            <Footer  locale={params.locale} />
          </MantineProvider>
        </NextIntlClientProvider>

        <Script src="/bootstrap.js" />
      </body>
    </html>
  );
}
