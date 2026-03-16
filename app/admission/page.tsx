import type { ResolvingMetadata } from "next";
import Breadcrumb from "@/components/breadcrumbWrapper";
import buildMetadata from "@/components/buildMetadata";
import AdmissionText from "./components/admissionText.mdx";
import AdmissionWrapper from "./components/admissionWrapper";

export const generateMetadata = (_props: {}, parent: ResolvingMetadata) =>
  buildMetadata(
    {
      title: "录取申请",
      keywords: [
        "神圣大旺帝国旺学录取",
        "旺学录取通知书",
        "旺学录取通知书生成器",
      ],
    },
    parent,
  );

export default function Admission() {
  return (
    <div className="flex flex-1 flex-col items-center justify-start mx-auto max-w-5xl w-full p-4 min-h-[calc(100dvh-4rem)]">
      <div className="w-full max-w-2xl">
        <Breadcrumb />
        <h1 className="text-2xl font-bold my-1">
          神圣大旺帝国旺学录取申请
        </h1>
        <div className="mdx-layout font-sm mb-8">
          <AdmissionText />
        </div>
        <AdmissionWrapper />
      </div>
    </div>
  );
}
