import { useContext } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { RegistartionContext } from "../Context/RegistartionContext";

export const Address_info = () => {
  const navigate = useNavigate();
  const { Name, Age, DOB, dispatch, State, Address, Pin } =
    useContext(RegistartionContext);

  if (Name.length === 0 || Age.length === 0 || DOB.length === 0) {
    alert("fill input field pls");
    return <Navigate to="/registration/one" />;
  }
  const fomrdata = {
    name: Name,
    age: Age,
    dob: DOB,
    state: State,
    address: Address,
    pin: Pin,
  };
  const reuest = () => {
    axios.post(" http://localhost:8080/Userdata", fomrdata).then((res) => {
      alert("done");
      navigate("/");
    });
  };
  return (
    <>
      <div className="add_div">
        <h1>Enter Your Address</h1>
        <input
          type="text"
          placeholder="Enter State of residence "
          value={State}
          onChange={(e) => {
            dispatch({ type: "State", payload: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Enter Address"
          value={Address}
          onChange={(e) => {
            dispatch({ type: "Address", payload: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Enter Pin"
          value={Pin}
          onChange={(e) => {
            dispatch({ type: "Pin", payload: e.target.value });
          }}
        />
        <div>
          <button
            disabled={!State || !Address || !Pin}
            onClick={() => {
              reuest();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
