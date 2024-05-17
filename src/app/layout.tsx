"use client";
import Footer from "@/components/Footer";
import "./globals.css";
import { Menu } from "@mui/icons-material";
import { auth, signInWithGoogleAsPopup } from "@/app/firebase";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { User } from "firebase/auth";
import { AuthContextProvider, useAuthContext } from "@/context/AuthContext";
import Link from "next/link";

export function SignOutDialog() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("signout") === "";
  const pathName = usePathname();
  console.log("modal", modal, pathName);
  return (
    <>
      <dialog
        className={`fixed left-0 top-0 w-full h-full ${
          modal ? "bg-black bg-opacity-50 z-50 backdrop-blur" : "-z-20"
        } flex justify-center items-center overflow-hidden`}
      >
        <div
          className={`mx-8 md:mx-[unset] p-[40px] bg-white rounded-2xl shadow-xl  transition-all duration-300 ${
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
    <div className="h-14 md:h-16 px-4 flex justify-end items-center">
      <div className="grow">
        <Menu className="mx-2 my-4 grow md:hidden" />
      </div>
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
          <button className="my-3 md:mx-3 mr-0 ml-3 py-[10px] bg-[#1a73e8] text-white font-medium text-sm px-5 rounded-lg">
            Register
          </button>
        </Link>
      )}
      {user === null && (
        <button
          className="mr-2 py-3 px-2 font-medium text-[#1a73e8]"
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
          Sign In
        </button>
      )}
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Build With AI | GDG Vizag</title>
        <meta
          name="description"
          content="The official website of Build With AI '24 Vizag"
        />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/images/favicon.svg"
        />*/}
        {/* <link rel="icon" type="image/png" href="/assets/images/favicon.png" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Google+Sans:400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`text-neutral-600`}>
        {/* <Navbar /> */}
        <AuthContextProvider>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden w-screen h-screen">
            <div className="h-[64px] md:hidden" />
            <div className="w-full md:w-[unset] h-full overflow-y-scroll grow">
              <TopNavigationBar />
              {children}
              <SignOutDialog />
              <Footer />
            </div>
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
}
