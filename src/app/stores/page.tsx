import type { Metadata } from "next";
import StoresClient from "@/components/StoresClient";
import { PhoneSection } from "@/components/PhoneSection";

export const metadata: Metadata = {
  title: "施設情報｜ままのて保育ステーション",
  description:
    "大阪市淀川区の『ままのて保育ステーション』施設情報ページ。所在地・アクセス・連絡先など、ご利用前に知っておきたい基本情報をご案内します。",
  openGraph: {
    title: "施設情報｜ままのて保育ステーション",
    description:
      "『ままのて保育ステーション』（大阪市淀川区・十三）の施設情報と連絡先。アクセスや周辺情報もあわせてご確認ください。",
    url: "https://ponopono-keiko.shop/stores",
    siteName: "ままのて保育ステーション",
    images: [
      {
        url: "/ogpLogo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function StoresPage() {
  return (
    <main className="px-4 py-16">
      {/* 見出し・リード */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-2xl lg:text-3xl font-extrabold mb-4 text-white text-outline">
          ままのて保育ステーション ─ 施設情報
        </h1>
      </section>

      {/* 連絡先（PhoneSection を流用） */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <PhoneSection />
      </section>

      {/* 施設カード（複数拠点にも対応できるUIのまま） */}
      <StoresClient />
    </main>
  );
}
