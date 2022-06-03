import profilePic from "../images/profile.png";
import ScholarCard from "./cards/scholarCard";

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

export default function Cards({ data }: { data: any }) {
  console.log(data);

  return (
    <div>
      <div className="flex justify-center  ">
        {/* <div className="w-full block items-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-6 rounded-lg drop-shadow-lg h-[fit-content] mt-8"> */}
        <div className="w-full block items-center candy_mesh p-6 rounded-lg drop-shadow-lg h-[fit-content] mt-8">
          <div className="grid sm:grid-cols-1 lg:grid-cols-3">
            <div className=" py-4 flex flex-row justify-center sm:items-center ">
              <img
                src={profilePic}
                alt="Eneko"
                className="rounded-full shadow-2xl object-fit-cover w-48 h-48"
              />
            </div>
            <div className="flex flex-col px-8 py-4 lg:col-span-2 ">
              <div className="my-auto">
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
      </div>
      <div className="grid my-8 sm:grid-cols-1 lg:grid-cols-2 gap-8 ">
        <ScholarCard data={data} />
        <Card title="Conference Abstracts" />
      </div>
      <div className="grid my-8 sm:grid-cols-1 lg:grid-cols-2 gap-8 ">
        <Card title="Twitter Timeline" />
        <Card title="GitHub Contributions" />
      </div>
    </div>
  );
}
