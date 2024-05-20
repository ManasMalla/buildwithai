"use client";
import { signInWithGoogleAsPopup } from "@/app/firebase";
import { useAuthContext } from "@/context/AuthContext";
import { User } from "firebase/auth";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const user = useAuthContext();
  const pathName = usePathname();
  return (
    <div className="my-[64px] w-full">
      <img
        src="/dsc-wow.svg"
        alt=""
        className="mb-2 md:mb-6 w-[180px] md:w-[250px]"
      />

      <h2 className={`hero-h2 max-w-[500px] leading-[36px] text-[24px]`}>
        WOW 2024 is here to bring students from all walks of life together.
        Connect, Collaborate and Celebrate this event with enthusiasm and a
        spirit to learn.
      </h2>
      <br />
      <h4 className="venue-date">
        8-9 June 2024 ·{" "}
        <a href="https://maps.app.goo.gl/6H5f1svb2hsCapdFA">
          Vignan Institute of Information Technology
        </a>
      </h4>
      {user !== null && !pathName.includes("/register") && (
        <Link href="/register" className="flex">
          <button className="my-3 md:mx-3 mr-0 ml-3 py-[10px]  gemini-btn gemini-gradient  gemini-type-btn font-medium text-sm px-5 rounded-lg">
            <span>Apply Now</span>
          </button>
        </Link>
      )}
      {user === null && (
        <button
          className="mr-2 py-2 px-8 font-medium gemini-btn gemini-secondary  gemini-type-btn"
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
      {/* <div className="flex items-center justify-start space-x-2">
            <button className="py-2 px-6 text-blue-500 rounded border-neutral-300 border text-sm">
              Get your WOW Frame Frame
            </button>
            <button className="py-2 px-6 text-blue-500 rounded border-neutral-300 border text-sm">
              Give Feedback
            </button>
          </div> */}
    </div>
  );
}
