import { Link } from "@remix-run/react";

export default function ConferencesCard({ data }: { data: any }) {
  return (
    <div className="flex justify-center relative">
      <Link
        to="/conferences"
        prefetch="intent"
        className="hover:no-underline hover:decoration-inherit hover:text-gray-700"
      >
        <div className="block py-6 px-10 rounded-lg shadow-lg bg-white h-full ">
          <div className="flex justify-between mb-4">
            <h5 className="text-rose-500 text-2xl leading-tight font-bold">
              Conference abstracts
            </h5>
          </div>
          {data["abstracts"].slice(0, 7).map((abstract, index) => (
            <div key={index} className="border-b-1 border-gray-500 mb-3">
              <div className="flex justify-between my-4">
                <div>
                  <p className=" leading-tight font-medium">
                    {abstract["title"]}
                  </p>
                  <p className="font-light text-sm leading-tight">
                    {abstract["conference"]} ({abstract["year"]})
                  </p>
                  {
                    <p className="font-light text-rose-500 text-sm leading-tight">
                      {abstract["awards"]}
                    </p>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}
