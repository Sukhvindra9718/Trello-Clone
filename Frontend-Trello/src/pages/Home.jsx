import "../styles/Home.css";
import HomeSection1 from "../components/Home/HomeSection1";
// import HomeSection2 from "../components/Home/HomeSection2";
import HomeSection3 from "../components/Home/HomeSection3";
import HomeSection4 from "../components/Home/HomeSection4";

function Home() {
  return (
    <div className="section-1">

      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      </div>
  );
}

export default Home;
