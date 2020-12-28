import { Typography } from "@material-ui/core";

import { CurrentDisplayLayout } from "../layouts/CurrentDisplayLayout";
import { CurrentTotalLayout } from "../layouts/CurrentTotalLayout";
import { TotalHistoryLayout } from "../layouts/TotalHistoryLayout";

interface Props {
  currentDisplay: string[];
  totalHistory: string[];
  currentTotal: string;
}

const Display = ({ currentDisplay, totalHistory, currentTotal }: Props) => {
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
      <TotalHistoryLayout>
        <h3>{totalHistory}</h3>
      </TotalHistoryLayout>
    </div>
  );
};

export default Display;
