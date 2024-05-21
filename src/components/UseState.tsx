// import React from 'react'
import { useState } from 'react'

export default function UseState() {
    const [count, setCount] = useState<number>(0);
    const increase = () => {
        setCount(pre=>pre+1)
        setCount(a=>a+2)
        setCount(b=>b+3)
    }
    /*
    hoock là những cái hàm thôi, khi dùng hàm để ý cho thầy đầu vào của hàm,
    đầu ra trả về kết quả là gì?
    useState dùng để quản lý trạng thái của dữ liệu
    useState trả về 1 mảng này có 2 phần tử 
    + phần tử đầu tiên là giá trị chuyền vào useState
    + phần tử thứ hai là 1 function
    thầy dùng destructoring để hứng lấy giá trị 

    khi cập nhật lại trạng thái của dữ liệu(setCount) thì component reden lại
     */
    // const result = useState(0)
    // const [c, d] = useState(0);
    // console.log("gia tri cua result",result);
    // let arr = [5, 6];
    // let [a,b]=arr

    
  return (
    <div>
          UseState
          <p>giá trị biến count:{count}</p>
          <button onClick={increase}>tăng</button>
          <button onClick={()=>setCount(count -1)}>giảm</button>
    </div>
  )
}
