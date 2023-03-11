import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto mt-4">
      <Head>
          <title>DnD Emporium</title>
          <meta name="Your favorite DnD tools" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mb-28">
        <h1 className="font-sans text-center leading-normal text-7xl">
          DnD Emporium
        </h1>
        <p className="font-sans text-center leading-normal italic text-2xl">
          Neat tools for Homebrew and 5e DnD
        </p>
      </div>

      <div className="flex flex-row flex-nowrap">
        <div className="group grow basis-0">
          <div className="group-hover:bg-sky-200">
            <a href="character" className="flex flex-col p-9 hover:cursor-pointer">
              <img src="5elogo.svg" alt="5e Logo" className="justify-center object-contain h-36 group-hover:scale-125 transition ease-in-out duration-500 mb-2"/>
              <h2 className="my-2 transition ease-in-out duration-500 text-center font-bold text-2xl group-hover:scale-125">
                5e Online Character Sheet
              </h2>
              <p className="text-center my-2">
                Manage your 5e character with ease, includes online dice rolls
              </p>
            </a>
          </div>
        </div>

        <div className="group grow basis-0 border-l-2 border-black">
          <div className="group-hover:bg-sky-200">
            <a href="homebrew" className="flex flex-col p-9 hover:cursor-pointer">
              <img src="cauldron.svg" alt="5e Logo" className="justify-center object-contain h-36 group-hover:scale-125 transition ease-in-out duration-500 mb-2"/>
              <h2 className="my-2 transition ease-in-out duration-500 text-center font-bold text-2xl group-hover:scale-125">
                Homebrew Character Sheet
              </h2>
              <p className="text-center my-2">
                Coming soon...
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
