import { Button } from "@nextui-org/react";

interface ExampleProps {}

export const Example = ({}: ExampleProps) => {
  return (
    <div className="text-2xl flex flex-col gap-2 items-center justify-center">
      test
      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        Button
      </Button>
    </div>
  );
};
