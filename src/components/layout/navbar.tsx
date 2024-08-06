"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Divider,
  Avatar,
  AvatarIcon,
} from "@nextui-org/react";
import { Logo } from "./logo";
import { ThemeSwitcher } from "../theme-switcher";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { signOut } from "@/lib/functions/auth/sign-out";

export default function LayoutNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const menuItems = [
    { name: "Αρχική", href: "/home" },
    { name: "Αγαπημένα", href: "/liked" },
    { name: "Πρόοδος", href: "/progress" },
    { name: "Λάθη", href: "/mistakes" },
    { name: "Εκθεσιακή", href: "/" },
  ];

  return (
    <Navbar
      isBlurred={false}
      isBordered
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      className="md:my-2 pt-2 px-4 md:px-28"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link color="foreground" href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                size="sm"
                icon={<AvatarIcon />}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Menu Actions">
              <DropdownItem
                key="light"
                startContent={
                  <SunIcon className="text-lg text-default-500 pointer-events-none flex-shrink-0 size-4" />
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
              <DropdownItem
                href="/settings"
                key="settings"
                startContent={
                  <SettingsIcon className="text-lg text-default-500 pointer-events-none flex-shrink-0 size-4" />
                }
              >
                Ρυθμίσεις
              </DropdownItem>
              <DropdownItem
                key="delete"
                className="text-danger"
                color="danger"
                onClick={() => signOut()}
              >
                Αποσύνδεση
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <div className="size-5"></div>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              color="foreground"
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
