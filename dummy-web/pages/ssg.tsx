import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const getData = async () =>
  new Promise((res) => {
    setTimeout(() => {
      res({ title: "짜잔" });
    }, 5000);
  });

const useData = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setData(data);
      setLoading(false);
    })();
  }, []);
  return { data, loading };
};

const SSG: NextPage = (props) => {
  const { data, loading } = useData();
  return (
    <div
      style={{
        height: 500,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>아래쪽에 곧 내용물이 표시될거에요</span>
      <br />
      <div>{loading ? "로딩중..." : data.title}</div>
      <Link href="/next">
        <a>ss</a>
      </Link>
    </div>
  );
};

export default SSG;
