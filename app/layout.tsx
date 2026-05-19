import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Italia WHV Board | イタリアワーキングホリデー 求人・掲示板",
  description: "イタリアワーホリで働きたい日本人のための求人掲示板。無料で求人投稿もできます。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}