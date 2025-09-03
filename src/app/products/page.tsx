import type { Metadata } from "next";
import ProductsClient from "@/components/ProductsClient";

export const metadata: Metadata = {
  title: "サービス・プログラム一覧｜ままのて保育ステーション",
  description:
    "大阪市淀川区の『ままのて保育ステーション』が提供する一時預かり・訪問保育、親子イベントなどのサービス一覧。対象年齢や利用時間、設備などを写真付きでご紹介します。",
  openGraph: {
    title: "サービス・プログラム一覧｜ままのて保育ステーション",
    description:
      "『ままのて保育ステーション』の一時預かり・訪問保育サービス、親子イベント、施設内の設備や環境をご紹介。ご利用前の確認にお役立てください。",
    url: "https://ponopono-keiko.shop/products",
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
  alternates: { canonical: "https://ponopono-keiko.shop/products" },
};

export default function ProductsPage() {
  return <ProductsClient />;
}




