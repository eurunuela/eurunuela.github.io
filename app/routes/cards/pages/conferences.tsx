export default function Conferences() {
  //   console.log(data);

  return (
    <div className="block py-6 px-10 h-full">
      <div className="flex justify-between mb-4">
        <h5 className="text-conferences text-2xl leading-tight font-bold">
          Conference abstracts
        </h5>
      </div>
      {/* {data["abstracts"].map((abstract, index) => (
        <div key={index} className="border-b-1 border-gray-500 mb-3">
          <div className="flex justify-between my-4">
            <div>
              <p className=" leading-tight font-medium">{abstract["title"]}</p>
              <p className="font-light text-sm leading-tight">
                {abstract["conference"]} ({abstract["year"]})
              </p>
              {
                <p className="font-light text-conferences text-sm leading-tight">
                  {abstract["awards"]}
                </p>
              }
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
}
