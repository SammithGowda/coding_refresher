import { useEffect, useReducer, useState } from "react";
import "./Todocreate.css";
import { gettododata } from "../Redux/Todo/Action";
import { useDispatch, useSelector } from "react-redux";
const initstate = {
  title: "",
  description: "",
  subtasck: [],
  status: "",
  tags: { offical: false, Personal: false, Other: false },
  date: "",
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE_TITLE":
      return { ...state, title: payload };
    case "UPDATE_DESCRIPTION":
      return { ...state, description: payload };

    case "UPDATE_STATUS":
      return { ...state, status: payload };

    case "UPDATE_TAGS":
      return { ...state, tags: { ...state.tages, ...payload } };

    case "UPDATE_DATE":
      return { ...state, date: payload };
    case "ADD_SUBTASK":
      return { ...state, subtasck: [...state.subtasck, payload] };
    case "TOGGLE_STATUS":
      const subtaskaftertoggle = state.subtasck.map((el) =>
        el.id === payload.id ? { ...el, subtaskinput: payload.status } : el
      );
      return { ...state, subtasck: subtaskaftertoggle };

    case "DELETE_TASK":
      const subtaskafterdelete = state.subtasck.filter(
        (el) => el.id !== payload
      );
      return { ...state, subtasck: subtaskafterdelete };
    default:
      throw new Error("wrong in locar reducer");
  }
};

export const TodoCreate = () => {
  const [state, dispatch] = useReducer(reducer, initstate);
  const rduxdispatch = useDispatch();
  const [subtaskinput, setSubtaskinput] = useState("");
  const { title, description, subtasck, status, tags, date } = state;
  const { offical, Personal, Other } = tags;
  const { token, username } = useSelector((state) => state.login);
  // console.log(token, username);
  const [userinfo, setUserinfo] = useState({});

  const createfomr = () => {
    const details = { ...state };
    fetch(" http://localhost:8080/Todos", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => rduxdispatch(gettododata));
  };

  useEffect(() => {
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setUserinfo(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main_container">
      <div className="prfile">
        <div>
          <p>name:{userinfo.name}</p>
          <p>email:{userinfo.email}</p>
          <p>username:{userinfo.username}</p>
          <p>mobile:{userinfo.mobile}</p>
          <p>discrip{userinfo.description}</p>
        </div>
      </div>
      <div className="title">
        <div className="input_title">
          <input
            type="text"
            placeholder="Enter Title task"
            name=""
            id=""
            value={title}
            onChange={(e) =>
              dispatch({ type: "UPDATE_TITLE", payload: e.target.value })
            }
          />
        </div>

        <div className="input_title">
          <input
            type="text"
            placeholder="Enter Title Discription"
            value={description}
            onChange={(e) =>
              dispatch({ type: "UPDATE_DESCRIPTION", payload: e.target.value })
            }
          />
        </div>
        <div className="radio">
          <input
            type="radio"
            checked={status === "Todo"}
            onChange={(e) =>
              dispatch({ type: "UPDATE_STATUS", payload: "Todo" })
            }
          />
          <label>Todo</label>
          <br />
          <input
            type="radio"
            checked={status === "inProgress"}
            onChange={(e) =>
              dispatch({ type: "UPDATE_STATUS", payload: "inProgress" })
            }
          />
          <label>in Progress</label>
          <br />
          <input
            type="radio"
            checked={status === "Done"}
            onChange={(e) =>
              dispatch({ type: "UPDATE_STATUS", payload: "Done" })
            }
          />
          <label>Done</label>
        </div>
        <div className="chechboxdiv">
          <h3>Tage(multiple possibel)</h3>
          <input
            type="checkbox"
            checked={offical}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_TAGS",
                payload: { offical: e.target.checked },
              });
            }}
          />
          <label>Office</label>
          <br />
          <input
            type="checkbox"
            checked={Personal}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_TAGS",
                payload: { Personal: e.target.checked },
              });
            }}
          />
          <label>Personal</label>
          <br />
          <input
            type="checkbox"
            checked={Other}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_TAGS",
                payload: { Other: e.target.checked },
              });
            }}
          />
          <label>Others</label>
        </div>
      </div>

      {/* subtask */}
      <div className="subtask">
        <h4>Add subtask</h4>
        <div className="add_btn_div">
          <div>
            <input
              type="text"
              placeholder="add subtask"
              value={subtaskinput}
              onChange={(e) => setSubtaskinput(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={() => {
                const payload = {
                  id: Math.random(),
                  Title: subtaskinput,
                  subtaskinput: false,
                };
                dispatch({ type: "ADD_SUBTASK", payload });
              }}
            >
              ADD
            </button>
          </div>
        </div>
        <div className="diplay_tasksub">
          {subtasck.map((el) => (
            <div key={el.id}>
              <div>
                <input
                  type="checkbox"
                  checked={el.subtaskinput}
                  onChange={(e) =>
                    dispatch({
                      type: "TOGGLE_STATUS",
                      payload: { id: el.id, status: e.target.checked },
                    })
                  }
                />
              </div>
              <div>{el.Title}</div>
              <div>
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_TASK", payload: el.id })
                  }
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* date  */}
      <div className="date">
        <div>
          <input
            type="date"
            value={date}
            onChange={(e) =>
              dispatch({ type: "UPDATE_DATE", payload: e.target.value })
            }
          />
        </div>
        <div>
          <button onClick={createfomr}>Create Task</button>
        </div>
      </div>
    </div>
  );
};
