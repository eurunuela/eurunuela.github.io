import { Calendar } from "react-feather";

export default function CalButton() {
  return (
    <div>
      <a
        href="https://cal.com/eneko"
        target="_blank"
        className="flex justify-center items-center py-3 px-10 rounded-md w-full h-auto bg-gray-100 dark:hover:bg-gray-900 dark:bg-black text-gray-700 hover:decoration-none hover:bg-gray-200 hover:text-gray-700 hover:no-underline"
      >
        <div className="flex flex-row">
          <Calendar
            className="mr-2 text-teal-700 dark:text-teal-300"
            size={20}
          />
          <span className="dark:text-white">
            Schedule a{" "}
            <span className="text-teal-700 dark:text-teal-300 font-medium">
              meeting
            </span>
          </span>
        </div>
      </a>
    </div>
  );
}
