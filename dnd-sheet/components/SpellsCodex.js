import React, { useEffect, useState } from 'react';
import spellData from '../content/spells.json';
import SpellCard from './SpellCard';

const SpellsCodex = () => {
    const [searchField, setSearchField] = useState("");
    const [selectedSpell, setSelectedSpell] = useState(spellData[0]);

    const handleChange = (e) => {
        setSearchField(e.target.value);
    };

    const handleSpellSelect = spell => () => {
        setSelectedSpell(spell)
    }

    return(
        <div className="grid grid-cols-2">
            <div className="m-2">
                <input onChange={handleChange} className="placeholder:italic placeholder:text-slate-400 block w-full bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-4" placeholder="Search for spells..." type="search" name="search"/>
                <div className="flex flex-row items-stretch">
                    <a className="border rounded py-0.5 basis-1/2 text-center">Name</a>
                    <a className="border rounded py-0.5 basis-1/4 text-center">Level</a>
                    <a className="border rounded py-0.5 basis-1/4 text-center">Time</a>
                    <a className="border rounded py-0.5 basis-1/2 text-center">School</a>
                </div>

                {spellData.filter((spell) => {
                    return spell.name.toLowerCase().includes(searchField.toLowerCase());
                }).map(spell => {
                    const tag = "#" + spell.name
                    return (
                        <div key={spell.name}>
                            <a href={tag} className="flex border-b-2 border-solid pb-0.5 px-1 cursor-pointer hover:bg-slate-200 focus:bg-sky-400" onClick={handleSpellSelect(spell)}>
                                <span className="basis-1/2 font-bold">{spell.name}</span>
                                <span className="basis-1/4 font-light">{spell.level}</span>
                                <span className="basis-1/4 font-light">{spell.casting_time}</span>
                                <span className="basis-1/2 font-light">{spell.school}</span>
                            </a>
                        </div>
                    );
                })}
            </div>

            <div className="m-2">
                <SpellCard spell={selectedSpell} />
            </div>
        </div>
    );
}

export default SpellsCodex;