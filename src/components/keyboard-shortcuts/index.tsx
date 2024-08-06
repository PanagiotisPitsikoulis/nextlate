"use client";
import React from "react";
import { KeyAction, useKeyboardShortcuts } from "./custom-hook";
import { KeyboardShortcuts, Shortcut } from "./popover";

export type KeyboardShortcutsWrapperProps = {
  shortcuts: (KeyAction & Shortcut)[];
};

export function KeyboardShortcutsWrapper({
  shortcuts,
}: KeyboardShortcutsWrapperProps) {
  // Extract keyActions for the hook and shortcut descriptions for the UI
  const keyActions: KeyAction[] = shortcuts.map(
    ({ keys, action, condition }) => ({ keys, action, condition }),
  );
  const shortcutDescriptions: Shortcut[] = shortcuts.map(
    ({ keys, description }) => ({ keys, description }),
  );

  // Hook to handle keyboard shortcuts
  useKeyboardShortcuts({ keyActions });

  return <KeyboardShortcuts shortcuts={shortcutDescriptions} />;
}
