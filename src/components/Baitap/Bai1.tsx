import React, { useState } from 'react'
interface Name{
    name: string;
};
export default function Bai1() {
  const [name, setName] = useState<Name>({
    name:"Ngô Thị Hoài Phương"
  });

  return (
    <div>
          <h4>Bài tập 1</h4>
          <p>Họ và tên: {name.name}</p>
    </div>
  )
}
