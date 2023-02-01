import FeatureProduct from "./components/TrendProducts";
import HeroSection from "./components/Thumbnail";
import Services from "./components/Services";


const Home = () => {
  const data = {
    name: "Super Store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
     
    </>
  );
};

export default Home;
