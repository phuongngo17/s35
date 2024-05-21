import React, { useState } from 'react';

export default function Bai7() {
    const [text, setText] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(event.target.value);
        setText(event.target.value);
    }
    const CounText = text.length;
    return (
        <div>
            <h4>Bài tập 7</h4>
            <textarea onChange={handleChange} name="" id="" placeholder="Nhập dữ liệu"></textarea>
            <p>Số kí tự:{CounText }</p>
        </div>
    );
}