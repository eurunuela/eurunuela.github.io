import ScholarCard from "./cards/scholarCard";
import ProfileCard from "./cards/profileCard";
import ConferencesCard from "./cards/conferencesCard";
import GitHubCard from "./cards/githubCard";
import TwitterCard from "./cards/twitterCard";
import ButtonsCard from "./cards/buttonsCard";

export default function Cards({ data }: { data: any }) {
  const { scholar_data, conferences_data, github_data } = data;

  return (
    <div>
      <ProfileCard />
      <div className="grid my-8 sm:grid-cols-1 lg:grid-cols-2 gap-8 ">
        <ScholarCard data={scholar_data} />
        <ConferencesCard data={conferences_data} />
      </div>
      <div className="grid my-8 sm:grid-cols-1 lg:grid-cols-2 gap-8 ">
        <GitHubCard data={github_data} />
        <TwitterCard data={github_data} />
      </div>
      <div className="grid my-8 sm:grid-cols-1 lg:grid-cols-2 gap-8 ">
        {/* <GitHubCard data={github_data} /> */}
        <ButtonsCard />
      </div>
    </div>
  );
}
