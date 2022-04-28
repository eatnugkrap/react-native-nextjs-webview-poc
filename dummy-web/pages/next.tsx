import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Next: NextPage = (props) => {
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
      와 이건 다음페이지 입니다.
    </div>
  );
};

export default Next;
