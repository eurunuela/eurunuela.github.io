import { MessageCircle } from "react-feather";

export default function TwitterButton() {
  return (
    <div>
      <a
        href="https://www.twitter.com/eurunuela"
        target="_blank"
        className="flex justify-center items-center py-3 px-10 rounded-md w-full h-auto bg-gray-100 text-text hover:decoration-none hover:bg-gray-300 hover:text-text hover:no-underline"
      >
        <div className="flex flex-row">
          <MessageCircle className="mr-1 text-twitter" />
          <span>
            DM me on <span className="text-twitter">Twitter</span>
          </span>
        </div>
      </a>
    </div>
  );
}
