import React, { useEffect, useState } from 'react'

const Homebrew = () => {
    return(
        <div className="container max-w-none">
            <nav class="bg-gray-200 dark:bg-gray-700">
                <div class="max-w-screen-xl px-2 py-3 md:px-6">
                    <div class="flex items-center">
                        <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            <li>
                                <div className="w-80">
                                    <h1>Character name</h1>
                                    <div class="h-6 w-full bg-blue-400 rounded-full">
                                        <div class="h-6 bg-blue-600 rounded-full text-center text-xs text-white leading-none font-medium pt-1" style={{width: '60%'}}>HP</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="./" class="text-gray-900 dark:text-white hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 dark:text-white hover:underline">Team</a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 dark:text-white hover:underline">Features</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Homebrew;