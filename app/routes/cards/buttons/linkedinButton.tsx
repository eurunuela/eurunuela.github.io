import { Linkedin } from "react-feather";

export default function LinkedinButton() {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/eneko-urunuela/"
        target="_blank"
        className="flex justify-center items-center py-3 px-10 rounded-md w-full h-auto bg-gray-100 dark:hover:bg-gray-900 dark:bg-black text-gray-700 hover:decoration-none hover:bg-gray-200 hover:text-gray-700 hover:no-underline"
      >
        <div className="flex flex-row">
          <Linkedin
            className="mr-2 text-teal-700 dark:text-teal-300"
            size={20}
          />
          <span className="dark:text-white">
            Add me on{" "}
            <span className="text-teal-700 dark:text-teal-300 font-medium">
              LinkedIn
            </span>
          </span>
        </div>
      </a>
    </div>
  );
}
