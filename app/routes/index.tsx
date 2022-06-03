import Cards from "./Cards";
import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

export async function loader() {
  const res = await fetch(
    "https://raw.githubusercontent.com/eurunuela/eurunuela.github.io/main/scholar_data.json"
  );
  return json(await res.json());
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
