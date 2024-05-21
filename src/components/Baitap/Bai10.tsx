import React, { useState } from 'react';

export default function Bai10() {
    const [selectedSports, setSelectedSports] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedSport = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedSports([...selectedSports, selectedSport]);
        } else {
            setSelectedSports(selectedSports.filter((sport) => sport !== selectedSport));
        }
    };

    return (
        <div>
            <h4>Bài tập 10</h4>
            <p>Sở thích: {selectedSports.join(', ')}</p>
            <input name="sport" onChange={handleChange} value="Đi chơi" type="checkbox" />
            <label htmlFor="">Đi chơi</label><br />
            <input name="sport" onChange={handleChange} value="Code" type="checkbox" />
            <label htmlFor="">Code</label><br />
            <input name="sport" onChange={handleChange} value="Bơi lội" type="checkbox" />
            <label htmlFor="">Bơi lội</label> <br />
            <input name="sport" onChange={handleChange} value="Nhảy dây" type="checkbox" />
            <label htmlFor="">Nhảy dây</label><br />
        </div>
    );
}