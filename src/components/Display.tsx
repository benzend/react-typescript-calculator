import { Typography } from "@material-ui/core";

import { CurrentDisplayLayout } from "../layouts/CurrentDisplayLayout";
import { CurrentTotalLayout } from "../layouts/CurrentTotalLayout";
import { TotalHistoryLayout } from "../layouts/TotalHistoryLayout";

interface Props {
  currentDisplay: string[];
  totalHistory: string[];
  reversedHistory: string[];
  currentTotal: string;
}

const Display = ({
  currentDisplay,
  totalHistory,
  reversedHistory,
  currentTotal,
}: Props) => {
  return (
    <div>
      <CurrentDisplayLayout>
        <Typography variant="h6" color="textPrimary">
          {currentDisplay}
        </Typography>
      </CurrentDisplayLayout>
      <CurrentTotalLayout currentTotal={currentTotal}>
        <Typography variant="h6" color="textPrimary">
          {currentTotal}
        </Typography>
      </CurrentTotalLayout>
      <TotalHistoryLayout totalHistory={totalHistory}>
        {reversedHistory.map((hist, i) => (
          // change index
          <Typography
            key={hist + " " + currentDisplay + i}
            variant="h6"
            color="textSecondary"
          >
            {hist}
          </Typography>
        ))}
      </TotalHistoryLayout>
    </div>
  );
};

export default Display;
