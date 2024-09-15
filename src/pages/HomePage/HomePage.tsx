import { Hero } from "../../components/Hero/Hero";
import { Navbar } from "../../components/Navbar/Navbar";

export const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};
