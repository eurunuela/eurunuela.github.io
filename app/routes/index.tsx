import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import profilePic from "../images/profile.png";

export async function loader() {
  const res = await fetch(
    "https://raw.githubusercontent.com/eurunuela/eurunuela.github.io/main/scholar_data.json"
  );
  return json(await res.json());
}

function ScholarCard({ data }: { data: any }) {
  return (
    <div className="flex justify-center relative">
      <div className="block py-6 px-10 rounded-lg shadow-lg bg-white h-full">
        <div className="flex justify-between mb-4">
          <h5 className="text-scholar text-2xl leading-tight font-bold">
            Recent publications
          </h5>
          {/* Add little box on the top right corner with the total number of citations */}
          <div className="flex justify-end items-center">
            <p className="text-gray-800 font-light leading-tight text-sm pt-1">
              Cited by {data["citedby"]}
            </p>
          </div>
        </div>
        {/* Map the first 10 publications in data with number of citations on the right */}
        {data["publications"].slice(0, 10).map((publication, index) => (
          <div key={index} className="border-b-1 border-gray-500 mb-3">
            <a
              href={
                "https://scholar.google.com/citations?view_op=view_citation&citation_for_view=" +
                publication["author_pub_id"]
              }
              target="_blank"
              className="text-gray-700 hover:text-scholar"
            >
              <div className="flex justify-between my-4">
                <div>
                  <p className=" leading-tight font-medium">
                    {publication["bib"]["title"]}
                  </p>
                  <p className="font-light text-sm leading-tight">
                    {publication["bib"]["pub_year"]}
                  </p>
                </div>
                <p className="leading-tight ml-6">
                  {publication["num_citations"]}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function Card({ title }: { title: string }) {
  return (
    <div className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white h-full">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          {title}
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
  const scholar_json = useLoaderData();

  return (
    <div className="remix__page max-w-screen-xl mx-auto">
      <main>
        <div className="flex justify-center  ">
          <div className="w-full block items-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-6 rounded-lg drop-shadow-lg h-[fit-content] mt-8">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2">
              <div className=" py-4 flex flex-row sm:justify-center sm:items-center ">
                <img
                  src={profilePic}
                  alt="Eneko"
                  className="rounded-full shadow-2xl object-fit-cover w-48 h-48"
                />
              </div>
              <div className="flex flex-col px-8 py-4">
                <h1 className="pt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight whitespace-nowrap text-black">
                  Hi, I'm Eneko <span className="whitespace-nowrap">👋</span>
                </h1>
                <h2 className="py-2 text-xl text-black ">
                  I am a PhD student working on inverse problems and denoising
                  of functional MRI data.
                </h2>
                <p className="py-2 italic text-black">
                  I want to make healthcare more accesible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid my-8 sm:grid-cols-1 lg:grid-cols-2 gap-8 ">
          <ScholarCard data={scholar_json} />
          <Card title="Conference Abstracts" />
        </div>
        <div className="grid my-8 sm:grid-cols-1 lg:grid-cols-2 gap-8 ">
          <Card title="Twitter Timeline" />
          <Card title="GitHub Contributions" />
        </div>
      </main>
    </div>
  );
}
