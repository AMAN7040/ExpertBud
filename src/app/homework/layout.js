export const metadata = {
  title: {
    default: "Homework Help",
    template: "%s | Homework Help",
  },
  description: "Get instant expert help with your homework questions.",
  openGraph: {
    title: "Homework Help | ExpertBuddy",
    description: "Live, on-demand support for students.",
    url: "",
  },
};

export default function Layout({ children }) {
  return (
    <main className="relative bg-[#F5F3EF] top-17.5 overflow-y-auto overflow-x-hidden">
      {children}
    </main>
  );
}
