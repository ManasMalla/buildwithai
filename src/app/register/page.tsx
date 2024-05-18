"use client";
import React, { useEffect, useState } from "react";
import initialFormState from "@/interfaces/initialFormState";
import initialFormData from "@/utils/formstate";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
import addData from "@/utils/addData";
import Loader from "@/components/LoadingAnimation/page";
import { db } from "@/app/firebase";
import {
  collection,
  doc,
  documentId,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";

const MyForm: React.FC = () => {
  const user = useAuthContext();
  const [loading, setLoadingState] = useState(false);
  const [registered, setRegistrationStatus] = useState(false);
  useEffect(() => {
    if (user === null) {
      alert("Please login to register for WoW");
      window.location.href = "/";
    }
    getCountFromServer(
      query(
        collection(db, "registrations"),
        where(documentId(), "==", user?.uid)
      )
    ).then((count) => {
      if (count.data().count > 0) {
        setLoadingState(true);
        setRegistrationStatus(true);
      }
    });
  });

  const [formState, setFormState] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingState(true);
    console.log(formState);
    // alert("Registration successful");
    // return false;
    setFormState((prevState) => ({
      ...prevState,
      ["coc"]: 1,
      ["terms"]: 1,
    }));
    await addData("registrations", user?.uid, formState);
    localStorage.setItem("hasRegistered", "true");
    setRegistrationStatus(true);
  };

  useEffect(() => {
    const firstName = user?.displayName?.split(" ").at(0) ?? "";
    const lastName = user?.displayName?.replaceAll(firstName + " ", "") ?? "";

    setFormState((prevState) => ({
      ...prevState,
      ["firstName"]: firstName,
      ["lastName"]: lastName,
      ["email"]: user?.email ?? "",
    }));
  }, [user]);

  return (
    <div className="flex flex-col justify-center items-center py-[20px] md:py-[60px] md:px-[unset]">
      <div className="flex flex-col justify-center items-center md:rounded-xl md:border-[1.5px] border-gray-500 md:w-4/5">
        <div className="w-full md:rounded-t-xl bg-slate-800/30 flex flex-col p-[20px] px-[0px] pt-[32px] pb-0 border-gray-500 border-b-[1.5px] items-center">
          <div className="md:pt-[30px] md:pl-[40px] pt-[20px] pb-[40px] md:pb-[unset] items-center text-center">
            <h1 className="text-3xl font-medium">
              Register for{" "}
              <span className="bard-hello font-medium !inline-flex">
                #BuildWithAI
              </span>
            </h1>

            <p className="opacity-60 mt-3 text-lg">1st June 2024</p>

            {/* <p className="opacity-60">
              Vignan Institute of Information Technology, Visakhapatnam
            </p> */}
          </div>
          <img src="/images/gemini.png" className="w-full " />
        </div>
        <div className="md:w-4/5 md:mr-auto md:mt-10 p-[20px] pb-0 md:p-[unset] md:ml-auto">
          <h3 className="text-xl font-medium">Create a developer profile</h3>
          <p className="mt-2 max-w-[480px] md:text-base text-sm">
            Create your developer profile to apply for a ticket to{" "}
            <span className="bard-hello font-medium !inline-flex">
              #BuildWithAI
            </span>{" "}
            Vizag to help us better understand you and get recommendations for
            the best sessions and content for you.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="px-[20px] md:px-[unset] md:w-4/5"
        >
          <div className="mb-4 py-8 rounded-3xl w-full  flex flex-col space-y-4 md:space-y-8">
            <div className="flex flex-col md:flex-row md:space-x-8 gap-y-4 md:gap-y-[unset]">
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder="First Name"
                value={formState.firstName}
                onChange={handleChange}
                className="register-input grow"
              />

              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="Last Name"
                value={formState.lastName}
                onChange={handleChange}
                className="register-input grow"
              />
            </div>
            {/* Email */}

            <div className="flex  flex-col md:flex-row md:space-x-8  gap-y-4 md:gap-y-[unset]">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email Address"
                value={formState.email}
                onChange={handleChange}
                className="register-input grow md:w-1/2"
              />
              <select
                name="gender"
                className="register-input grow md:w-1/4"
                onChange={handleSelectChange}
                required
              >
                <option value="">Pronoun (select)</option>
                <option>he/him</option>
                <option>she/her</option>
                <option>they/them</option>
              </select>

              <div>
                <p className="font-medium">Mode of Attendence</p>
                <div className="flex items-center space-x-4 mt-2">
                  <input
                    type="radio"
                    name="mode"
                    value={0}
                    required
                    onChange={handleChange}
                  />
                  <p>Offline</p>
                  <input
                    type="radio"
                    name="mode"
                    value={1}
                    required
                    onChange={handleChange}
                  />
                  <p>Online</p>
                </div>
              </div>
            </div>
            <div className="flex  flex-col md:flex-row md:space-x-8 gap-y-4 md:gap-y-[unset">
              <div className="grow md:w-1/2">
                <input
                  type="url"
                  id="socialProfile"
                  name="socialProfile"
                  required
                  placeholder="Website"
                  value={formState.socialProfile}
                  onChange={handleChange}
                  className="register-input w-full"
                />
                <p className="mt-2 md:mt-4 max-w-[360px] text-[12px]">
                  Share us a link where we can get to know more about you. It
                  can be your website, social media, or literally anything you
                  want us to know
                </p>
              </div>
              <input
                type="text"
                id="university"
                name="university"
                required
                placeholder="Organization"
                value={formState.university}
                onChange={handleChange}
                className="register-input grow h-max"
              />
              {/* <div className="md:w-1/2">
                <input
                  type="text"
                  id="university"
                  name="university"
                  required
                  placeholder="Institution Name"
                  value={formState.university}
                  onChange={handleChange}
                  className="register-input grow mt-4 w-full"
                />
              </div> */}
            </div>
            <div className="flex  flex-col md:flex-row md:space-x-8  gap-y-4 md:gap-y-[unset]">
              <div className="md:w-1/3">
                <select
                  className="w-full register-input h-max"
                  required
                  onChange={handleSelectChange}
                  name="domain"
                >
                  <option value="">Domain (select)</option>
                  <option>Android</option>
                  <option>Artificial Intelligence</option>
                  <option>Firebase</option>
                  <option>Flutter</option>
                  <option>Google Cloud</option>
                  <option>Machine Learning</option>
                  <option>Web</option>
                  <option>Other</option>
                </select>

                {/* <input
                  type="text"
                  id="university"
                  name="university"
                  required
                  placeholder="Institution Name"
                  value={formState.university}
                  onChange={handleChange}
                  className="register-input grow mt-4 w-full"
                /> */}
              </div>

              <select
                name="profession"
                className=" register-input grow md:w-1/3 h-max"
                onChange={handleSelectChange}
                required
              >
                <option value="">Professional (select)</option>
                <option>Student</option>
                <option>Intern</option>
                <option>Professional</option>
                <option>Entrepreneur</option>
              </select>
              <div>
                <p className="font-medium">
                  Any experience with Gemini API, Google AI Studio, Vertex AI?
                </p>
                <div className="flex items-center space-x-4 mt-2">
                  <input
                    type="radio"
                    name="aiExperience"
                    value={1}
                    required
                    onChange={handleChange}
                  />
                  <p>Yes</p>
                  <input
                    type="radio"
                    name="aiExperience"
                    value={0}
                    required
                    onChange={handleChange}
                  />
                  <p>No</p>
                </div>
              </div>
            </div>
            {/* <div className="flex-col flex w-full">
              <label htmlFor="whyWow" className=" mb-3">
                Why do you want to attend WoW?
              </label>
              <textarea
                id="whyWow"
                name="whyWow"
                required
                placeholder="I want to attend WoW because..."
                value={formState.whyWow}
                onChange={handleTextAreaChange}
                className="register-input resize-none"
                rows={6}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="expectationsFromWow" className="mb-3">
                What are your expectations from WoW?
              </label>
              <textarea
                // type="text"
                id="expectationsFromWow"
                name="expectationsFromWow"
                required
                placeholder="I would love to ..."
                value={formState.expectationsFromWow}
                onChange={handleTextAreaChange}
                className="register-input resize-none"
                rows={6}
              />
            </div> */}
          </div>
          <div>
            <div className="flex space-x-3">
              <input type="checkbox" name="terms" required />
              <p>
                I agree to the{" "}
                <button
                  onClick={() => {
                    const tcWindow = window
                      .open(
                        "/faq#terms-conditions",
                        "Terms and Conditions | WoW 2024 Visakhapatnam",
                        "popup, location,status,scrollbars,resizable,width=600, height=600"
                      )
                      ?.focus();
                  }}
                >
                  <b>terms and conditions</b>
                </button>
                .
              </p>
            </div>
            <div className="flex space-x-3">
              <input type="checkbox" name="coc" required />
              <p>
                I agree to abide by the code of conduct{" "}
                <a
                  href="https://devfest23.vizag.dev/coc"
                  target="_blank"
                  className="text-[#1a73e8] font-medium"
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="py-2 px-6 text-blue-500 rounded border-neutral-300 border text-sm mb-16 mt-8"
            >
              Submit
            </button>
          </div>
        </form>
        {loading && (
          <div className="absolute top-0 w-full h-full flex items-center justify-center z-10 bg-opacity-50 bg-black md:ml-[80px] text-center">
            <div className="px-[40px] md:px-[80px] pb-[40px] bg-white dark:bg-[#202023] rounded-2xl shadow-2xl mx-8 md:mx-[unset]">
              <Loader></Loader>
              {!registered && (
                <p className="font-medium">
                  Please wait while we process your registration
                </p>
              )}
              {registered && (
                <>
                  <h2 className="text-2xl font-medium">Application Recieved</h2>
                  <p className="text-sm mt-4 mb-8 max-w-[420px]">
                    You&apos; be notified of the status of your application soon.
                    <br />
                    Make sure to keep an eye on your email.
                  </p>
                  <button
                    onClick={() => {
                      setLoadingState(false);
                      setRegistrationStatus(false);
                      window.location.href = "/";
                    }}
                    className="border-[1.5px] px-8 py-2 rounded-full border-gray-500"
                  >
                    Done
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyForm;
