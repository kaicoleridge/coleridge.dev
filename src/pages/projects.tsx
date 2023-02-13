import dynamic from "next/dynamic";
import "aos/dist/aos.css";
import Aos from "aos";

const ProjectData = [
  {
    id: 0,
    title: "coleridge.dev",
    description:
      "This website you are currently on. Built with Next.js, TailwindCSS, and TypeScript.",
    href: "https://github.com/kaicoleridge/coleridge.dev"
  },

  {
    id: 1,
    title: "Vector",
    description: "a multi-purpose Discord bot for my server 🤖",
    href: "https://github.com/kaicoleridge/VecTor"
  },

  {
    id: 2,
    title: "DoIt",
    description: "a minimal task app built with Swift 📝",
    href: "https://github.com/kaicoleridge/DoIt"
  }
];

const projects = () => {
  return (
    <div data-aos="zoom-in">
      <main className="container mx-auto flex flex-col items-start justify-start max-w-3xl">
        <div className="flex flex-col items-start justify-start leading-7 m-10">
          <h1 className="md:text-5xl font-bold">Projects</h1>
          <p className="text-md line text-gray-400  mt-5">
            Here are a couple of projects I&apos;ve worked on and am currently working on. This list
            will be updated as I work on more projects.
            {ProjectData.map(({ id, title, description, href }) => (
              <div
                className="flex flex-col items-start justify-start text-md font-semibold px-5 py-4 mt-5 dark:bg-[#12181d]/60 hover:border-2 border-b-gray-400 rounded-lg p-3"
                key={id}>
                <p className="md:text-xl font-bold text-white">{title}</p>
                <p className="font-normal">{description}</p>
                <a href={href} target="_blank" rel="noreferrer" className="text-indigo-500">
                  {" "}
                  View repo 🔗
                </a>
              </div>
            ))}
          </p>
        </div>
      </main>
    </div>
  );
};

export default dynamic(() => Promise.resolve(projects), { ssr: false });
