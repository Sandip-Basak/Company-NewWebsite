import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
export const Process = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

