import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import { rollDice } from '../util/roll'

const Character = () => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState(''); // not sure wanna use input since im not actually submiting to a backend

    useEffect(() => {
        console.log("yoo")
        const socket = socketIOClient('localhost:3001');
        setSocket(socket)
        socket.on('connect', (data) => {
            console.log('client connected successfully!')
        })
        socket.on('message',(msg) => {
            setMessages( msgs => [...msgs, msg])
        })
    },[setSocket]);

    const handleRoll = () => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        socket.emit('message', `${name} rolled a ${randomNumber}!`)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div className="container mx-auto mt-4 max-w-7xl">
            <Head>
                <title>DnD Character Sheet</title>
                <meta name="Customized dnd character sheet" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div id="actionBar" className="flex flex-row flex-nowrap justify-start">
                <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5 mr-2 mb-2">Save Changes</button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5 mr-2 mb-2">Load</button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5 mr-2 mb-2">Login</button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5 mr-2 mb-2"><Link href="/">Home</Link></button>
            </div>

            <div className="mb-6">
                <label id="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Character Name</label>
                <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Character Name" />
            </div>


            <div id="TabArea">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-blue-700 dark:border-gray-700 dark:text-gray-400" id="toptabs" data-tabs-toggle="#tabContent" role="tablist">
                    <li className="mr-8" role="presentation">
                        <button className="inline-block p-4 border-solid rounded-t-lg border-blue-700 border-t border-x hover:underline hover:border-blue-700" id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true">Stats &amp; Abilities</button>
                    </li>
                    <li className="mr-8" role="presentation">
                        <button className="inline-block p-4 border-solid rounded-t-lg border-blue-700 border-t border-x hover:underline hover:border-blue-700" id="notes-tab" data-tabs-target="#notes" type="button" role="tab" aria-controls="notes" aria-selected="false">Notes, Personality, etc</button>
                    </li>
                </ul>
            </div>

            <div id="tabContent">
                <div className="mt-4" id="stats" role="tabpanel" aria-labelledby='stats-tab'>
                    <div className="grid grid-cols-3 gap-x-8 gap-y-8">

                        <div className="col-span-3 col-end-auto">
                            <div className="flex justify-start flex-wrap flex-row items-center">
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Class</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndclass" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Race</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndrace" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Background</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndbackground" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Alignment</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndalignment" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Level</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndlevel" size="1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Experience</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndexp" size="2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Speed</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndspeed" size="2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Initiative</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndinitiative" size="2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Armor Class</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndac" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Hit Points</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndhp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            <dl className="flex flex-row justify-start items-center mb-4 mr-6 mt-2">
                                <dt>
                                    <label className="mb-2 text-sm font-medium text-gray-900">Temporary HP</label>
                                </dt>
                                <dd className="ml-8">
                                    <input type="text" id="dndtemphp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </dd>
                            </dl>
                            </div>
                        </div>

                        <div>
                            <p>somesuff</p>
                        </div>

                    </div>
                </div>

                <div className="mt-4" id="notes" role="tabpanel" aria-labelledby='notes-tab'>
                    <p>notes stuff</p>
                </div>
            </div>

            <script src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js"></script>
        </div>


        // <div className={styles.container}>
        //     <Head>
        //         <title>DnD Character Sheet</title>
        //         <meta name="Customized dnd character sheet" content="Generated by create next app" />
        //         <link rel="icon" href="/favicon.ico" />
        //     </Head>

        //     <main className={styles.charMain}>
        //         <div className={styles.wrapper}>
        //             <div className={`${styles.box} ${styles.charName}`}>
        //                 character name
        //                 <label>Name</label>
        //                 <input type="text" id="name" name="name" onChange={handleNameChange} />
        //             </div>
        //             <div className={`${styles.box} ${styles.charSaves}`}>character health/AC</div>
        //             <div className={`${styles.box} ${styles.charHealth}`}>character saves</div>
        //             <div className={`${styles.box} ${styles.chatBox}`}>
        //                 chat box
        //                 <ul>
        //                     {messages.map((msg) => {
        //                         return(
        //                             <li>{msg}</li>
        //                         )
        //                     })}
        //                 </ul>
        //             </div>
        //             <div className={`${styles.box} ${styles.charActions}`}>
        //                 character actions
        //                 <button onClick={handleRoll}>click to roll</button>
        //             </div>
        //         </div>
        //     </main>

        //     <footer>
        //         <Link href="/">
        //             <a>go home</a>
        //         </Link>
        //     </footer>
        // </div>
    );
}

export default Character;