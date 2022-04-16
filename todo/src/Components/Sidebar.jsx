import { Profile } from "./Profile";
import { TagStatsistics } from "./TagStatistics";
export const SideBar = ({ token, username, todos }) => {
  return (
    <div>
      <Profile token={token} username={username} />
      <hr />
      <TagStatsistics todos={todos} />
    </div>
  );
};
