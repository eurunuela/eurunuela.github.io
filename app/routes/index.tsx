import Cards from "./Cards";
import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

export async function loader() {
  const scholar_res = await fetch(
    "https://raw.githubusercontent.com/eurunuela/eurunuela.github.io/main/scholar_data.json"
  );
  const scholar_data = await scholar_res.json();

  // const conferences_res = await fetch(
  //   "https://raw.githubusercontent.com/eurunuela/eurunuela.github.io/main/conferences_data.json"
  // );
  // const conferences_data = await conferences_res.json();

  // return {
  //   scholar_data,
  //   conferences_data,
  // };
  return json(scholar_data);
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const scholar_json = useLoaderData();
  return (
    <div className="remix__page max-w-screen-xl mx-auto">
      <main>
        <Cards data={scholar_json} />
      </main>
    </div>
  );
}
