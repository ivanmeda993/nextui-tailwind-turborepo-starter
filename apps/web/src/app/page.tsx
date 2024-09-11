import { Button } from "@nextui-org/react";
import { Card } from "@repo/ui/card";
import { Example } from "@repo/ui/example";
import { ThemeSwitch } from "@repo/ui/components/theme-switch";

export default function Page(): JSX.Element {
  return (
    <main className="w-full ">
      <div className=" flex flex-col items-center justify-center gap-12">
        <Example />
        <ThemeSwitch />
        <Button variant="bordered" color="primary">
          test
        </Button>
        <Card title="test" href="/test">
          test
        </Card>
      </div>
    </main>
  );
}
