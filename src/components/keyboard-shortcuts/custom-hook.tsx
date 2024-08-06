"use client";
import { useEffect } from "react";

export type KeyAction = {
  keys: string[]; // Changed from 'key' to 'keys' and made it an array
  action: () => void;
  condition?: () => boolean;
};

export type UseKeyboardShortcutsProps = {
  keyActions: KeyAction[];
};

export function useKeyboardShortcuts({
  keyActions,
}: UseKeyboardShortcutsProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      keyActions.forEach(({ keys, action, condition }) => {
        if (keys.includes(event.key) && (!condition || condition())) {
          action();
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyActions]);
}
