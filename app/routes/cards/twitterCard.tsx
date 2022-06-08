import { Twitter } from "react-feather";

export default function TwitterCard({ data }: { data: any }) {
  console.log(data);
  return (
    <div className="flex justify-center relative">
      <a
        href="https://twitter.com/eurunuela"
        target="_blank"
        className="hover:no-underline hover:decoration-inherit active:no-underline active:decoration-inherit focus:no-underline focus:decoration-inherit"
      >
        <div className="block py-6 px-10 rounded-lg shadow-lg bg-white h-full w-full ">
          <div className="flex justify-between mb-4">
            <h5 className="text-sky-500 text-2xl leading-tight font-bold">
              Latest threads
            </h5>
            <div className="flex justify-end items-center">
              <a
                href="http://twitter.com/eurunuela"
                target="_blank"
                className="hover:no-underline"
              >
                <Twitter className="text-sky-500 -mr-0.5" />
              </a>
            </div>
          </div>
          {data["items"].slice(0, 3).map((thread, index) => (
            <div key={index} className="border-b-1 border-gray-500 mb-3">
              <a
                href={thread["link"]}
                target="_blank"
                className="text-gray-700 hover:text-sky-500"
              >
                <div className="flex justify-between my-4">
                  <div>
                    <p className=" leading-tight font-medium">
                      {thread["title"]}
                    </p>
                    {/* Show only first 280 characters */}
                    <p className="font-light text-sm leading-tight mt-1">
                      {thread["description"].substring(0, 280)}...
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="leading-tight ml-6">{thread["created"]}</p>
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
