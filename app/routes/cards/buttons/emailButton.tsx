import { Mail } from "react-feather";

export default function EmailButton() {
  return (
    <div>
      <a
        href="mailto:e.urunuela@bcbl.eu"
        target="_blank"
        className="flex justify-center items-center py-3 px-10 bg-emerald-500 rounded-md text-white w-full h-auto"
      >
        <div className="flex flex-row">
          <Mail className="mr-1" />
          <span>DM me on Twitter</span>
        </div>
      </a>
    </div>
  );
}
