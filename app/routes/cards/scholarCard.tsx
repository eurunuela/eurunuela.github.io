import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

export async function loader() {
  const res = await fetch(
    "https://raw.githubusercontent.com/eurunuela/eurunuela.github.io/main/scholar_data.json"
  );
  return json(await res.json());
}

export default function ScholarCard({ data }: { data: any }) {
  const scholar_json = useLoaderData();

  console.log(scholar_json);

  return (
    <div className="flex justify-center relative">
      <div className="block py-6 px-10 rounded-lg shadow-lg bg-white h-full">
        <div className="flex justify-between mb-4">
          <h5 className="text-scholar text-2xl leading-tight font-bold">
            Recent publications
          </h5>
          <div className="flex justify-end items-center">
            <p className="text-gray-800 font-light leading-tight text-sm pt-1">
              Cited by {data["citedby"]}
            </p>
          </div>
        </div>
        {data["publications"].slice(0, 7).map((publication, index) => (
          <div key={index} className="border-b-1 border-gray-500 mb-3">
            <a
              href={
                "https://scholar.google.com/citations?view_op=view_citation&citation_for_view=" +
                publication["author_pub_id"]
              }
              target="_blank"
              className="text-gray-700 hover:text-scholar"
            >
              <div className="flex justify-between my-4">
                <div>
                  <p className=" leading-tight font-medium">
                    {publication["bib"]["title"]}
                  </p>
                  <p className="font-light text-sm leading-tight">
                    {publication["bib"]["journal"] ||
                      publication["bib"]["conference"]}{" "}
                    ({publication["bib"]["pub_year"]})
                  </p>
                </div>
                <p className="leading-tight ml-6">
                  {publication["num_citations"]}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
