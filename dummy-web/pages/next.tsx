import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { InputHTMLAttributes, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Next: NextPage = (props) => {
  const read = async () => {
    const key = document.getElementById("input_key");
    const value = await localStorage.getItem(key.value);
    alert(value);
  };
  const write = async () => {
    const key = document.getElementById("input_key");
    const value = document.getElementById("input_value");
    await localStorage.setItem(key.value, value.value);
  };
  const send = () => {
    const key = document.getElementById("input_key");
    window.ReactNativeWebView.postMessage(JSON.stringify({ type: "send", key: key?.value }));
  }

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
      <input id="input_key" placeholder="키" />
      <input id="input_value" placeholder="밸류" />
      <button onClick={() => write()}>쓰기</button>
      <button onClick={() => read()}>읽기</button>
      <button onClick={() => send()}>보내기</button>
    </div>
  );
};

export default Next;
