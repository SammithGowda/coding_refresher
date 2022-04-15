import "./Home.css";
import { useSelector } from "react-redux";
import { Profile } from "./Profile";
export const Home = () => {
  const { token, username } = useSelector((state) => state.login);
  //   console.log(token.token);
  return (
    <div>
      <div className="constianer">
        <div className="grid1">
          <Profile token={token} username={username} />
        </div>
        <div className="grid2">midd</div>

        <div className="grid3">last mid</div>

        <div className="grid4"> last lats mid</div>
      </div>
    </div>
  );
};
