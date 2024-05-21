import React, { useState } from "react";

export default function Bai6() {
    const [count, setCount] = useState<number>(0);

    const incrementCount = () => {
        setCount(count + 1);
    };
  return (
      <div>
          <h4>Bài tập 6</h4>
          <p>Bạn đã click {count} lần</p>
          <button onClick={incrementCount}>Click để tăng số lần click</button>
    </div>
  )
}
