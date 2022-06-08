import { useLoaderData } from "remix";
import { Award, CheckCircle } from "react-feather";

export async function loader() {
  const conferences_res = await fetch(
    "https://raw.githubusercontent.com/eurunuela/eurunuela.github.io/main/conferences_data.json"
  );
  const conferences_data = await conferences_res.json();

  return {
    conferences_data,
  };
}

export default function Conferences() {
  const { conferences_data } = useLoaderData();

  // Get years from conferences data
  const years = conferences_data["abstracts"].map(
    (conference) => conference.year
  );
  const years_unique = [...new Set(years)];

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col lg:w-3/5 py-6 lg:px-10 h-full">
        <div className="flex justify-between mb-4 px-8">
          <h5 className="text-rose-500 text-4xl leading-tight font-bold">
            Conference abstracts
          </h5>
        </div>
        {/* Show the abstracts that match with that year */}
        {years_unique.map((year) => (
          <div
            key={year}
            className="block pb-6 px-8 mb-3 rounded-lg shadow-lg bg-white h-full "
          >
            <div className="flex justify-between my-4">
              <div>
                <h3 className="text-2xl font-bold">{year}</h3>
              </div>
            </div>
            <ul className="space-y-4">
              {conferences_data["abstracts"].map((abstract, index) =>
                abstract.year === year ? (
                  <li
                    key={index}
                    className="border-b-1 border-gray-500 mb-3 space-y-1"
                  >
                    <div className="flex justify-between items-center space-y-1 my-4">
                      <div className="flex flex-row">
                        <div className="mr-4 mt-0.5">
                          <CheckCircle className="text-rose-500" size={16} />
                        </div>
                        <div>
                          <h4 className=" leading-tight font-medium mb-1">
                            {abstract["title"]}
                          </h4>
                          <p className="font-light text-sm leading-tight mb-1">
                            {/* Show author names separated with commas. Use text-rose-500 and bold if the
                        author name is "E. Uruñuela" */}
                            {abstract["authors"].map((author, index) => (
                              <i key={index}>
                                {author === "E. Uruñuela" ? (
                                  <span className="text-rose-500">
                                    {author}
                                  </span>
                                ) : (
                                  author
                                )}
                                {index !== abstract["authors"].length - 1
                                  ? ", "
                                  : "."}
                              </i>
                            ))}
                          </p>
                          <p className="font-light text-sm leading-tight mb-1">
                            {abstract["conference"]}
                          </p>
                          {/* If the abstract has awards, show them */}
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
