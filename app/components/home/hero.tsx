import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Chicken from "./chicken";
import Section from "./section";

const red = "#A41D21";
const yellow = "#FFD200";

const Hero = () => {
  const router = useRouter();
  return (
    <Section className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <div className="max-w-xl mx-auto">
            <Chicken />
          </div>
          <h1 className="mt-6 max-w-[20ch] text-4xl sm:text-5xl font-bold leading-[1.2] tracking-tight">
            <span className="line-through">可能？</span> 让不可能变为可能
          </h1>
          <h2 className="mt-4 max-w-[60ch] text-xl font-semibold">
            欢迎来到 <span style={{ color: red }}>神圣</span>{
              " "
            }
            <span style={{ color: yellow }}>大旺</span> 帝国旺学！
          </h2>
          <p className="mt-2 max-w-[60ch] xs:text-lg">
            我们理解当你收到大学拒绝信时的感受，这就是为什么我们不会说："很遗憾我们无法为你提供录取。"
          </p>
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex-col flex sm:flex-row gap-4 sm:justify-center">
              <Button
                size="lg"
                className="w-48 sm:w-auto rounded-full text-base"
                onClick={() => router.push("/diploma")}
              >
                毕业证书
                <ArrowUpLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-48 sm:w-auto rounded-full text-base"
                onClick={() => router.push("/admission")}
              >
                录取申请
                <ArrowUpRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="font-mono text-xs text-center">
              请在继续之前阅读我们的{
                " "
              }
              <Link className="font-bold underline" href="/pages/disclaimer">
                免责声明
              </Link>。
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;