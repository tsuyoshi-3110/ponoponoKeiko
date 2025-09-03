// src/app/(routes)/news/page.tsx
import type { Metadata } from "next";
import NewsClient from "@/components/NewsClient";

export const metadata: Metadata = {
  title: "お知らせ・更新情報｜ままのて保育ステーション",
  description:
    "大阪市淀川区『ままのて保育ステーション』からのお知らせ・最新情報。イベント開催案内、一時預かりの受付状況、臨時休園などの最新トピックスを掲載します。",
  openGraph: {
    title: "お知らせ・更新情報｜ままのて保育ステーション",
    description:
      "『ままのて保育ステーション』の最新情報を随時更新。親子イベントのご案内や、利用受付状況、臨時対応などをお知らせします。",
    url: "https://ponopono-keiko.shop/news",
    siteName: "ままのて保育ステーション",
    images: [{ url: "/ogpLogo.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://ponopono-keiko.shop/news" },
};

export default function NewsPage() {
  return (
    <main className="px-4 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mt-6 mb-6 text-center text-white/80">
        お知らせ・イベント情報
      </h1>
      <NewsClient />
    </main>
  );
}
