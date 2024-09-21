import { formatDistanceToNow, parseISO } from "date-fns";

const TimeAgo = ({ timeTamp }) => {
  let timeAgo = "";
  if (timeTamp) {
    const date = parseISO(timeTamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timeTamp}>
      &nbsp;<i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
