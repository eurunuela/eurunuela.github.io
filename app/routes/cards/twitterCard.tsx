import { Twitter } from "react-feather";

export default function TwitterCard({ data }: { data: any }) {
  return (
    <div className="flex justify-center relative">
      <a
        href="https://typefully.com/eurunuela"
        target="_blank"
        className="hover:no-underline hover:decoration-inherit active:no-underline active:decoration-inherit focus:no-underline focus:decoration-inherit"
      >
        <div className="block py-6 px-10 rounded-lg shadow-lg bg-white dark:bg-gray-800 h-full w-full ">
          <div className="flex justify-between">
            <h5 className="text-sky-500 text-2xl leading-tight font-bold">
              Latest threads
            </h5>
            <div className="flex justify-end items-center">
              <Twitter className="text-sky-500 -mr-0.5" />
            </div>
          </div>
          {data["items"].slice(0, 3).map((thread, index) => (
            <div key={index} className="border-b-1 border-gray-500 my-6">
              <a
                href={thread["link"]}
                target="_blank"
                className="text-gray-800 dark:text-white hover:text-sky-500 hover:no-underline hover:decoration-inherit active:no-underline active:decoration-inherit focus:no-underline focus:decoration-inherit"
              >
                <div className="flex justify-between my-4">
                  <div>
                    <p className=" leading-tight font-medium mb-2">
                      {thread["title"]}
                      <span className="text-sm font-light">
                        {" ("}
                        {new Date(
                          parseInt(thread["created"], 10)
                        ).toLocaleString("en-US", { month: "long" }) +
                          " " +
                          new Date(parseInt(thread["created"], 10)).getDay() +
                          ", " +
                          new Date(
                            parseInt(thread["created"], 10)
                          ).getFullYear()}
                        {")"}
                      </span>
                    </p>
                    {/* Show all text until the third occurrence of "<br>" */}
                    <span className="font-light text-sm leading-tight mt-1 dark:text-gray-200 text-gray-600 ">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: thread["content"]
                            .split("<br>")
                            .slice(0, 6)
                            .join("<br>"),
                        }}
                      />
                    </span>
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
