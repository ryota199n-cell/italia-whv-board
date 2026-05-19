export type Job = {
  id: number;
  title: string;
  company: string;
  city: string;
  type: "アルバイト" | "フルタイム" | "パート" | "副業";
  italian: string;
  posted: string;
  tags: string[];
  desc: string;
};

export const jobs: Job[] = [
  {
    id: 1,
    title: "和食レストラン ホールスタッフ",
    company: "Ristorante Sakura",
    city: "ミラノ",
    type: "アルバイト",
    italian: "不問",
    posted: "2日前",
    tags: ["飲食", "日本人スタッフ多め", "即日可"],
    desc: "ミラノ中心部の和食レストランでホールスタッフを募集。イタリア語不問、日本語でOKです。",
  },
  {
    id: 2,
    title: "日系アパレルブランド 販売スタッフ",
    company: "KK Fashion Italia",
    city: "ミラノ",
    type: "フルタイム",
    italian: "日常会話",
    posted: "5日前",
    tags: ["アパレル", "英語可", "ビザサポートあり"],
    desc: "ミラノの日系ブランドで接客・販売スタッフを募集。英語・日本語必須。イタリア語歓迎。",
  },
  {
    id: 3,
    title: "民泊アパート 清掃スタッフ（週3〜）",
    company: "Roma Stay",
    city: "ローマ",
    type: "パート",
    italian: "不問",
    posted: "1週間前",
    tags: ["清掃", "週3〜OK", "フレキシブル"],
    desc: "ローマ市内の民泊施設の清掃・チェックイン対応。週3日〜相談可。",
  },
  {
    id: 4,
    title: "日本語教師（オンライン）",
    company: "個人",
    city: "リモート",
    type: "副業",
    italian: "不問",
    posted: "3日前",
    tags: ["オンライン", "リモートOK", "副業"],
    desc: "オンラインで日本語を教えてくださる方を探しています。資格不問、経験者優遇。",
  },
  {
    id: 5,
    title: "シェフ見習い・料理人",
    company: "Borgo Sant'Anna",
    city: "トリノ",
    type: "フルタイム",
    italian: "基礎",
    posted: "2週間前",
    tags: ["料理", "ピエモンテ", "正規契約"],
    desc: "ピエモンテ州のレストランで料理人を募集。イタリア人シェフと一緒に働けます。",
  },
];

export const cities = ["すべて", "ミラノ", "ローマ", "トリノ", "フィレンツェ", "リモート"];
export const types = ["すべて", "アルバイト", "フルタイム", "パート", "副業"];

export const typeColor: Record<string, string> = {
  アルバイト: "#e8f5e9",
  フルタイム: "#e3f2fd",
  パート: "#fff3e0",
  副業: "#f3e5f5",
};

export const typeText: Record<string, string> = {
  アルバイト: "#2e7d32",
  フルタイム: "#1565c0",
  パート: "#e65100",
  副業: "#6a1b9a",
};