import React, { useState } from "react";
import { Button, Image } from "antd";
import cul from "../assets/cul.jpg";
import foto0 from "../assets/foto0.jpg";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";

function HomePage() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Image.PreviewGroup items={[cul, foto0, foto1, foto2, foto3]}>
        <Image width={200} src={cul} />
      </Image.PreviewGroup>
    </>
  );
}

export default HomePage;
