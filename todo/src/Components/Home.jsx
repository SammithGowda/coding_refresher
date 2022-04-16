import "./Home.css";
import { useSelector } from "react-redux";
import { SideBar } from "./Sidebar";
export const Home = () => {
  const { token, username } = useSelector((state) => state.login);
  const { todos } = useSelector((state) => state.todo);
  // console.log(todos);
  return (
    <div>
      <div className="constianer">
        <div className="grid1">
          <div>
            <SideBar token={token} username={username} todos={todos} />
          </div>
        </div>
        <div className="grid2">midd</div>

        <div className="grid3">last mid</div>

        <div className="grid4"> last lats mid</div>
      </div>
    </div>
  );
};
