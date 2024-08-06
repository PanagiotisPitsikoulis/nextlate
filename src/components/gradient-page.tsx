"use client";
import React, { useState, ReactNode } from "react";
import { Pagination, Chip, cn } from "@nextui-org/react";

export type GradientPageProps = {
  title: string;
  description: string;
  subtitle: string;
  classNames: {
    base?: string;
    header: {
      gradientFrom: string;
      gradientTo: string;
    };
    body: {
      gradientFrom: string;
      gradientTo: string;
    };
  };
  children: ReactNode;
};

export function GradientPage({
  title,
  description: itemsText,
  subtitle,
  classNames,
  children,
}: GradientPageProps) {
  return (
    <div className={cn(classNames.base)}>
      {/* Spacer for visual separation */}
      <div className="size-10"></div>

      {/* Title and Questions Total */}
      <div className="flex flex-col gap-2 items-center justify-center text-center w-full">
        <h1
          className={cn(
            "tracking-tight inline font-semibold text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b",
            classNames.header.gradientFrom,
            classNames.header.gradientTo,
          )}
        >
          {title}
        </h1>
        <div>
          <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">
            {itemsText}
          </h1>
        </div>
      </div>

      {/* Spacer for visual separation */}
      <div className="size-5"></div>

      {/* Subtitle */}
      <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-center mx-auto text-default-500 max-w-full">
        {subtitle}
      </p>

      {/* Spacer for visual separation */}
      <div className="size-20"></div>

      {/* Main Content Area */}
      <div
        className={cn(
          "w-full justify-center relative flex items-center border border-default-200 dark:border-default-100 px-2 py-14 rounded-lg overflow-hidden flex-col gap-4 md:px-14 min-h-[80dvh]",
          "bg-gradient-to-br",
          classNames.body.gradientFrom,
          classNames.body.gradientTo,
        )}
      >
        {/* Table */}
        {children}

        {/* Spacer for visual separation */}
        <div className="size-10"></div>
      </div>
    </div>
  );
}
