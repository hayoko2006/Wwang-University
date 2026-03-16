import type { ResolvingMetadata } from "next";
import Breadcrumb from "@/components/breadcrumbWrapper";
import buildMetadata from "@/components/buildMetadata";
import DiplomaText from "./components/diplomaText.mdx";
import DiplomaWrapper from "./components/diplomaWrapper";

export const generateMetadata = (_props: {}, parent: ResolvingMetadata) =>
  buildMetadata(
    {
      title: "毕业证书",
      keywords: [
        "神圣大旺帝国旺学文凭",
        "旺学毕业证",
      ],
    },
    parent,
  );

export default function Diploma() {
  return (
    <div className="flex flex-1 flex-col items-center justify-start mx-auto max-w-5xl w-full p-4 min-h-[calc(100dvh-4rem)]">
      <div className="w-full max-w-2xl">
        <Breadcrumb />
        <h1 className="text-2xl font-bold my-1">
          神圣大旺帝国旺学毕业证书
        </h1>
        <div className="mdx-layout font-sm mb-8">
          <DiplomaText />
        </div>
        <DiplomaWrapper />
      </div>
    </div>
  );
}
