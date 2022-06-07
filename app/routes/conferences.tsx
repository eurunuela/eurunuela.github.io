import { useLoaderData } from "remix";

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

  return (
    <div className="flex justify-center items-center px-10 h-full">
      <div className="flex flex-col w-3/5 py-6 px-10 h-full">
        <div className="flex justify-between mb-4">
          <h5 className="text-conferences text-4xl leading-tight font-bold">
            Conference abstracts
          </h5>
        </div>
        {conferences_data["abstracts"].map((abstract, index) => (
          <div key={index} className="border-b-1 border-gray-500 mb-3">
            <div className="flex justify-between my-4">
              <div>
                <p className=" leading-tight font-semibold">
                  {abstract["title"]}
                </p>
                <p className="font-light text-sm leading-tight">
                  {/* Show author names separated with commas. Use text-conferences and bold if the
               author name is "E. Uruñuela" */}
                  {abstract["authors"].map((author, index) => (
                    <span key={index}>
                      {author === "E. Uruñuela" ? (
                        <b className="text-conferences font-medium">{author}</b>
                      ) : (
                        author
                      )}
                      {index !== abstract["authors"].length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <p className="font-light text-sm leading-tight">
                  {abstract["conference"]} ({abstract["year"]})
                </p>
                {
                  <p className="font-medium text-conferences text-sm leading-tight">
                    {abstract["awards"]}
                  </p>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
