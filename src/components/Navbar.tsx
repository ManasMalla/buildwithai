"use client";
import {
  CalendarToday,
  CalendarTodayOutlined,
  GamepadOutlined,
  Home,
  HomeTwoTone,
  InfoOutlined,
  MapOutlined,
  Menu,
  PeopleOutline,
  PeopleRounded,
  PersonPinCircleOutlined,
  PersonPinCircleTwoTone,
  PersonPinOutlined,
  SportsBarOutlined,
  SportsEsportsOutlined,
  TodayOutlined,
  TodayRounded,
} from "@mui/icons-material";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex w-full md:w-[80px] shrink-0 md:h-full navbar-shadow z-10 md:py-8 items-center py-2 md:pt-5 md:flex-col fixed md:relative bg-white md:bg-[unset] bottom-0 md:bottom-[unset]">
      <Menu className="m-3 hidden lg:flex" />

      <div
        className={`hidden line-nav ${
          pathname === "/"
            ? "top-[13%]  md:flex"
            : pathname.includes("badges")
            ? "top-[26.8%]  md:flex"
            : pathname.includes("faq")
            ? "top-[39%]  md:flex"
            : pathname.includes("schedule")
            ? "top-[53%] md:flex"
            : pathname.includes("speakers")
            ? "top-[66.9%] md:flex"
            : pathname.includes("live")
            ? "top-[79.6%] md:flex"
            : "hidden"
        } `}
      ></div>
      <div className="flex md:flex-col justify-evenly md:justify-center items-center grow gap-y-12">
        <a href="/#">
          <div className="flex flex-col items-center cursor-pointer">
            <HomeTwoTone
              className={`w-[24px] h-[24px] nav-icon ${
                pathname === "/" ? "nav-icon-active" : ""
              }`}
            />
            <p
              className={`text-[11px] mt-[6px] nav-text font-medium ${
                pathname === "/" ? "nav-text-active" : ""
              }`}
            >
              Home
            </p>
          </div>
        </a>
        <a href="/badges">
          <div className="flex flex-col items-center cursor-pointer">
            <PersonPinOutlined
              className={`w-[24px] h-[24px] nav-icon ${
                pathname.includes("badges") ? "nav-icon-active" : ""
              }`}
            />
            <p
              className={`text-[11px] mt-[6px] nav-text font-medium ${
                pathname.includes("badges") ? "nav-text-active" : ""
              }`}
            >
              Badges
            </p>
          </div>
        </a>
        <a href="/faq">
          <div className="flex flex-col items-center  cursor-pointer">
            <InfoOutlined
              className={`w-[24px] h-[24px] nav-icon ${
                pathname.includes("faq") ? "nav-icon-active" : ""
              }`}
            />
            <p
              className={`text-[11px] mt-[6px] nav-text font-medium ${
                pathname.includes("faq") ? "nav-text-active" : ""
              }`}
            >
              FAQ
            </p>
          </div>
        </a>
        <a href="/schedule">
          <div className="flex flex-col items-center  cursor-pointer">
            <TodayRounded
              className={`w-[24px] h-[24px] nav-icon ${
                pathname.includes("schedule") ? "nav-icon-active" : ""
              }`}
            />
            <p
              className={`text-[11px] mt-[6px] nav-text font-medium ${
                pathname.includes("schedule") ? "nav-text-active" : ""
              }`}
            >
              Schedule
            </p>
          </div>
        </a>
        <a href="/speakers">
          <div className="flex flex-col items-center  cursor-pointer">
            <PeopleRounded
              className={`w-[24px] h-[24px] nav-icon ${
                pathname.includes("speakers") ? "nav-icon-active" : ""
              }`}
            />
            <p
              className={`text-[11px] mt-[6px] nav-text font-medium ${
                pathname.includes("speakers") ? "nav-text-active" : ""
              }`}
            >
              Speakers
            </p>
          </div>
        </a>
        {/* <a href="/live">
          <div className="flex flex-col items-center  cursor-pointer">
            <MapOutlined
              className={`w-[24px] h-[24px] nav-icon ${
                pathname.includes("live") ? "nav-icon-active" : ""
              }`}
            />
            <p
              className={`text-[11px] mt-[6px] nav-text font-medium ${
                pathname.includes("live") ? "nav-text-active" : ""
              }`}
            >
              Live
            </p>
          </div>
        </a> */}
        <a href="/arcade">
          <div className="flex flex-col items-center  cursor-pointer">
            <SportsEsportsOutlined
              className={`w-[24px] h-[24px] nav-icon ${
                pathname.includes("arcade") ? "nav-icon-active" : ""
              }`}
            />
            <p
              className={`text-[11px] mt-[6px] nav-text font-medium ${
                pathname.includes("arcade") ? "nav-text-active" : ""
              }`}
            >
              Arcade
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
