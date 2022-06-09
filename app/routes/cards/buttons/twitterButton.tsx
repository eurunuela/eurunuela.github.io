import { MessageCircle } from "react-feather";

export default function TwitterButton() {
  return (
    <div>
      <a
        href="https://www.twitter.com/eurunuela"
        target="_blank"
        className="flex justify-center items-center py-3 px-10 rounded-md w-full h-auto bg-gray-100 dark:hover:bg-gray-900 dark:bg-black text-gray-700 hover:decoration-none hover:bg-gray-200 hover:text-gray-700 hover:no-underline"
      >
        <div className="flex flex-row">
          <MessageCircle className="mr-1 mt-0.5 text-orange-400" size={20} />
          <span className="dark:text-white">
            DM me on{" "}
            <span className="text-orange-400 font-medium">Twitter</span>
          </span>
        </div>
      </a>
    </div>
  );
}
