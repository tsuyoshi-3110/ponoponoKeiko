"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import clsx from "clsx";
import { useThemeGradient } from "@/lib/useThemeGradient";
import { useHeaderLogoUrl } from "../hooks/useHeaderLogoUrl";
import { auth } from "@/lib/firebase";
import { THEMES, ThemeKey } from "@/lib/themes";

const HEADER_H = "3rem";

type MenuItem = {
  href: string;
  label: string; // 日本語のみ
  external?: boolean;
};

export default function Header({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const gradient = useThemeGradient();
  const logoUrl = useHeaderLogoUrl();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const gradientClass = gradient
    ? `bg-gradient-to-b ${gradient}`
    : "bg-gray-100";

  // ダーク判定（brandH, brandG, brandI）
  const darkKeys: ThemeKey[] = ["brandH", "brandG", "brandI"];
  const currentKey = (Object.entries(THEMES).find(
    ([, v]) => v === gradient
  )?.[0] ?? null) as ThemeKey | null;
  const isDark = currentKey ? darkKeys.includes(currentKey) : false;

  const textColor = isDark ? "text-white" : "text-black";
  const sepColor = isDark ? "bg-white/25" : "bg-black/15";

  // ── ままのて用メニュー（日本語のみ） ──────────────
  const menuItems: MenuItem[] = [
    { href: "/", label: "ホーム" },
    { href: "/products", label: "サービス・プログラム" },
    { href: "/stores", label: "施設情報（所在地・アクセス）" },
    { href: "/about", label: "当園の想い" },
    { href: "/blog", label: "ブログ" },
    { href: "/news", label: "お知らせ・イベント" },
    // 外部（予約・問合せ）
    {
      href: "https://line.me/R/ti/p/@189noyie?ts=05050417&oat_content=url",
      label: "お問い合わせ（LINE）",
      external: true,
    },
  ];

  // 下部固定ブロック（管理用）
  const adminItems: MenuItem[] = [
    { href: "/postList", label: "タイムライン" },
    { href: "/analytics", label: "アクセス分析" },
    { href: "/login", label: "管理者ログイン" },
  ];

  function MenuLink({
    item,
    onClick,
  }: {
    item: MenuItem;
    onClick?: () => void;
  }) {
    const inner = (
      <div className="leading-tight text-center">
        <div className={clsx("text-base md:text-lg font-semibold", textColor)}>
          {item.label}
        </div>
      </div>
    );

    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className="block px-3 py-1.5 rounded-md hover:opacity-85 transition"
        >
          {inner}
        </a>
      );
    }

    return (
      <Link
        href={item.href}
        onClick={onClick}
        className="block px-3 py-1.5 rounded-md hover:opacity-85 transition"
      >
        {inner}
      </Link>
    );
  }

  return (
    <header
      className={clsx(
        "sticky top-0 z-30 flex items-center justify-between px-2 sm:px-4 h-12",
        gradientClass,
        className,
        !isDark && "border-b border-gray-300"
      )}
      style={{ "--header-h": HEADER_H } as React.CSSProperties}
    >
      {/* ロゴ／ブランド */}
      <Link
        href="/"
        className={clsx(
          "min-w-0 text-md font-bold flex items-center gap-2 py-2 hover:opacity-80",
          textColor
        )}
        aria-label="ホーム"
      >
        {logoUrl && logoUrl.trim() !== "" && (
          <Image
            src={logoUrl}
            alt="ままのて保育ステーション ロゴ"
            width={40}
            height={40}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-opacity duration-200 shrink-0"
            unoptimized
          />
        )}
        <span className="truncate max-w-[52vw] sm:max-w-none">
          ままのて保育ステーション
        </span>
      </Link>

      {/* 右側：クイックリンク（スマホでも表示する） */}
      <nav className="flex items-center gap-2 ml-auto mr-3 sm:gap-3 sm:mr-2 ">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/mamanote_hoiku.sta?igsh=eGt3MGR5NGp2azB1&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagramで見る"
          className="inline-flex rounded-md overflow-hidden hover:opacity-80 transition"
        >
          <Image
            src="/instagram-logo.png"
            alt="Instagramで見る"
            width={24}
            height={24}
            className="h-9 w-9 sm:h-7 sm:w-7 object-contain rounded-md"
            unoptimized
          />
        </a>

        {/* LINE */}
        <a
          href="https://line.me/R/ti/p/@189noyie?ts=05050417&oat_content=url"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LINEでつながる"
          className="inline-flex rounded-md overflow-hidden hover:opacity-80 transition"
        >
          <Image
            src="/line-logo.png"
            alt="LINEでつながる"
            width={24}
            height={24}
            className="h-9 w-9 sm:h-7 sm:w-7 object-contain rounded-md"
            unoptimized
          />
        </a>
      </nav>

      {/* ハンバーガーメニュー */}
      <div className="sm:ml-2">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={clsx(
                "w-8 h-8 border-2",
                isDark ? "text-white border-white" : "text-black border-black"
              )}
              aria-label="メニューを開く"
            >
              <Menu size={22} />
            </Button>
          </SheetTrigger>

          {/* 縦いっぱい＋上下2段構成 */}
          <SheetContent
            side="right"
            className={clsx(
              "flex h-[100dvh] max-h-[100dvh] flex-col p-0",
              "bg-gray-100",
              gradient && "bg-gradient-to-b",
              gradient
            )}
          >
            {/* ヘッダー（日本語のみ） */}
            <SheetHeader className="px-4 pt-4 pb-2">
              <SheetTitle
                className={clsx(
                  "text-center text-lg md:text-xl leading-tight",
                  textColor
                )}
              >
                メニュー
              </SheetTitle>
            </SheetHeader>

            {/* スマホ専用クイックリンク（ドロワー上部） */}
            <div className="sm:hidden px-4 pb-3 flex items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/mamanote_hoiku.sta?igsh=eGt3MGR5NGp2azB1&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagramで見る"
                className="inline-flex rounded-full hover:opacity-80 transition"
              >
                <Image
                  src="/instagram-logo.png"
                  alt="Instagramで見る"
                  width={36}
                  height={36}
                  className="h-9 w-9"
                  unoptimized
                />
              </a>
              <a
                href="https://line.me/R/ti/p/@189noyie?ts=05050417&oat_content=url"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LINEでつながる"
                className="inline-flex rounded-full hover:opacity-80 transition"
              >
                <Image
                  src="/line-logo.png"
                  alt="LINEでつながる"
                  width={36}
                  height={36}
                  className="h-9 w-9"
                  unoptimized
                />
              </a>
            </div>

            {/* ▼ 区切り線 */}
            <div className={clsx("h-px mx-4", sepColor)} />

            {/* 上段：通常メニュー（スクロール領域） */}
            <div className="flex-1 min-h-0 overflow-y-auto">
              <div className="flex flex-col items-center text-center space-y-2 md:space-y-3 px-2 py-2">
                {menuItems.map((item) => (
                  <MenuLink
                    key={item.href}
                    item={item}
                    onClick={() => setOpen(false)}
                  />
                ))}
              </div>
            </div>

            {/* 下段：固定ブロック（管理用） */}
            <div className="shrink-0 px-2 pt-2 pb-[max(env(safe-area-inset-bottom),12px)] bg-black/0">
              <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                {isLoggedIn && (
                  <>
                    <MenuLink
                      item={adminItems[0]} // タイムライン
                      onClick={() => setOpen(false)}
                    />
                    <MenuLink
                      item={adminItems[1]} // アクセス分析
                      onClick={() => setOpen(false)}
                    />
                  </>
                )}
                <MenuLink
                  item={adminItems[2]} // 管理者ログイン
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
