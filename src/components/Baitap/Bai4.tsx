import React, { useState } from 'react'

export default function Bai4() {
    const [isHidden, setIsHidden] = useState(false);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };
  return (
      <div>
          <h4>Bài tập 4</h4>
        <button onClick={toggleVisibility}>Hiện</button>
        {isHidden ? null : <p>Tiêu đề Văn Bản</p>}
    </div>
  )
}
