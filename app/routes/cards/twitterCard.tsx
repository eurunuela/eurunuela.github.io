import { Twitter } from "react-feather";

export default function TwitterCard({ data }: { data: any }) {
  return (
    <div className="flex justify-center relative">
      <a
        href="https://twitter.com/eurunuela"
        target="_blank"
        className="hover:no-underline hover:decoration-inherit active:no-underline active:decoration-inherit focus:no-underline focus:decoration-inherit"
      >
        <div className="block py-6 px-10 rounded-lg shadow-lg bg-white h-full ">
          <div className="flex justify-between mb-4">
            <h5 className="text-twitter text-2xl leading-tight font-bold">
              Latest tweets
            </h5>
            <div className="flex justify-end items-center">
              <a
                href="http://twitter.com/eurunuela"
                target="_blank"
                className="hover:no-underline"
              >
                <Twitter className="text-twitter -mr-0.5" />
              </a>
            </div>
          </div>
          {/* {github_data.map((repo, index) => (
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
        ))} */}
        </div>
      </a>
    </div>
  );
}
