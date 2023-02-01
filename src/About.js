import HeroSection from "./components/Thumbnail";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Dollar Store",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;