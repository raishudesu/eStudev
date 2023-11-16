import SubFooter from "./SubFooter";
import HomeCard from "./HomeCard";
import Ranking from "./Ranking";

const Aside = () => {
  return (
    <div className="flex flex-col gap-6">
      <HomeCard />
      <Ranking />
      <SubFooter />
    </div>
  );
};

export default Aside;
