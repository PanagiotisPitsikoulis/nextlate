"use client";

import { Chip } from "@nextui-org/chip";
import { Image, ImageProps } from "@nextui-org/image";
import { Pagination } from "@nextui-org/pagination";
import { cn } from "@nextui-org/theme";
import NextImage from "next/image";
import React from "react";

export function LandingSection({
  header,
  highlighted,
  description1,
  description2,
  classNames = {},
  imageProps,
  chips,
}: {
  header: string;
  highlighted: string;
  description1?: string;
  description2?: string;
  chips?: {
    chip1?: string;
    chip2?: string;
  };
  classNames?: {
    textContainer?: string;
    highlightedText?: string;
    description?: string;
    imageContainer?: string;
    image?: string;
    chips?: {
      chip1?: string;
      chip2?: string;
    };
  };
  imageProps?: ImageProps[];
}) {
  const [currentPage, setCurrentPage] = React.useState(0);

  return (
    <section>
      {/* Text */}
      <div
        className={cn(
          "flex flex-col gap-2 items-start justify-center w-full md:p-8",
          classNames.textContainer,
        )}
      >
        {/* Chips */}
        {chips && (
          <div className="flex flex-row gap-2 pb-2">
            {chips.chip1 && (
              <Chip color="primary" className={cn(classNames.chips?.chip1)}>
                {chips.chip1}
              </Chip>
            )}
            {chips.chip2 && (
              <Chip color="default" className={cn(classNames.chips?.chip2)}>
                {chips.chip2}
              </Chip>
            )}
          </div>
        )}
        <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">
          {header}
        </h1>
        <div>
          <h1
            className={cn(
              "tracking-tight inline font-semibold text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r",
              classNames.highlightedText,
            )}
          >
            {highlighted}
          </h1>
          <h2 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">
            {description1}
          </h2>
        </div>
        <h3
          className={`w-full md:w-3/4 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full ${classNames.description}`}
        >
          {description2}
        </h3>
      </div>
      {/* Spacer */}
      <div className="max-md:size-5"></div>
      {/* Image Container */}
      <div
        className={cn(
          "w-full flex flex-col justify-center items-center border border-default-200 dark:border-default-100 rounded-lg bg-gradient-to-br md:p-20",
          classNames.imageContainer,
        )}
      >
        {/* Active Image Controls */}
        {imageProps?.length && imageProps?.length > 1 && (
          <div className="max-md:pt-4">
            <Pagination
              total={imageProps.length}
              page={currentPage + 1}
              color="default"
              onChange={(page) => setCurrentPage(page - 1)}
            />
          </div>
        )}

        {imageProps && imageProps[currentPage] && (
          <Image
            src={imageProps[currentPage].src}
            alt={imageProps[currentPage].alt}
            className={cn("object-contain object-center", classNames.image)}
            as={NextImage}
            width={imageProps[currentPage].width ?? 1400}
            height={imageProps[currentPage].height ?? 600}
            {...imageProps[currentPage]}
          />
        )}
      </div>
    </section>
  );
}
