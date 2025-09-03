// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Script from "next/script";
import ThemeBackground from "@/components/ThemeBackground";
import WallpaperBackground from "@/components/WallpaperBackground";
import SubscriptionOverlay from "@/components/SubscriptionOverlay";
import { SITE_KEY } from "@/lib/atoms/siteKeyAtom";
import {
  kosugiMaru,
  notoSansJP,
  shipporiMincho,
  reggaeOne,
  yomogi,
  hachiMaruPop,
} from "@/lib/font";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// ✅ ままのて保育ステーション（保育サービス）用メタ情報
export const metadata: Metadata = {
  title: "ままのて保育ステーション｜大阪市淀川区の一時預かり・訪問保育",
  description:
    "大阪市淀川区の一時預かり・訪問保育『ままのて保育ステーション』公式サイト。0ヶ月〜小学生まで対応／平日10:00-16:00（当日予約OK）／夜間・土日もご相談可。阪急十三駅から徒歩10分。",
  keywords: [
    "ままのて保育ステーション",
    "保育",
    "一時預かり",
    "訪問保育",
    "ベビーシッター",
    "大阪市淀川区",
    "十三",
    "子育て支援",
  ],
  authors: [{ name: "ままのて保育ステーション" }],
  // ★ 新ドメイン（相対URLを絶対URL化）
  metadataBase: new URL("https://ponopono-keiko.shop"),
  alternates: {
    canonical: "https://ponopono-keiko.shop/",
  },
  openGraph: {
    title: "ままのて保育ステーション｜大阪市淀川区の一時預かり・訪問保育",
    description:
      "「今助けて」が言える場所。0ヶ月〜小学生まで／平日10:00-16:00（当日予約OK）夜間・土日もご相談可。阪急十三駅から徒歩10分。",
    url: "https://ponopono-keiko.shop/",
    siteName: "ままのて保育ステーション",
    type: "website",
    images: [
      {
        url: "/ogpLogo.png", // metadataBase により絶対URL化
        width: 1200,
        height: 630,
        alt: "ままのて保育ステーション OGP",
      },
    ],
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ままのて保育ステーション｜大阪市淀川区の一時預かり・訪問保育",
    description:
      "0ヶ月〜小学生まで／平日10:00-16:00（当日予約OK）夜間・土日もご相談可。阪急十三駅から徒歩10分。",
    images: ["/ogpLogo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=4" },
      { url: "/icon.png", type: "image/png", sizes: "any" },
    ],
    apple: "/icon.png",
    shortcut: "/favicon.ico?v=4",
  },
};

// ✅ themeColor は viewport 側で指定
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`
        ${geistSans.variable} ${geistMono.variable}
        ${kosugiMaru.variable} ${notoSansJP.variable}
        ${yomogi.variable} ${hachiMaruPop.variable} ${reggaeOne.variable} ${shipporiMincho.variable}
        antialiased
      `}
    >
      <head>
        {/* OGP画像の事前読み込み（/ogpLogo.png を固定運用） */}
        <link rel="preload" as="image" href="/ogpLogo.png" type="image/png" />
        {/* 検索コンソールの所有権確認を行う場合は下記を使用
        <meta name="google-site-verification" content="（コード）" />
        */}
      </head>

      <body className="relative min-h-screen bg-[#ffffff]">
        <SubscriptionOverlay siteKey={SITE_KEY} />
        <WallpaperBackground />
        <ThemeBackground />
        <Header />
        {children}

        {/* 構造化データ（WebSite / ChildCare / Person）※絶対URLで記述 */}
        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                name: "ままのて保育ステーション",
                url: "https://ponopono-keiko.shop/",
                inLanguage: "ja",
                image: "https://ponopono-keiko.shop/ogpLogo.png",
                publisher: { "@id": "#owner" },
                description:
                  "大阪市淀川区の一時預かり・訪問保育『ままのて保育ステーション』公式サイト。0ヶ月〜小学生まで対応／平日10:00-16:00（当日予約OK）。阪急十三駅から徒歩10分。",
              },
              {
                "@type": "ChildCare", // 保育サービスに適したタイプ
                name: "ままのて保育ステーション",
                url: "https://ponopono-keiko.shop/",
                image: "https://ponopono-keiko.shop/ogpLogo.png",
                description:
                  "「今助けて」が言える場所。お母さんに安心とひと息つける時間を。0ヶ月〜小学生｜一時預かり・訪問保育｜平日10:00-16:00（当日予約OK）｜夜間・土日も相談可。親子イベントも毎月開催。",
                address: {
                  "@type": "PostalAddress",
                  postalCode: "532-0023",
                  addressRegion: "大阪府",
                  addressLocality: "大阪市淀川区",
                  streetAddress: "十三東3-10-8",
                },
                email: "mailto:ponopono.keiko@gmail.com",
                telephone: "+81 90-4274-1471",
                areaServed: "大阪市淀川区および近隣エリア",
                hasMap: "https://maps.google.com/?q=大阪府大阪市淀川区十三東3-10-8",
                // 営業時間（平日10:00-16:00）
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
                // 追加情報
                slogan: "「今助けて」が言える場所",
                parentOrganization: { "@id": "#owner" },
              },
              {
                "@type": "Person",
                "@id": "#owner",
                name: "井本 景子",
                jobTitle: "オーナー",
                email: "mailto:ponopono.keiko@gmail.com",
                telephone: "+81 90-4274-1471",
                address: {
                  "@type": "PostalAddress",
                  postalCode: "532-0023",
                  addressRegion: "大阪府",
                  addressLocality: "大阪市淀川区",
                  streetAddress: "十三東3-10-8",
                },
              },
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
