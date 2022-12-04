import EmailButton from "./buttons/emailButton";
import LinkedinButton from "./buttons/linkedinButton";
import TwitterButton from "./buttons/twitterButton";

import { AtSign } from "react-feather";

export default function ContactCard() {
  return (
    <div className="flex justify-center relative">
      <div className="block py-6 px-10 rounded-lg shadow-lg bg-white dark:bg-gray-800 h-full w-full ">
        <div className="flex justify-between mb-4">
          <h5 className="text-buttons text-2xl leading-tight font-bold text-teal-700 dark:text-teal-300">
            Let's chat
          </h5>
          <div className="flex justify-end items-center">
            <AtSign className="text-teal-700 dark:text-teal-300 -mr-0.5" />
          </div>
        </div>
        <div className="grid mt-10 grid-cols-1 gap-4 ">
          <TwitterButton />
          <EmailButton />
          <LinkedinButton />
        </div>
      </div>
    </div>
  );
}
