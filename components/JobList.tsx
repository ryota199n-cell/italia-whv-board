"use client";

import { useState, useEffect } from "react";
import { supabase } from "../app/lib/supabase";
import { cities, types } from "../data/jobs";
import JobCard from "./JobCard";

type Job = {
  id: number;
  title: string;
  company: string;
  city: string;
  type: "アルバイト" | "フルタイム" | "パート" | "副業";
  italian: string;
  posted: string;
  tags: string;
  desc: string;
};

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [cityFilter, setCityFilter] = useState("すべて");
  const [typeFilter, setTypeFilter] = useState("すべて");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) setJobs(data);
      setLoading(false);
    };
    fetchJobs();
  }, []);

  const filtered = jobs.filter((j) => {
    const cityOk = cityFilter === "すべて" || j.city === cityFilter;
    const typeOk = typeFilter === "すべて" || j.type === typeFilter;
    const searchOk =
      search === "" ||
      j.title.includes(search) ||
      j.company.includes(search) ||
      j.tags.includes(search);
    return cityOk && typeOk && searchOk;
  });

  return (
    <>
      <div style={{
        background: "#fff", borderRadius: 12,
        padding: "16px 20px", marginBottom: 20,
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
        display: "flex", flexWrap: "wrap", gap: 12,
      }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 キーワードで検索..."
          style={{
            flex: "1 1 200px", border: "1.5px solid #e0e0e0",
            borderRadius: 8, padding: "9px 14px",
            fontSize: 14, outline: "none",
          }}
        />
        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          style={{
            border: "1.5px solid #e0e0e0", borderRadius: 8,
            padding: "9px 14px", fontSize: 14,
            background: "#fff", cursor: "pointer",
          }}
        >
          {cities.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          style={{
            border: "1.5px solid #e0e0e0", borderRadius: 8,
            padding: "9px 14px", fontSize: 14,
            background: "#fff", cursor: "pointer",
          }}
        >
          {types.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>

      <div style={{ color: "#888", fontSize: 13, marginBottom: 14 }}>
        {loading ? "読み込み中..." : `${filtered.length}件の求人が見つかりました`}
      </div>

      <div>
        {filtered.map((job) => (
          <JobCard key={job.id} job={{...job, tags: (job.tags ?? "").split(",")}} />
        ))}
        {!loading && filtered.length === 0 && (
          <div style={{ textAlign: "center", color: "#aaa", padding: "60px 0", fontSize: 15 }}>
            😕 条件に合う求人が見つかりませんでした
          </div>
        )}
      </div>
    </>
  );
}