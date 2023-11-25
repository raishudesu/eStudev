import barysh from "@/assets/team/barysh.jpg";
import justine from "@/assets/team/justine.jpg";
import raven from "@/assets/team/raven.jpg";
import ric from "@/assets/team/ric.jpg";
import MemberCard from "./MemberCard";

const Team = () => {
  const team = [
    {
      name: "Barysh",
      image: barysh,
    },
    {
      name: "Justine",
      image: justine,
    },
    {
      name: "Raven",
      image: raven,
    },
    {
      name: "Ric",
      image: ric,
    },
  ];
  return (
    <div className="w-full max-w-screen-xl flex flex-col gap-6">
      <h2
        className={`scroll-m-20 text-3xl font-bold tracking-tight transition-colors first:mt-0`}
      >
        Meet the team
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {team.map(({ name, image }, index) => (
          <MemberCard key={index} author={name} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Team;
