import { useLoaderData } from "remix";
import { Image, Mic } from "react-feather";

export async function loader() {
  const talks_res = await fetch(
    "https://raw.githubusercontent.com/eurunuela/eurunuela.github.io/main/talks_data.json"
  );
  const talks_data = await talks_res.json();

  return {
    talks_data,
  };
}

export default function talks() {
  const { talks_data } = useLoaderData();

  // Get years from talks data in key "date" with format "Month day, year"
  const years = talks_data["talks"].map((talk) => talk.date.split(" ")[2]);
  const years_unique = [...new Set(years)];

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col lg:w-3/5 py-6 lg:px-10 h-full">
        <div className="flex justify-between mb-4 px-8">
          <h5 className="dark:text-emerald-400 text-emerald-500 text-4xl leading-tight font-bold">
            Talks
          </h5>
        </div>
        {/* Show the talks that match with that year */}
        {years_unique.map((year) => (
          <div
            key={year}
            className="block pb-6 px-8 mb-3 rounded-lg shadow-lg bg-white dark:bg-gray-800 h-full "
          >
            <div className="flex justify-between my-4">
              <div>
                <h3 className="text-2xl font-bold">{year}</h3>
              </div>
            </div>
            <ul className="space-y-4">
              {talks_data["talks"].map((talk, index) =>
                talk.date.split(" ")[2] === year ? (
                  <li
                    key={index}
                    className="border-b-1 border-gray-500 mb-3 space-y-1"
                  >
                    <div className="flex justify-between items-center space-y-1 my-4">
                      <div className="flex flex-row">
                        <div className="mr-4 mt-0.5">
                          <Mic
                            className="dark:text-emerald-400 text-emerald-500"
                            size={16}
                          />
                        </div>
                        <div>
                          <h4 className=" leading-tight font-medium mb-1">
                            <span>{talk["title"]}</span>
                          </h4>
                          <p className="font-light text-sm leading-tight mb-1 dark:text-gray-200">
                            <i key={index}>
                              <span className="dark:text-emerald-400 text-emerald-500">
                                {talk["location"]}
                              </span>
                            </i>
                          </p>
                          <p className="font-light text-sm leading-tight mb-1 dark:text-gray-200">
                            {talk["date"]}.
                          </p>
                          {/* Show link to slides if available */}
                          {talk["slides"] ? (
                            //* If talk["slides"] exist then make the title hoverable and open link on new tab */
                            <div className="flex flex-row">
                              <a
                                href={talk["slides"]}
                                target="_blank"
                                className="flex flex-row"
                              >
                                <Image
                                  className="dark:text-emerald-400 text-emerald-500 mr-1"
                                  size={16}
                                />
                                <p className="font-medium text-sm leading-tight mb-1 text-emerald-500 dark:text-emerald-400">
                                  Slides available.
                                </p>
                              </a>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </li>
                ) : null
              )}{" "}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
