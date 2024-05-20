"use client";
import Advantages from "@/components/Advantages/page";
import Partners from "@/components/Partners";
import { useAuthContext } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signInWithGoogleAsPopup } from "./firebase";
import { User } from "firebase/auth";

export default function Home() {
  const router = useRouter();
  const user = useAuthContext();
  const pathName = usePathname();
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

              <a href="https://maps.app.goo.gl/6H5f1svb2hsCapdFA">
                <p className="py-3 px-8 border-[1.2px] border-white/50 rounded-full text-sm w-max">
                  Vignan Institute of Information Technology
                </p>
              </a>
            </div>
            {user !== null && !pathName.includes("/register") && (
              <Link href="/register" className="flex">
                <button className="mt-6 my-3 relative z-10 md:mx-3 mr-0 ml-3 py-[10px]  gemini-btn gemini-gradient  gemini-type-btn font-medium text-sm px-8 rounded-lg">
                  <span>Apply Now</span>
                </button>
              </Link>
            )}
            {user === null && (
              <button
                className="mt-6 mr-2 py-2  relative z-10 px-8 font-medium gemini-btn gemini-secondary  gemini-type-btn"
                onClick={() => {
                  signInWithGoogleAsPopup(
                    (user: User | null) => {
                      router.refresh();
                    },
                    (failure: string) => {
                      alert("Error signin in: " + failure);
                    }
                  );
                }}
              >
                <span>Sign In To Apply</span>
              </button>
            )}
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

        <Partners />
      </div>
    </div>
  );
}
