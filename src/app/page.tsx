import Advantages from "@/components/Advantages/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto">
      <div className="gemini-page gemini-landing">
        <div className="gemini-landing-hero">
          <div className="z-10 relative flex flex-col items-center justify-center text-center px-[20px] lg:px-[120px] pb-[60px]">
            <div className="gemini-section-hero mb-[40px]">
              <div className="gemini-competition-star">
                <img src="/images/competition-star.svg" />
              </div>
            </div>
            <h1 className="text-xl lg:text-4xl text-[2.5rem]">
              AI for every developer
            </h1>
            <h2 className="bard-hello w-max text-5xl lg:text-8xl font-bold mt-3 md:mt-6 mb-4">
              Build With AI
            </h2>
            <p className="max-w-[480px] text-sm md:text-base text-center">
              Google Developer Groups Vizag brings you the once in a lifetime
              opportunity to learn and build with state-of-the-art generative
              models and tools to make AI helpful for everyone
            </p>
            <div className="flex flex-col md:flex-row md:gap-x-4 mt-6 items-center gap-y-4 md:gap-y-[unset]">
              <p className="py-3 px-8 border-[1.2px] border-white/50 rounded-full text-sm w-max">
                1 June 2024
              </p>
              <p className="py-3 px-8 border-[1.2px] border-white/50 rounded-full text-sm w-max">
                TBA
              </p>
              {/* <p className="py-3 px-8 border-[1.2px] border-white/50 rounded-full text-sm w-max">
                Vignan Institute of Information Technology
              </p> */}
            </div>
          </div>
        </div>
        <section className="gemini-gem-advantages w-full px-[20px] md:px-[90px]">
          <Advantages
            title="Speaker Sessions"
            description="Join us for a series of talks by industry experts and researchers in the field of AI and ML. Learn about the latest advancements in the field."
          />
          <Advantages
            title="Hands-on Workshops"
            description="Get hands-on experience with the latest Gemini APIs, Vertext AI and Gemma. Learn how to build and deploy models with ease."
          />
          <Advantages
            title="Networking"
            description="Meet and connect with like-minded developers, researchers and industry professionals. Share your ideas and collaborate on projects."
          />
        </section>
      </div>
    </div>
  );
}
