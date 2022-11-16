import { GitHub, Star } from "react-feather";

export default function GitHubCard({ data }: { data: any }) {
  const github_data = data.data.user.pinnedItems.edges;

  return (
    <div className="flex justify-center relative">
      <a
        href="http://github.com/eurunuela"
        target="_blank"
        className="hover:no-underline hover:decoration-none"
      >
        <div className="block py-6 px-10 rounded-lg shadow-lg bg-white dark:bg-gray-800 h-full ">
          <div className="flex justify-between mb-4">
            <h5 className="dark:text-violet-400 text-violet-600 text-2xl leading-tight font-bold">
              Featured projects
            </h5>
            <div className="flex justify-end items-center">
              <GitHub className="dark:text-violet-400 text-violet-600 -mr-0.5 " />
            </div>
          </div>
          {github_data.map((repo, index) => (
            <div key={index} className="border-b-1 border-gray-500 mb-3">
              <a
                href={repo["node"]["url"]}
                target="_blank"
                className="text-gray-800 dark:text-white dark:hover:text-violet-400 hover:text-violet-600 hover:no-underline hover:decoration-inherit active:no-underline active:decoration-inherit focus:no-underline focus:decoration-inherit"
              >
                <div className="flex justify-between my-4">
                  <div>
                    <p className=" leading-tight font-medium">
                      {repo["node"]["name"]}
                    </p>
                    <p className="font-light text-sm leading-tight text-gray-600 dark:text-gray-200">
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
      </a>
    </div>
  );
}
