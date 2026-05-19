"use client";

import { useState } from "react";
import { Job, typeColor, typeText } from "../data/jobs";

export default function JobCard({ job }: { job: Job }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded((prev) => !prev)}
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: "18px 20px",
        boxShadow: expanded
          ? "0 0 0 2px #2d6a4f, 0 4px 16px rgba(0,0,0,0.08)"
          : "0 1px 8px rgba(0,0,0,0.06)",
        cursor: "pointer",
        transition: "all 0.2s",
        borderLeft: `4px solid ${expanded ? "#2d6a4f" : "transparent"}`,
        marginBottom: 12,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{
              background: typeColor[job.type],
              color: typeText[job.type],
              fontSize: 11, fontWeight: 700,
              padding: "2px 8px", borderRadius: 20,
            }}>
              {job.type}
            </span>
            <span style={{ color: "#999", fontSize: 12 }}>📍 {job.city}</span>
            <span style={{ color: "#999", fontSize: 12 }}>🇮🇹 伊語: {job.italian}</span>
          </div>
          <div style={{ fontWeight: 700, fontSize: 16, color: "#1a1a1a", marginTop: 8 }}>
            {job.title}
          </div>
          <div style={{ color: "#666", fontSize: 13, marginTop: 2 }}>{job.company}</div>
        </div>
        <div style={{ color: "#bbb", fontSize: 12 }}>{job.posted}</div>
      </div>

      <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
        {job.tags.map((tag) => (
          <span key={tag} style={{
            background: "#f0f4f0", color: "#4a7c59",
            fontSize: 11, padding: "3px 9px",
            borderRadius: 20, fontWeight: 500,
          }}>
            #{tag}
          </span>
        ))}
      </div>

      {expanded && (
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #f0f0f0" }}>
          <p style={{ color: "#444", fontSize: 14, lineHeight: 1.7 }}>{job.desc}</p>
          <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
            <button
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#2d6a4f", color: "#fff",
                border: "none", borderRadius: 8,
                padding: "10px 20px", fontWeight: 700,
                fontSize: 13, cursor: "pointer",
              }}
            >
              📩 応募・問い合わせ
            </button>
            <button
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#f7f5f0", color: "#666",
                border: "1.5px solid #e0e0e0", borderRadius: 8,
                padding: "10px 16px", fontWeight: 600,
                fontSize: 13, cursor: "pointer",
              }}
            >
              🔖 保存
            </button>
          </div>
        </div>
      )}
    </div>
  );
}