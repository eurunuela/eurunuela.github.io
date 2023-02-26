import {
  Links,
  LiveReload,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import type { LinksFunction } from "remix";
import tailwindUrl from "./styles/tailwind.css";
import { Analytics } from "@vercel/analytics/react";

import globalStylesUrl from "~/styles/global.css";
import darkStylesUrl from "~/styles/dark.css";
import logo from "~/images/logo.svg";

export const meta: MetaFunction = () => ({
  title: "Eneko Uruñuela",
  description:
    "Eneko Uruñuela's personal website. Ph.D. candidate in the Signal Processing in Neuroimaging lab at the Basque Center on Cognition, Brain and Language. His research is focused on the development of novel algorithms that detect and separate neuronal and non-neuronal components of functional MRI data using inver problems and tensor decomposition.",
  "og:img": "https://eurunuela.github.io/img/profile.jpg",
});

// https://remix.run/api/app#links
export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    {
      rel: "stylesheet",
      href: darkStylesUrl,
      media: "(prefers-color-scheme: dark)",
    },
    { rel: "stylesheet", href: tailwindUrl },
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
      rel: "stylesheet",
    },
    // Logo
    { rel: "icon", href: logo },
  ];
};

// For Vercel web vitals
export const loader = () => {
  return {
    ENV: {
      VERCEL_ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID,
    },
  };
};

// Optional:
// If you're not already handling TS support for environment variables
declare global {
  interface Window {
    ENV: SerializeFrom<typeof loader>["ENV"];
  }
}

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  const { ENV } = useLoaderData<typeof loader>();
  return (
    <Document>
      <Layout>
        <Outlet />
        <Analytics />
        {/* 👇 Write the ENV values to the window */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Please let me know{" "}
            <a href="mailto:e.urunuela@bcbl.eu" target="_blank">
              via email
            </a>
            .
          </p>
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body className="font-inter">
        {children}
        <ScrollRestoration />
        <script src="https://literal.club/js/widget.js"></script>
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="remix-app">
      <header>
        {/* <div className="container remix-app__header-content">
        </div> */}
      </header>
      <div className="remix-app__main">
        <div className="container remix-app__main-content">{children}</div>
      </div>
      <footer className="remix-app__footer">
        <div className="container remix-app__footer-content text-gray-600 dark:text-white-200 text-sm">
          <p>
            Inspired by{" "}
            <a href="https://www.fabrizio.so/" target="_blank">
              fabrizio.so
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
