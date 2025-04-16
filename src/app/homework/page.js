import HeroSection from "../components/Homework/Section-1/HeroSection";
import DetailsSection from "../components/Homework/Section-2/DetailsSection";

export const metadata = {
  title: "Homework Process",
  description: "Start the process and get to know everything about the process",
};

export default function HomeworkPage() {
  return (
    <>
      <HeroSection />
      <DetailsSection/>
    </>
  );
}
