import { useLayoutEffect, useState } from "react";

function Example() {
  const [color, setColor] = useState("red");

  useLayoutEffect(() => {
    setColor("blue");
  }, []);

  return <div style={{ backgroundColor: color, height: 100 }}>Color Box</div>;
}
export default Example
