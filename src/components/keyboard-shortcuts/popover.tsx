"use client";

import React from "react";
import {
  Button,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { AlertCircle } from "lucide-react";

export type Shortcut = {
  keys: string[];
  description: string;
};

export type KeyboardShortcutsProps = {
  shortcuts: Shortcut[];
};

export function KeyboardShortcuts({ shortcuts }: KeyboardShortcutsProps) {
  return (
    <Popover backdrop="blur" placement="bottom" className="max-md:hidden">
      <PopoverTrigger>
        <Button
          isIconOnly
          className="text-default-900/60 max-md:hidden data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
          radius="full"
          variant="light"
        >
          <AlertCircle />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Συντομεύσεις Πληκτρολογίου</div>
          <div className="size-3"></div>
          {shortcuts.map((shortcut, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-row gap-2">
                <span className="size-4 flex items-center justify-center">
                  {shortcut.keys[0]}
                </span>
                <div className="text-xs">{shortcut.description}</div>
              </div>
              {index < shortcuts.length - 1 && <Divider className="my-2" />}
            </React.Fragment>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
