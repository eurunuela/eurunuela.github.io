import { GitHub, Star } from "react-feather";

export default function GitHubCard({ data }: { data: any }) {
  const github_data = data.data.user.pinnedItems.edges;

  return (
    <div className="flex justify-center relative">
      <div className="block py-6 px-10 rounded-lg shadow-lg bg-white h-full transform transition duration-500 hover:scale-101">
        <div className="flex justify-between mb-4">
          <h5 className="text-github text-2xl leading-tight font-bold">
            Featured projects
          </h5>
          <div className="flex justify-end items-center">
            <a
              href="http://github.com/eurunuela"
              target="_blank"
              className="hover:no-underline"
            >
              <GitHub className="text-github -mr-0.5 " />
            </a>
          </div>
        </div>
        {github_data.map((repo, index) => (
          <div key={index} className="border-b-1 border-gray-500 mb-3">
            <a
              href={repo["node"]["url"]}
              target="_blank"
              className="text-gray-700 hover:text-github"
            >
              <div className="flex justify-between my-4">
                <div>
                  <p className=" leading-tight font-medium">
                    {repo["node"]["name"]}
                  </p>
                  <p className="font-light text-sm leading-tight">
                    {repo["node"]["description"]}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="leading-tight ml-6">
                    {repo["node"]["stargazers"]["totalCount"]}
                  </p>
                  <Star className="ml-2" size={19} />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
