import { Mail } from "react-feather";

export default function EmailButton() {
  return (
    <div>
      <a
        href="mailto:e.urunuela@bcbl.eu"
        target="_blank"
        className="flex justify-center items-center py-3 px-10 rounded-md w-full h-auto bg-gray-100 text-gray-700 hover:decoration-none hover:bg-gray-200 hover:text-gray-700 hover:no-underline"
      >
        <div className="flex flex-row">
          <Mail className="mr-1 text-orange-400" />
          <span>
            Reach me via <span className="text-orange-400">email</span>
          </span>
        </div>
      </a>
    </div>
  );
}
