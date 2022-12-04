import { Mic } from "react-feather";
import { Link } from "@remix-run/react";
export default function TalksCard({ data }: { data: any }) {
  return (
    <div className="flex justify-center relative">
      <Link
        to="/talks"
        prefetch="intent"
        className="hover:no-underline hover:decoration-inherit active:no-underline active:decoration-inherit focus:no-underline focus:decoration-inherit hover:text-gray-800 dark:hover:text-white text-gray-800 dark:text-white"
      >
        <div className="block py-6 px-10 rounded-lg shadow-lg bg-white dark:bg-gray-800 h-full ">
          <div className="flex justify-between mb-4">
            <h5 className="dark:text-emerald-400 text-emerald-500 text-2xl leading-tight font-bold">
              Talks
            </h5>
            <div className="flex justify-end items-center">
              <Mic className="dark:text-emerald-400 text-emerald-500 -mr-0.5" />
            </div>
          </div>
          {data["talks"].slice(0, 5).map((talk, index) => (
            <div key={index} className="border-b-1 border-gray-500 mb-3">
              <a className="dark:hover:text-emerald-400 hover:text-emerald-500 hover:no-underline hover:decoration-inherit active:no-underline active:decoration-inherit focus:no-underline focus:decoration-inherit">
                <div className="flex justify-between my-4">
                  <div>
                    {/* If the talk has slides, open the link in new tab */}
                    {talk["slides"] ? (
                      <a
                        href={talk["slides"]}
                        target="_blank"
                        className="hover:text-emerald-500 dark:hover:text-emerald-400 hover:no-underline hover:decoration-inherit active:no-underline active:decoration-inherit focus:no-underline focus:decoration-inherit"
                      >
                        <p className=" leading-tight font-medium">
                          {talk["title"]}
                        </p>
                      </a>
                    ) : (
                      <p className=" leading-tight font-medium">
                        {talk["title"]}
                      </p>
                    )}
                    <p className="font-light text-sm leading-tight text-gray-600 dark:text-gray-200">
                      {talk["location"]}.
                    </p>
                    <p className="font-light text-sm leading-tight text-gray-600 dark:text-gray-200">
                      {talk["date"]}.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}
