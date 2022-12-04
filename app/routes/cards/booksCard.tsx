import { BookOpen } from "react-feather";

export default function BooksCard() {
  return (
    <div className="flex justify-center relative">
      <a
        href="https://literal.club/eurunuela"
        target="_blank"
        className="hover:no-underline hover:decoration-inherit active:no-underline active:decoration-inherit focus:no-underline focus:decoration-inherit w-full h-full"
      >
        <div className="block py-6 px-10 rounded-lg shadow-lg bg-white dark:bg-gray-800 h-full w-full ">
          <div className="flex justify-between mb-4">
            <h5 className="text-orange-400 text-2xl leading-tight font-bold">
              Books I'm reading
            </h5>
            <div className="flex justify-end items-center">
              <BookOpen className="text-orange-400 -mr-0.5" />
            </div>
          </div>
          <div className="border-b-1 border-gray-500 mb-3">
            <div className="flex flex-col justify-between my-4">
              <div
                id="literal-widget"
                handle="eurunuela"
                status="IS_READING"
                layout="list"
              ></div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
