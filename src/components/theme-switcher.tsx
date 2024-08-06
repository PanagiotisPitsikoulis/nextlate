"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button variant="faded" isIconOnly>
          <MoonIcon className="text-lg text-default-500 pointer-events-none flex-shrink-0 size-4" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Theme switcher menu">
        <DropdownItem
          key="light"
          startContent={
            <SunIcon className="text-lg text-default-500 pointer-events-none flex-shrink-0 size-" />
          }
          onClick={() => setTheme("light")}
        >
          Φωτεινή Λειτουργία
        </DropdownItem>
        <DropdownItem
          key="dark"
          startContent={
            <MoonIcon className="text-lg text-default-500 pointer-events-none flex-shrink-0 size-4" />
          }
          onClick={() => setTheme("dark")}
        >
          Σκοτεινή Λειτουργία
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
