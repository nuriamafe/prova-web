import React, { useState } from "react";
import { Button, Image } from "antd";
import foto from "../assets/cul.jpg";

function HomePage() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Click me!</Button>
      <Image
        style={{
          display: "none",
        }}
        src={foto}
        preview={{
          visible,
          src: foto,
          onVisibleChange: (value) => {
            setVisible(value);
          },
        }}
      />
    </>
  );
}

export default HomePage;
