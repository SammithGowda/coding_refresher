import { RegistartionContext } from "../Context/RegistartionContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
export const Name_info = () => {
  const { Name, Age, DOB, dispatch } = useContext(RegistartionContext);

  const navigate = useNavigate();
  return (
    <>
      <div className="add_div">
        <h5>Enter Your Information</h5>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => dispatch({ type: "Name", payload: e.target.value })}
          value={Name}
        />
        <input
          type="text"
          placeholder="Enter Age"
          onChange={(e) => dispatch({ type: "Age", payload: e.target.value })}
          value={Age}
        />
        <input
          type="date"
          placeholder="Enter BOD"
          onChange={(e) => dispatch({ type: "DOB", payload: e.target.value })}
          value={DOB}
        />
        <div>
          <button
            disabled={!Name || !Age || !DOB}
            onClick={() => {
              navigate("/registration/two");
            }}
          >
            NEXT
          </button>
        </div>
      </div>
    </>
  );
};
