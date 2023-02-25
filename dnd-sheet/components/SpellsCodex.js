import React, { useEffect, useState } from 'react';
import spellData from '../content/spells.json';
import SpellCard from './SpellCard';

const SpellsCodex = () => {
    const [searchField, setSearchField] = useState("");

    const handleChange = (e) => {
        setSearchField(e.target.value);
    };

    return(
        <div className="grid grid-cols-2">
            <div className="m-2">
                <input onChange={handleChange} className="placeholder:italic placeholder:text-slate-400 block w-full bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-4" placeholder="Search for spells..." type="search" name="search"/>

                {spellData.filter((spell) => {
                    return spell.name.toLowerCase().includes(searchField.toLowerCase());
                }).map(spell => {
                    return (<p>{spell.name}: {spell.level}</p>);
                })}
            </div>

            <div className="m-2">
                <SpellCard />
            </div>
        </div>
    );
}

export default SpellsCodex;