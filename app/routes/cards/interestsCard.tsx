import {
  Activity,
  Command,
  Edit2,
  Tag,
  MapPin,
  Terminal,
  Users,
} from "react-feather";

export default function InterestsCard() {
  return (
    <div className="flex justify-center relative">
      <div className="block py-6 px-10 rounded-lg shadow-lg bg-white dark:bg-gray-800 h-full w-full ">
        <div className="flex justify-between mb-4">
          <h5 className="text-pink-500 dark:text-pink-400 text-2xl leading-tight font-bold">
            My interests
          </h5>
          <div className="flex justify-end items-center">
            <Tag className="text-pink-500 dark:text-pink-400 -mr-0.5" />
          </div>
        </div>
        <div className="border-b-1 border-gray-500 mb-3">
          <div className="flex flex-col justify-between my-4">
            <ul className="flex flex-col">
              <li className="my-2">
                <div className="grid grid-cols-10 gap-4">
                  <Terminal
                    className="text-pink-500 dark:text-pink-400 mt-0.5"
                    size={20}
                  />
                  <p className="col-span-9">
                    Working on new{" "}
                    <span className="text-pink-500 dark:text-pink-400 font-medium">
                      deep learning
                    </span>{" "}
                    projects.
                  </p>
                </div>
              </li>
              <li className="my-2">
                <div className="grid grid-cols-10 gap-4">
                  <Users
                    className="text-pink-500 dark:text-pink-400 mr-4 mt-0.5"
                    size={20}
                  />
                  <p className="col-span-9">
                    Giving to the{" "}
                    <span className="text-pink-500 dark:text-pink-400 font-medium hover:text-pink-700 dark:hover:text-pink-600">
                      research community in Calgary
                    </span>{" "}
                    .
                  </p>
                </div>
              </li>
              <li className="my-2">
                <div className="grid grid-cols-10 gap-4">
                  <Activity
                    className="text-pink-500 dark:text-pink-400 mr-4 mt-0.5"
                    size={20}
                  />
                  <p className="col-span-9">
                    Staying{" "}
                    <span className="text-pink-500 dark:text-pink-400 font-medium">
                      active
                    </span>
                    .
                  </p>
                </div>
              </li>
              <li className="my-2">
                <div className="grid grid-cols-10 gap-4">
                  <MapPin
                    className="text-pink-500 dark:text-pink-400 mr-4 mt-0.5"
                    size={20}
                  />
                  <p className="col-span-9">
                    Exploring{" "}
                    <span className="text-pink-500 dark:text-pink-400 font-medium">
                      new cities
                    </span>{" "}
                    and learning from{" "}
                    <span className="text-pink-500 dark:text-pink-400 font-medium">
                      new connections
                    </span>
                    .
                  </p>
                </div>
              </li>
              <li className="my-2">
                <div className="grid grid-cols-10 gap-4">
                  <Edit2
                    className="text-pink-500 dark:text-pink-400 mr-4 mt-0.5"
                    size={20}
                  />
                  <p className="col-span-9">
                    Making the most of{" "}
                    <span className="text-pink-500 dark:text-pink-400 font-medium">
                      tools for thought
                    </span>{" "}
                    .
                  </p>
                </div>
              </li>
              <li className="my-2">
                <div className="grid grid-cols-10 gap-4">
                  <Command
                    className="text-pink-500 dark:text-pink-400 mr-4 mt-0.5"
                    size={20}
                  />
                  <p className="col-span-9">
                    Using{" "}
                    <span className="text-pink-500 dark:text-pink-400 font-medium">
                      AI
                    </span>{" "}
                    to be more productive with daily tasks.
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
