"use client";
import Footer from "@/components/Footer";
import "./globals.css";
import { Menu } from "@mui/icons-material";
import { auth, signInWithGoogleAsPopup } from "@/app/firebase";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { User } from "firebase/auth";
import { AuthContextProvider, useAuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { SignOutDialog, TopNavigationBar } from "@/components/Navbars";

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
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
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
      <body className="dark">
        {/* <Navbar /> */}

        <AuthContextProvider>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden w-screen h-screen">
            <div className="h-[64px] md:hidden" />
            <div className="w-full md:w-[unset] h-full overflow-y-scroll grow">
              <div className="bg-[#1a73e8] py-4 px-4 relative z-20 w-full text-center text-sm mb-4">
                Check out the biggest fest of Andhra Pradesh.{" "}
                <span className="font-medium ">
                  Register for the GDSC WoW 2024 Visakhapatnam{" "}
                  <a
                    href="https://wow.vizag.dev"
                    className="font-bold text-amber-300"
                  >
                    here
                  </a>
                  .
                </span>
              </div>
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
