import React, { useEffect, useState } from 'react';

const SpellCard = () => {

    return(
        <table class="table-auto border-t-orange-700 border-b-orange-700 border-2 border-solid bg-orange-50 w-full">
            <thead>
                <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                </tr>
                <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
                </tr>
                <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
                </tr>
            </tbody>
        </table>
    );
}

export default SpellCard;