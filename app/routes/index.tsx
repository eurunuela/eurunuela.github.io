import Cards from "./cards";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { useLoaderData } from "@remix-run/react";
import { parse } from "rss-to-json";

export async function loader() {
  const scholar_res = await fetch(
    "https://raw.githubusercontent.com/eurunuela/eurunuela.github.io/main/scholar_data.json"
  );
  const scholar_data = await scholar_res.json();

  const conferences_res = await fetch(
    "https://raw.githubusercontent.com/eurunuela/eurunuela.github.io/main/conferences_data.json"
  );
  const conferences_data = await conferences_res.json();

  const talks_res = await fetch(
    "https://raw.githubusercontent.com/eurunuela/eurunuela.github.io/main/talks_data.json"
  );
  const talks_data = await talks_res.json();

  const github_res = await fetch(
    "https://raw.githubusercontent.com/eurunuela/eurunuela.github.io/main/github_data.json"
  );
  const github_data = await github_res.json();

  const typefully_url = "https://typefully.com/eurunuela/rss.xml";
  const typefully_data = await parse(typefully_url);

  return {
    scholar_data,
    conferences_data,
    talks_data,
    github_data,
    typefully_data,
  };
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const json_data = useLoaderData();
  return (
    <div className="remix__page max-w-screen-xl mx-auto">
      <main>
        {/* <Cards data={json_data} /> */}
        <div className="flex flex-col w-50%">
          <Card isFooterBlurred radius="lg" className="border-none bg-white">
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Available soon.</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
