import ScholarCard from "./cards/scholarCard";
import ProfileCard from "./cards/profileCard";
import ConferencesCard from "./cards/conferencesCard";
import GitHubCard from "./cards/githubCard";

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
  const { scholar_data, conferences_data, github_data } = data;

  return (
    <div>
      <ProfileCard />
      <div className="grid my-8 sm:grid-cols-1 lg:grid-cols-2 gap-8 ">
        <ScholarCard data={scholar_data} />
        <ConferencesCard data={conferences_data} />
      </div>
      <div className="grid my-8 sm:grid-cols-1 lg:grid-cols-2 gap-8 ">
        <GitHubCard data={github_data} />
        <Card title="Twitter Timeline" />
      </div>
    </div>
  );
}
