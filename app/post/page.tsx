"use client";

import { useState } from "react";

export default function PostPage() {
  const [submitted, setSubmitted] = useState(false);

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
              color: "#c8e6c9", borderRadius: "8px 8px 0 0",
              padding: "9px 20px", fontWeight: 500,
              fontSize: 13, textDecoration: "none",
            }}>📋 ワーホリ情報</a>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 20px" }}>
        {submitted ? (
          <div style={{
            background: "#fff", borderRadius: 12,
            padding: "48px 28px",
            boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
            <h2 style={{ fontSize: 20, color: "#1a472a", marginBottom: 8 }}>投稿を受け付けました！</h2>
            <p style={{ color: "#888", fontSize: 14 }}>審査後に掲載されます。通常1〜2営業日以内にご連絡します。</p>
            <a href="/" style={{
              display: "inline-block", marginTop: 24,
              background: "#2d6a4f", color: "#fff",
              borderRadius: 8, padding: "10px 24px",
              fontWeight: 700, fontSize: 14, textDecoration: "none",
            }}>求人一覧に戻る</a>
          </div>
        ) : (
          <div style={{
            background: "#fff", borderRadius: 12,
            padding: "28px 28px",
            boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
          }}>
            <h2 style={{ margin: "0 0 6px", fontSize: 20, color: "#1a472a" }}>求人を投稿する</h2>
            <p style={{ color: "#888", fontSize: 13, margin: "0 0 24px" }}>無料で掲載できます。審査後に公開されます。</p>

            {[
              ["求人タイトル", "例：和食レストランのホールスタッフ募集"],
              ["会社・店舗名", "例：Ristorante Sakura"],
              ["勤務地（都市）", "例：ミラノ"],
              ["給与・待遇", "例：時給€10〜、週3日〜相談可"],
            ].map(([label, placeholder]) => (
              <div key={label} style={{ marginBottom: 16 }}>
                <label style={{
                  display: "block", fontWeight: 600,
                  fontSize: 13, color: "#333", marginBottom: 6,
                }}>{label}</label>
                <input
                  placeholder={placeholder}
                  style={{
                    width: "100%", border: "1.5px solid #e0e0e0",
                    borderRadius: 8, padding: "10px 14px",
                    fontSize: 14, outline: "none",
                    boxSizing: "border-box" as const,
                  }}
                />
              </div>
            ))}

            <div style={{ marginBottom: 24 }}>
              <label style={{
                display: "block", fontWeight: 600,
                fontSize: 13, color: "#333", marginBottom: 6,
              }}>仕事内容・詳細</label>
              <textarea
                placeholder="仕事の内容、求める人材、連絡先など..."
                rows={5}
                style={{
                  width: "100%", border: "1.5px solid #e0e0e0",
                  borderRadius: 8, padding: "10px 14px",
                  fontSize: 14, outline: "none",
                  resize: "vertical", boxSizing: "border-box" as const,
                }}
              />
            </div>

            <button
              onClick={() => setSubmitted(true)}
              style={{
                background: "#2d6a4f", color: "#fff",
                border: "none", borderRadius: 8,
                padding: "12px 28px", fontWeight: 700,
                fontSize: 14, cursor: "pointer", width: "100%",
              }}
            >
              📤 投稿する（無料）
            </button>
          </div>
        )}
      </div>

      <footer style={{ textAlign: "center", color: "#bbb", fontSize: 12, padding: "32px 0 20px" }}>
        Italia WHV Board © 2025 — イタリアワーホリコミュニティ
      </footer>
    </div>
  );
}