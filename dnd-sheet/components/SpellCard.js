import React, { useEffect, useState } from 'react';

const SpellCard = ({spell}) => {

    const type = spell.level == "cantrip" ? spell.school + " " + spell.level : "level " + spell.level + " " + spell.school;

    return(
        <table className="table-auto border-t-orange-400 border-b-orange-400 border-y-4 border-solid bg-orange-50 w-full">
            <thead>
            <tr>
                <th>
                    <h1 className="text-red-800 text-left text-4xl font-light font-serif p-1">{spell.name}</h1>
                </th>
            </tr>
            <tr>
                <td>
                    <span className="italic">
                        {type}
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <span className="font-bold">Casting Time:</span> {spell.casting_time}
                </td>
            </tr>
            <tr>
                <td>
                    <span className="font-bold">Range:</span> {spell.range}
                </td>
            </tr>
            <tr>
                <td>
                    <span className="font-bold">Components:</span> {spell.components?.raw}
                </td>
            </tr>
            <tr>
                <td>
                    <span className="font-bold">Duration:</span> {spell.duration}
                </td>
            </tr>
            </thead>
            <tbody className="border-t-2 border-solid border-orange-700">
                <tr>
                    <td className="p-2">
                        <p>{spell.description}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className="font-bold">Classes:</span> {spell.classes.join(",")}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default SpellCard;