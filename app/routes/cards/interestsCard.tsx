import { Code, Edit, MapPin, Terminal, Users } from "react-feather";

export default function InterestsCard() {
  return (
    <div className="flex justify-center relative">
      <div className="block py-6 px-10 rounded-lg shadow-lg bg-white h-full w-full ">
        <div className="flex justify-between mb-4">
          <h5 className="text-violet-500 text-2xl leading-tight font-bold">
            My interests 🤔
          </h5>
        </div>
        <div className="border-b-1 border-gray-500 mb-3">
          <div className="flex flex-col justify-between my-4">
            <ul className="flex flex-col">
              <li className="my-2">
                <div className="flex flex-row">
                  <Terminal className="text-violet-500 mr-4 mt-0.5" size={20} />
                  <p>
                    working on new{" "}
                    <span className="text-violet-500 font-medium">
                      deep learning
                    </span>{" "}
                    projects
                  </p>
                </div>
              </li>
              <li className="my-2">
                <div className="flex flex-row">
                  <Edit className="text-violet-500 mr-4 mt-0.5" size={20} />
                  <p>
                    making the most of my notes on{" "}
                    <a className="text-violet-500 font-medium">Roam Research</a>
                  </p>
                </div>
              </li>
              <li className="my-2">
                <div className="flex flex-row">
                  <Users className="text-violet-500 mr-4 mt-0.5" size={20} />
                  <p>
                    making{" "}
                    <a className="text-violet-500 font-medium">
                      Brainhack Donostia
                    </a>{" "}
                    projects more accesible to newcomers
                  </p>
                </div>
              </li>
              <li className="my-2">
                <div className="flex flex-row">
                  <Code className="text-violet-500 mr-4 mt-0.5" size={20} />
                  <p>
                    learning about frontend development with{" "}
                    <span className="text-violet-500 font-medium">React</span>{" "}
                    and web design
                  </p>
                </div>
              </li>
              <li className="my-2">
                <div className="flex flex-row">
                  <MapPin className="text-violet-500 mr-4 mt-0.5" size={20} />
                  <p>
                    exploring{" "}
                    <span className="text-violet-500 font-medium">
                      new cities
                    </span>{" "}
                    and learning from new connections
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
