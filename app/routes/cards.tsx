import ScholarCard from "./cards/scholarCard";
import ProfileCard from "./cards/profileCard";
import ConferencesCard from "./cards/conferencesCard";
import GitHubCard from "./cards/githubCard";
import TwitterCard from "./cards/twitterCard";
import ContactCard from "./cards/contactCard";
import InterestsCard from "./cards/interestsCard";
import TalksCard from "./cards/talksCard";
import BooksCard from "./cards/booksCard";

export default function Cards({ data }: { data: any }) {
  const {
    scholar_data,
    conferences_data,
    talks_data,
    github_data,
    typefully_data,
  } = data;

  return (
    <div>
      <ProfileCard />
      <div className="grid my-8 sm:grid-cols-1 lg:grid-cols-2 gap-8 ">
        <ScholarCard data={scholar_data} />
        <ConferencesCard data={conferences_data} />
      </div>
      <div className="grid my-8 sm:grid-cols-1 lg:grid-cols-2 gap-8 ">
        <TalksCard data={talks_data} />
        <GitHubCard data={github_data} />
      </div>
      {/* <div className="grid my-8 sm:grid-cols-1 lg:grid-cols-2 gap-8 ">
        <TwitterCard data={typefully_data} />
        <BooksCard />
      </div> */}
      <div className="grid my-8 sm:grid-cols-1 lg:grid-cols-2 gap-8 ">
        <InterestsCard />
        <ContactCard />
      </div>
    </div>
  );
}
