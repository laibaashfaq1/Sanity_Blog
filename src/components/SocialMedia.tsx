import { FaYoutube } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

export default function SocialMedia() {
  return (

    // Social Icons
    <nav className="flex gap-2 ">
      <Link href={"https://www.youtube.com/channel/UCu-IY5WDKZMjf0ktWm8QOmg"} target="_blank">
        <FaYoutube className={`w-6 h-6`} />
      </Link>
      <Link href={"https://github.com/laibaashfaq1"} target="_blank">
        <IoLogoGithub className={`w-6 h-6 fill-dark dark:fill-light`} />
      </Link>
    </nav>
  );
}
