import React, { useState } from 'react';

export default function Bai9() {
    const [gender, setGender] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputGender = event.target.value;
        setGender(inputGender);
    };

    return (
        <div>
            <h4>Bài tập 9</h4>
            <p>Giới tính: {gender}</p>
            <input name="gender" onChange={handleChange} value="Nam" type="radio" />
            <label htmlFor="">Nam</label><br />
            <input name="gender" onChange={handleChange} value="Nữ" type="radio" />
            <label htmlFor="">Nữ</label><br />
            <input name="gender" onChange={handleChange} value="Khác" type="radio" />
            <label htmlFor="">Khác</label>
        </div>
    );
}