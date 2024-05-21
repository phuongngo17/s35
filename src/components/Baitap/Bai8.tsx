import React, { useState } from 'react';

export default function Bai8() {
    const [selectedCity, setSelectedCity] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedCity(selectedValue);
    };

    return (
        <div>
            <h4>Bài tập 8</h4>
            <p>Thành phố: {selectedCity}</p>
            <select onChange={handleChange} name="" id="">
                <option value="">--Chọn thành phố--</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hà Nam">Hà Nam</option>
                <option value="Ninh Bình">Ninh Bình</option>
                <option value="Thanh Hóa">Thanh Hóa</option>
                <option value="Nghệ An">Nghệ An</option>
            </select>
        </div>
    );
}