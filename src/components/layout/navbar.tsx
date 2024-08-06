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
  Avatar,
  AvatarIcon,
} from "@nextui-org/react";
import { Logo } from "./logo";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { signOut } from "@/lib/functions/auth/sign-out";

export default function LayoutNavbar({
  isUserLoggedIn,
  menuItems,
  dropdownItems,
}: {
  isUserLoggedIn: boolean;
  menuItems: { name: string; href: string }[];
  dropdownItems: { name: string; icon: React.ReactNode; action: () => void }[];
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

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
              {dropdownItems.map((item) => (
                <DropdownItem
                  key={item.name}
                  startContent={item.icon}
                  onClick={item.action}
                >
                  {item.name}
                </DropdownItem>
              ))}
              {isUserLoggedIn && (
                <DropdownItem
                  key="logout"
                  className="text-danger"
                  color="danger"
                  onClick={() => signOut()}
                >
                  Logout
                </DropdownItem>
              )}
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
