"use client";
import { ChevronUpIcon } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";

export default function LayoutFooter({
  scrollToTopButtonText,
  footerDescription,
  homeLink,
  progressLink,
  mistakesLink,
  likedLink,
  showcaseLink,
  developerText,
  developerName,
  developerLink,
}: {
  scrollToTopButtonText: string;
  footerDescription: string;
  homeLink: string;
  progressLink: string;
  mistakesLink: string;
  likedLink: string;
  showcaseLink: string;
  developerText: string;
  developerName: string;
  developerLink: string;
}) {
  return (
    <footer className="mt-44">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-20">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="inline-block rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 p-2 text-white shadow transition hover:bg-blue-500 sm:p-3 lg:p-4"
          >
            <span className="sr-only">{scrollToTopButtonText}</span>
            <ChevronUpIcon className="size-7 drop-shadow-lg" />
          </button>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center items-start lg:justify-start">
              <Logo />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed lg:text-left">
              {footerDescription}
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-5 lg:mt-0 lg:justify-end lg:gap-6">
            <li>
              <Link href="/home">{homeLink}</Link>
            </li>

            <li>
              <Link href="/progress">{progressLink}</Link>
            </li>

            <li>
              <Link href="/mistakes">{mistakesLink}</Link>
            </li>

            <li>
              <Link href="/liked">{likedLink}</Link>
            </li>

            <li>
              <Link href="/">{showcaseLink}</Link>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          {developerText}{" "}
          <a
            className="dark:text-gray-400 text-gray-600 underline"
            href={developerLink}
          >
            {developerName}
          </a>
        </p>
      </div>
    </footer>
  );
}
