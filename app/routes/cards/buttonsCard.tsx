import EmailButton from "./buttons/emailButton";
import TwitterButton from "./buttons/twitterButton";

export default function ButtonsCard() {
  return (
    <div className="flex justify-center relative">
      <div className="block py-6 px-10 rounded-lg shadow-lg bg-white h-full w-full ">
        <div className="flex justify-between mb-4">
          <h5 className="text-buttons text-2xl leading-tight font-bold text-orange-400">
            Let's chat 👇
          </h5>
        </div>
        <div className="grid my-4 grid-cols-1 gap-4 ">
          <TwitterButton />
          <EmailButton />
        </div>
      </div>
    </div>
  );
}
