import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import AppLayout from "../components/Main/AppLayout";

const index = () => {
  const [sayimiz, setSayimiz] = useState();

  useEffect(() => {
    setTimeout(() => {
      getSayi();
    }, 1000);
  }, []);

  const getSayi = async () => {
    const namemimiz = await fetch("/api/sayi");
    const name = await namemimiz.json();
    setSayimiz(name.name);
  };

  return <AppLayout>{sayimiz}</AppLayout>;
};

export default index;
