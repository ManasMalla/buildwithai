"use client";
import { auth, signInWithGoogleAsPopup } from "@/app/firebase";
import { useAuthContext } from "@/context/AuthContext";
import { Menu } from "@mui/icons-material";
import { User } from "firebase/auth";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function SignOutDialog() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("signout") === "";
  const pathName = usePathname();
  console.log("modal", modal, pathName);
  return (
    <>
      <dialog
        className={`dark:bg-[unset] fixed left-0 top-0 w-full h-full ${
          modal ? "bg-black bg-opacity-50 z-50 backdrop-blur" : "-z-20"
        } flex justify-center items-center overflow-hidden`}
      >
        <div
          className={`mx-8 md:mx-[unset] p-[40px] bg-white dark:bg-[#202023] text-white rounded-2xl shadow-xl  transition-all duration-300 ${
            modal
              ? "bottom-0 md:translate-y-0 -translate-y-[112px]"
              : "bottom-0 translate-y-[500px] md:translate-y-[500px]"
          } `}
        >
          <h2 className="text-2xl font-medium">Sign out?</h2>
          <p className="mt-2 mb-6">
            All saved events remain synced to your account.
          </p>
          <div className="flex gap-x-8">
            <Link href={pathName}>
              <button>Not now</button>
            </Link>
            <Link href={pathName}>
              <button
                className="font-medium text-[#1a73e8]"
                onClick={() => {
                  auth.signOut();
                }}
              >
                Sign out
              </button>
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}

export function TopNavigationBar() {
  const router = useRouter();
  const user = useAuthContext();
  const pathName = usePathname();
  return (
    <div className="gemini-page h-14 md:h-16 relative z-10 px-4 flex justify-end items-center">
      {user !== null && user.photoURL !== null && (
        <Link href="?signout">
          <img
            referrerPolicy="no-referrer"
            src={user.photoURL}
            className="my-3 mx-2 w-[42px] h-[42px] rounded-full aspect-square"
            onClick={() => {}}
          />
        </Link>
      )}
      {user !== null && user.photoURL === null && (
        <Link href="?signout">
          <div className="my-3 mx-2 w-[42px] h-[42px] rounded-full aspect-square flex items-center justify-center bg-[#fbbc04] font-medium">
            {user?.displayName?.toString().charAt(0).toUpperCase()}
          </div>
        </Link>
      )}
      {user !== null && !pathName.includes("/register") && (
        <Link href="/register" className="flex">
          <button className="my-3 md:mx-3 mr-0 ml-3 py-[10px]  gemini-btn gemini-gradient  gemini-type-btn font-medium text-sm px-5 rounded-lg">
            <span>Register</span>
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
          <span>Sign In</span>
        </button>
      )}
    </div>
  );
}
