import React, { useState } from 'react'

export default function Bai3() {
  const [color, setColor] = useState('black');

  const changeColor = () => {
    setColor('red');
  };
  return (
    <div>
      <h4>Bài tập 3</h4>
      <p style={{ color: color }}>Tiêu đề văn bản</p>
      <button onClick={changeColor}>Thay đổi màu</button>
    </div>
  )
}

