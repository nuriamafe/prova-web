import React, { useState } from "react";
import { Button, Image } from "antd";

function HomePage() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Click me!</Button>
      <Image
        style={{
          display: "none",
        }}
        src="https://images.ecestaticos.com/zb2gwaJHWnWd9XU-pKKsjxhI3uk=/6x0:1274x951/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fec2%2F3a0%2F837%2Fec23a0837f209cf508cef5d946cfbb06.jpg"
        preview={{
          visible,
          src: "https://images.ecestaticos.com/zb2gwaJHWnWd9XU-pKKsjxhI3uk=/6x0:1274x951/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fec2%2F3a0%2F837%2Fec23a0837f209cf508cef5d946cfbb06.jpg",
          onVisibleChange: (value) => {
            setVisible(value);
          },
        }}
      />
    </>
  );
}

export default HomePage;
