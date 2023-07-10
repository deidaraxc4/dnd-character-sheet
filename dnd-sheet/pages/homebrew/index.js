import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

const Homebrew = () => {
    const [roomName, setRoomName] = useState('');
    const [socket, setSocket] = useState(null);
    const [character, setCharacter] = useState(null);

    const createRoom = () => {
        const gameId = Math.floor(10000 + Math.random() * 90000);
        const tempName = "bob" + Math.floor(1000 + Math.random() * 9000)//remove todo
        const newSocket = io('localhost:3001');
        setSocket(newSocket);
        console.log(gameId)
        console.log(socket)
        // create room
        socket.emit('createRoom', {gameId: gameId, username: tempName})

        // listen for events
        socket.on('connect', (data) => {
            console.log('client connection successful')
        })
    }

    const joinRoom = () => {
        const newSocket = io('localhost:3001');
        setSocket(newSocket);
    }

    return(
        <div className="container max-w-none">
            <nav className="bg-gray-200 dark:bg-gray-700">
                <div className="max-w-screen-xl px-2 py-3 md:px-6">
                    <div className="flex items-center">
                        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium" data-tabs-toggle="#tabContent" role="tablist">
                            {/* <li>
                                <div className="w-80">
                                    <h1>Character name</h1>
                                    <div class="h-6 w-full bg-blue-400 rounded-full">
                                        <div class="h-6 bg-blue-600 rounded-full text-center text-xs text-white leading-none font-medium pt-1" style={{width: '60%'}}>HP</div>
                                    </div>
                                </div>
                            </li> */}
                            <li>
                                <a href="./" className="text-gray-900 dark:text-white hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline" id="foo-tab" data-tabs-target="#foo" type="button" role="tab" aria-controls="foo" aria-selected="true">Character Page</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline" id="baz-tab" data-tabs-target="#baz" type="button" role="tab" aria-controls="baz" aria-selected="false">Quests</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="mainContent">
                {/* <div id="tabArea">
                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-blue-700 dark:border-gray-700 dark:text-gray-400" id="toptabs" data-tabs-toggle="#tabContent" role="tablist">
                        <li className="mr-8" role="presentation">
                            <button className="inline-block p-4 border-solid rounded-t-lg border-blue-700 border-t border-x hover:underline hover:border-blue-700" id="foo-tab" data-tabs-target="#foo" type="button" role="tab" aria-controls="foo" aria-selected="true">foo tab</button>
                        </li>
                        <li className="mr-8" role="presentation">
                            <button className="inline-block p-4 border-solid rounded-t-lg border-blue-700 border-t border-x hover:underline hover:border-blue-700" id="baz-tab" data-tabs-target="#baz" type="button" role="tab" aria-controls="baz" aria-selected="false">baz tab</button>
                        </li>
                    </ul>
                </div> */}

                <div id="tabContent">
                    <div className="mt-4" id="foo" role="tabpanel" aria-labelledby='foo-tab'>
                        <p>foo</p>
                        {/* <div>
                        <button onClick={createRoom}>Create Room</button>
                        <input
                            type="text"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                        />
                        <button onClick={joinRoom}>Join Room</button>
                        </div> */}
                    </div>

                    <div className="mt-4" id="baz" role="tabpanel" aria-labelledby='baz-tab'>
                        <p>baz</p>
                    </div>
                </div>

            </div>

            <script src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js"></script>
        </div>
    );
}

export default Homebrew;