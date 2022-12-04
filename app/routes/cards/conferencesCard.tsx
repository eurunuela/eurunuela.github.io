import { Link } from "@remix-run/react";
import { Award, Calendar } from "react-feather";

export default function ConferencesCard({ data }: { data: any }) {
  return (
    <div className="flex justify-center relative">
      <Link
        to="/conferences"
        prefetch="intent"
        className="hover:no-underline hover:decoration-inherit active:no-underline active:decoration-inherit focus:no-underline focus:decoration-inherit hover:text-gray-800 dark:hover:text-white text-gray-800 dark:text-white"
      >
        <div className="block py-6 px-10 rounded-lg shadow-lg bg-white dark:bg-gray-800 h-full ">
          <div className="flex justify-between mb-4">
            <h5 className="text-rose-500 text-2xl leading-tight font-bold">
              Conference abstracts
            </h5>
            <div className="flex justify-end items-center">
              <Calendar className="text-rose-500 -mr-0.5" />
            </div>
          </div>
          {data["abstracts"].slice(0, 7).map((abstract, index) => (
            <div key={index} className="border-b-1 border-gray-500 mb-3">
              <a className="hover:text-rose-500 hover:no-underline hover:decoration-inherit active:no-underline active:decoration-inherit focus:no-underline focus:decoration-inherit">
                <div className="flex justify-between my-4">
                  <div>
                    <p className=" leading-tight font-medium">
                      {abstract["title"]}
                    </p>
                    <p className="font-light text-sm leading-tight text-gray-600 dark:text-gray-200">
                      {abstract["conference"]} ({abstract["year"]})
                    </p>
                    {abstract["awards"] ? (
                      <div className="flex flex-row">
                        {/* Show awards separated with comma if there are more than one */}
                        <Award className="text-rose-500 mr-1" size={16} />
                        <p className="font-medium text-rose-500 text-sm leading-tight">
                          {abstract["awards"].length > 1
                            ? abstract["awards"].join(", ")
                            : abstract["awards"][0]}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
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
