import { cn } from "@nextui-org/theme";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ className }: { className?: string }) => (
  <Link href={"/home"}>
    <Image
      src="/logo.svg"
      alt="Simply Drive"
      width={300}
      height={300}
      className={cn(
        "md:w-28 md:h-14 size-20 invert dark:invert-0 drop-shadow-2xl shrink-0",
        className,
      )}
    />
  </Link>
);
