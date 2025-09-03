import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "ままのて保育ステーションについて｜大阪市淀川区の一時預かり・訪問保育",
  description:
    "大阪市淀川区の『ままのて保育ステーション』のコンセプトとご案内。0ヶ月～小学生を対象に、一時預かりや訪問保育、親子イベントを開催し、お母さんに安心とひと息つける時間を提供します。",
  openGraph: {
    title: "ままのて保育ステーションについて｜大阪市淀川区の一時預かり・訪問保育",
    description:
      "『ままのて保育ステーション』（大阪市淀川区・十三）の想いと活動内容。保育サービスや親子で楽しめるイベント情報をご案内します。",
    url: "https://ponopono-keiko.shop/about",
    siteName: "ままのて保育ステーション",
    images: [
      {
        url: "/ogpLogo.png", // layout.tsx の metadataBase により絶対URL化
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://ponopono-keiko.shop/about" },
};

export default function AboutPage() {
  return (
    <main className="px-4 py-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mt-4 text-center text-white/80 text-outline">
        ままのて保育ステーションについて
      </h1>
      <AboutClient />
    </main>
  );
}
