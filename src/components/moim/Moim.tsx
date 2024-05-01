import { FC } from "react";

type MoimProps = {
  title: string;
  startDate: string;
  endDate: string;
};

const Moim: FC<MoimProps> = ({ title, startDate, endDate }) => {
  return (
    <div className="flex gap-2 border p-2 rounded-md">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>
          {startDate} ~ {endDate}
        </p>
      </div>
    </div>
  );
};

export default Moim;
