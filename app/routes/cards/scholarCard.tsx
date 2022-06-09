export default function ScholarCard({ data }: { data: any }) {
  return (
    <div className="flex justify-center relative">
      <a
        href="https://scholar.google.com/citations?user=KLIjERgAAAAJ"
        target="_blank"
        className="hover:no-underline hover:decoration-inherit active:no-underline active:decoration-inherit focus:no-underline focus:decoration-inherit"
      >
        <div className="block py-6 px-10 rounded-lg shadow-lg bg-white dark:bg-gray-800 h-full ">
          <div className="flex justify-between mb-4">
            <h5 className="text-blue-500 text-2xl leading-tight font-bold">
              Recent publications
            </h5>
            <div className="flex justify-end items-center text-right ">
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
                className="text-gray-800 dark:text-white hover:text-blue-500 hover:no-underline hover:decoration-inherit active:no-underline active:decoration-inherit focus:no-underline focus:decoration-inherit"
              >
                <div className="flex justify-between my-4">
                  <div>
                    <p className=" leading-tight font-medium">
                      {publication["bib"]["title"]}
                    </p>
                    <p className="font-light text-sm leading-tight text-gray-600 dark:text-gray-200">
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
      </a>
    </div>
  );
}
