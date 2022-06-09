import profilePic from "../../images/profile.png";

export default function ProfileCard() {
  return (
    <div className="flex justify-center  ">
      {/* <div className="w-full block items-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-6 rounded-lg drop-shadow-lg h-[fit-content] mt-8"> */}
      <div className="w-full block items-center candy_mesh p-6 rounded-lg drop-shadow-lg h-[fit-content] mt-8 ">
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
              <h1 className="pt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight whitespace-nowrap text-gray-800 dark:text-white">
                Hi, I'm Eneko <span className="whitespace-nowrap">👋</span>
              </h1>
              <h2 className="py-2 text-xl text-gray-600 dark:text-gray-200">
                I am a PhD student working on inverse problems and denoising of
                functional MRI data.
              </h2>
              <p className="py-2 italic text-gray-600 dark:text-gray-200">
                I want to make healthcare more accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
