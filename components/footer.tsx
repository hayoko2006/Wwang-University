"use client";
import Link from "next/link";
import ModeToggle from "@/components/modeToggle";

export default function Footer() {
  const commit = process.env.NEXT_PUBLIC_GIT_COMMIT;

  return (
    <footer className="w-full mx-auto p-6">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-start">
          <span className="text-sm text-gray-500 text-left">
            <span className="inline-block rotate-180">&copy;</span>{
              " "
            }
            {new Date().getFullYear()}{" "}
            <Link
              href="https://github.com/WildChickenUniversity/WildChickenUniversity"
              className="hover:underline"
            >
              神圣大旺帝国旺学
            </Link>{" "}
            by{" "}
            <Link
              href="https://github.com/Mr-Sheep"
              className="hover:underline"
            >
              Mr-Sheep
            </Link>
            ;{" "}
            <Link
              href="/pages/disclaimer#2-wild-chicken-univeristy-logo"
              className="hover:underline"
            >
              资产
            </Link>{" "}
            拥有各自的许可证。
          </span>
          <span className="text-xs text-gray-500 text-left">
            版本:{" "}
            <Link
              className="hover:underline"
              href={`https://github.com/WildChickenUniversity/WildChickenUniversity/commit/${commit}`}
            >
              {commit}
            </Link>
          </span>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center text-sm gap-x-6 gap-y-2 text-gray-500"
        >
          <Link href="/pages/about" className="hover:underline">
            关于我们
          </Link>
          <Link href="/pages/disclaimer" className="hover:underline">
            免责声明
          </Link>
          <Link href="/pages/privacy" className="hover:underline">
            隐私政策
          </Link>
          <Link href="/review" className="hover:underline">
            评价
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </footer>
  );
}
