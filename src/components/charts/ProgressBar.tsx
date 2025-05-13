import * as React from "react";
import * as Progress from "@radix-ui/react-progress";

const ProgressBar = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root
      className="bg-primary-100 relative h-2 w-full transform-gpu overflow-hidden rounded-full"
      value={progress}
    >
      <Progress.Indicator
        className="bg-primary-900 h-full w-full rounded-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65,_0,_0.35,_1)]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressBar;
