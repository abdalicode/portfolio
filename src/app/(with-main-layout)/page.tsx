import { Button } from "@/components/common/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="w-ful h-full flex items-center justify-center flex-col gap-6 flex-grow">
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I{"'"}m{" "}
        <span className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hakan
        </span>
        , Developer & Creator.
      </h1>
      <Button size="icon">
        <ChevronDownIcon />
      </Button>
    </main>
  );
}
