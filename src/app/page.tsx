// src/app/(routes)/home/page.tsx

import type { Metadata } from "next";
import BackgroundVideo from "@/components/backgroundVideo/BackgroundVideo";
import TopFixedText from "@/components/TopFixedText";

export const metadata: Metadata = {
  title: "ままのて保育ステーション｜一時預かり・訪問保育（大阪市淀川区）",
  description:
    "「今助けて」が言える場所。0ヶ月〜小学生まで対応の一時預かり・訪問保育。平日10:00-16:00（当日予約OK）／夜間・土日も相談可。阪急十三駅から徒歩10分。",
  openGraph: {
    title: "ままのて保育ステーション｜一時預かり・訪問保育（大阪市淀川区）",
    description:
      "お母さんに安心とひと息を。0ヶ月〜小学生まで｜平日10:00-16:00｜当日予約OK｜夜間・土日も相談可｜阪急十三駅から徒歩10分。",
    url: "https://ponopono-keiko.shop/",
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
  alternates: { canonical: "https://ponopono-keiko.shop/" },
};

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* ① ファーストビュー：背景動画または画像 */}
      <section className="relative h-screen overflow-hidden">
        <BackgroundVideo />
      </section>

      {/* ② テキスト紹介セクション */}
      <section className="relative z-10 text-white px-4 py-20">
        {/* 編集可能な固定テキストコンポーネント（運用中のまま） */}
        <TopFixedText />

        {/* ページタイトルとリード文 */}
        <h1 className="text-3xl lg:text-4xl font-extrabold text-center leading-tight mb-6 text-outline">
          ままのて保育ステーション
        </h1>

        <p className="max-w-3xl mx-auto text-center leading-relaxed text-outline whitespace-pre-line">
          {`「今助けて」が言える場所。お母さんに安心とひと息つける時間を🌿
👶🏻 0ヶ月～小学生｜一時預かり・訪問保育
⏰ 平日10:00-16:00｜当日予約OK｜夜間・土日も相談可
🎈 親子で楽しめるイベントやあそび場も毎月開催
🚃 阪急十三駅から徒歩10分（大阪市淀川区・十三東3-10-8）`}
        </p>
      </section>

      {/* ③ JSON-LD（構造化データ）：ChildCare */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ChildCare",
              name: "ままのて保育ステーション",
              url: "https://ponopono-keiko.shop/",
              description:
                "0ヶ月〜小学生まで対応の一時預かり・訪問保育。平日10:00-16:00（当日予約OK）／夜間・土日も相談可。阪急十三駅から徒歩10分。",
              image: "https://ponopono-keiko.shop/ogpLogo.png",
              address: {
                "@type": "PostalAddress",
                postalCode: "532-0023",
                addressRegion: "大阪府",
                addressLocality: "大阪市淀川区",
                streetAddress: "十三東3-10-8",
              },
              email: "mailto:ponopono.keiko@gmail.com",
              telephone: "+819042741471",
              areaServed: "大阪市淀川区および近隣エリア",
              hasMap:
                "https://maps.google.com/?q=大阪府大阪市淀川区十三東3-10-8",
              slogan: "「今助けて」が言える場所",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              parentOrganization: { "@id": "#owner" },
            },
            {
              "@type": "Person",
              "@id": "#owner",
              name: "井本 景子",
              jobTitle: "オーナー",
              email: "mailto:ponopono.keiko@gmail.com",
              telephone: "+819042741471",
              address: {
                "@type": "PostalAddress",
                postalCode: "532-0023",
                addressRegion: "大阪府",
                addressLocality: "大阪市淀川区",
                streetAddress: "十三東3-10-8",
              },
            },
          ]),
        }}
      />
    </main>
  );
}
