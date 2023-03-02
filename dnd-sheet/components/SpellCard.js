import React, { useEffect, useState } from 'react';

const SpellCard = ({spell}) => {
    // const spell = props.spell;
    console.log(spell)
    return(
        <h1>{spell.description}</h1>
        // <table class="table-auto border-t-orange-400 border-b-orange-400 border-y-4 border-solid bg-orange-50 w-full">
        //     <tr>
        //         <th>
        //             <h1>{spell.name}</h1>
        //         </th>
        //     </tr>
        //     <tr>
        //         <td>
        //             <span className="italic">{spell.level}</span>
        //         </td>
        //     </tr>
        //     <tr>
        //         <td>
        //             <span className="font-bold">Casting Time:</span>{spell.casting_time}
        //         </td>
        //     </tr>
        //     <tr>
        //         <td>
        //             <span className="font-bold">Range:</span>{spell.range}
        //         </td>
        //     </tr>
        //     <tr>
        //         <td>
        //             <span className="font-bold">Components:</span>{spell.components?.raw}
        //         </td>
        //     </tr>
        //     <tr>
        //         <td>
        //             <span className="font-bold">Duration:</span>{spell.duration}
        //         </td>
        //     </tr>

        //     <tbody className="border-t-2 border-solid border-orange-700">
        //         <tr>
        //             <p>{spell.description}</p>
        //         </tr>
        //         <tr>
        //             <td>
        //                 <span className="font-bold">Classes:</span> {spell.classes}
        //             </td>
        //         </tr>
        //     </tbody>
        // </table>
    );
}

export default SpellCard;