import JobList from "../components/JobList";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f7f5f0" }}>
      {/* ヘッダー */}
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
              fontWeight: 700, fontSize: 13,
              textDecoration: "none",
            }}>
              + 求人を投稿
            </a>
          </div>
          <div style={{ display: "flex", gap: 0 }}>
            <a href="/" style={{
              background: "#f7f5f0", color: "#1a472a",
              borderRadius: "8px 8px 0 0", padding: "9px 20px",
              fontWeight: 700, fontSize: 13, textDecoration: "none",
            }}>💼 求人を探す</a>
            <a href="/info" style={{
              color: "#c8e6c9",
              borderRadius: "8px 8px 0 0", padding: "9px 20px",
              fontWeight: 500, fontSize: 13, textDecoration: "none",
            }}>📋 ワーホリ情報</a>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 20px" }}>
        <JobList />
      </div>

      <footer style={{ textAlign: "center", color: "#bbb", fontSize: 12, padding: "32px 0 20px" }}>
        Italia WHV Board © 2025 — イタリアワーホリコミュニティ
      </footer>
    </div>
  );
}