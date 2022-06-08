import { Linkedin } from "react-feather";

export default function LinkedinButton() {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/eneko-urunuela/"
        target="_blank"
        className="flex justify-center items-center py-3 px-10 rounded-md w-full h-auto bg-gray-100 text-gray-700 hover:decoration-none hover:bg-gray-200 hover:text-gray-700 hover:no-underline"
      >
        <div className="flex flex-row">
          <Linkedin className="mr-1 text-orange-400" size={20} />
          <span>
            Add me on <span className="text-orange-400">LinkedIn</span>
          </span>
        </div>
      </a>
    </div>
  );
}
