import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import profilePic from "../images/profile.png";

function Card() {
  return (
    <div className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          Card title
        </h5>
        <p className="text-gray-700 text-base mb-4">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          type="button"
          className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Button
        </button>
      </div>
    </div>
  );
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <div className="remix__page">
      <main>
        <div className="flex justify-center min-h-screen ">
          <div className="w-full grid-cols-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 block p-6 rounded-lg shadow-lg h-60">
            <div className="flex flex-col px-4 py-4">
              <h1 className="pt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight whitespace-nowrap text-black">
                Hi, I'm Eneko <span className="whitespace-nowrap">👋</span>
              </h1>
              <h2 className="py-2 text-xl text-black ">
                I am a PhD student working on inverse problems and denoising of
                functional MRI data.
              </h2>
              <p className="py-2 italic text-black">
                I want to make healthcare more accesible to everyone.
              </p>
            </div>
            <div className="py-2 pr-4 ml-8 right-0">
              <img
                src={profilePic}
                alt="Eneko"
                className="rounded-full shadow-2xl object-fit-cover w-48 h-48"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center min-h-screen grid-cols-2 ">
          <Card />
        </div>
      </main>
    </div>
  );
}
