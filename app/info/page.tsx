export default function InfoPage() {
  const cards = [
    {
      icon: "🛂", title: "ワーホリビザの基本",
      items: ["対象年齢：18〜30歳", "滞在期間：最大1年", "就労：1雇用主6ヶ月まで（要確認）", "申請：抽選制（2025年開始）"],
    },
    {
      icon: "💶", title: "お金のこと",
      items: ["最低賃金：業種によって異なる（€9〜12/h目安）", "税金：Codice Fiscale（税番号）が必要", "銀行口座：到着後に開設", "送金：Wise推奨"],
    },
    {
      icon: "🏠", title: "住居探し",
      items: ["Idealista・Subito.itが主流", "Facebookグループも有効", "シェアハウスが一般的（€400〜700/月）", "ミラノは特に競争が激しい"],
    },
    {
      icon: "🇮🇹", title: "イタリア語",
      items: ["求人の多くはA2〜B1程度あれば有利", "日本食レストランは不問が多い", "Duolingo・Anki・iTalki活用", "現地語学学校も選択肢"],
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f7f5f0" }}>
      <header style={{
        background: "linear-gradient(135deg, #1a472a 0%, #2d6a4f 60%, #40916c 100%)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between", padding: "16px 0",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 28 }}>🇮🇹</span>
              <div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: 20 }}>
                  Italia WHV Board
                </div>
                <div style={{ color: "#a8d5b5", fontSize: 11, marginTop: 2 }}>
                  イタリアワーキングホリデー 求人・掲示板
                </div>
              </div>
            </div>
            <a href="/post" style={{
              background: "#f4a261", color: "#fff",
              borderRadius: 8, padding: "9px 18px",
              fontWeight: 700, fontSize: 13, textDecoration: "none",
            }}>
              + 求人を投稿
            </a>
          </div>
          <div style={{ display: "flex" }}>
            <a href="/" style={{
              color: "#c8e6c9", borderRadius: "8px 8px 0 0",
              padding: "9px 20px", fontWeight: 500,
              fontSize: 13, textDecoration: "none",
            }}>💼 求人を探す</a>
            <a href="/info" style={{
              background: "#f7f5f0", color: "#1a472a",
              borderRadius: "8px 8px 0 0", padding: "9px 20px",
              fontWeight: 700, fontSize: 13, textDecoration: "none",
            }}>📋 ワーホリ情報</a>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {cards.map((card) => (
            <div key={card.title} style={{
              background: "#fff", borderRadius: 12,
              padding: "18px 20px",
              boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
            }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#1a472a", marginBottom: 12 }}>
                {card.icon} {card.title}
              </div>
              <ul style={{ margin: 0, padding: "0 0 0 18px", color: "#555", fontSize: 14, lineHeight: 1.9 }}>
                {card.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ textAlign: "center", color: "#bbb", fontSize: 12, padding: "32px 0 20px" }}>
        Italia WHV Board © 2025 — イタリアワーホリコミュニティ
      </footer>
    </div>
  );
}