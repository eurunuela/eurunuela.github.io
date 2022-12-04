import { Mail } from "react-feather";

export default function EmailButton() {
  return (
    <div>
      <a
        href="mailto:e.urunuela@bcbl.eu"
        target="_blank"
        className="flex justify-center items-center py-3 px-10 rounded-md w-full h-auto bg-gray-100 dark:hover:bg-gray-900 dark:bg-black text-gray-700 hover:decoration-none hover:bg-gray-200 hover:text-gray-700 hover:no-underline"
      >
        <div className="flex flex-row">
          <Mail
            className="mr-1 mt-0.5 text-teal-700 dark:text-teal-300"
            size={20}
          />
          <span className="dark:text-white">
            Reach me via{" "}
            <span className="text-teal-700 dark:text-teal-300 font-medium">
              email
            </span>
          </span>
        </div>
      </a>
    </div>
  );
}
