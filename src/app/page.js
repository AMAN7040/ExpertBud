import Link from "next/link";

export const metadata = {
  title: "Home - Learning Starts Here",
  description:
    "Welcome to ExpertBuddy — Accelerate your skills with ExpertBuddy’s curated resources, expert mentors, and real-time collaboration tools.",
  openGraph: {
    title: "ExpertBuddy | Personalized Learning Starts Here",
    description:
      "Get started with curated mentorship and expert-driven guidance.",
    url: "",
    siteName: "ExpertBuddy",
    type: "website",
  },
  twitter: {
    title: "Personalized Learning Starts Here",
    description: "Get expert mentorship and start growing today.",
  },
};
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="flex items-center  h-full min-h-screen py-0 px-4 sm:px-6 md:px-12">
        <div className=" w-full max-w-[85vw] sm:max-w-[450px] md:max-w-[650px] space-y-6 ">
          <div className="opacity-0 animate-[fadeInLeft_0.5s_ease-out_0.2s_forwards]">
            <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-semibold text-primary ">
              Welcome to{" "}
              <span className="text-[clamp(1.6rem,5.5vw,3.5rem)] font-bold leading-tight">
                ExpertBuddy
              </span>
            </h1>
            <p className="text-[clamp(1rem,2vw,1.3rem)] text-muted-foreground ml-2">
              Accelerate your journey with real-world assignments & modern tech
            </p>
          </div>
          <div className="opacity-0 w-[300px] h-[40px] sm:w-[400px]  md:w-[500px] md:h-[50px] flex justify-center items-center animate-[fadeInLeft_0.5s_ease-out_0.7s_forwards]">
            <Link
              href="/homework"
              className=" h-full w-[150px] md:w-[180px] inline-flex justify-center items-center bg-primary border border-primary rounded-md text-background text-[clamp(10px,1.8vw,16px)]  btn z-1  active:scale-[0.98]"
            >
              GO TO HOMEWORK
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
