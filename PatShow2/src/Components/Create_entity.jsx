import axios from "axios";
import { useState } from "react";
import { useReducer } from "react";
import "../App.css";
const initstate = {
  name: "",
  city: "",
  address: "",
  capacity: "",
  cost_per_day: "",
  verified: "",
  rating: "",
  subarr: [],
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_NAME":
      return { ...state, name: payload };
    case "ADD_CITY":
      return { ...state, city: payload };
    case "ADD_ADDRESS":
      return { ...state, address: payload };
    case "ADD_CAPACITY":
      return { ...state, capacity: payload };
    case "ADD_COST_PER_DAY":
      return { ...state, cost_per_day: payload };
    case "ADD_VERIFIED":
      return { ...state, verified: payload };
    case "ADD_RATING":
      return { ...state, rating: payload };
    case "ADD_SUB_ARR":
      return { ...state, subarr: [...state.subarr, payload] };
    case "RESET_FORM":
      return { ...initstate };

    default:
      throw new Error("worng in local reducer");
  }
};
export const Createentity = () => {
  // const dispatch = useDispatch();
  const [state, dispatch] = useReducer(reducer, initstate);
  const {
    name,
    city,
    address,
    capacity,
    cost_per_day,
    rating,
    verified,
    subarr,
  } = state;
  // const [name, setName] = useState("");
  // const [city, setCity] = useState("");
  // const [address, setAddress] = useState("");
  // const [capacity, setCapacity] = useState("");
  // const [cost_per_day, setCost_per_day] = useState("");
  // const [verified, setVerified] = useState("");
  // const [rating, setRating] = useState("");
  // const [subarr, setSubarr] = useState([]);

  const [summary, setSummary] = useState("");
  const [number_of_pet, setNumber_of_pet] = useState("");
  const [type_of_pet, setType_of_pet] = useState("");
  const [pet_size, setPet_size] = useState("");
  const [potty_breaks, setPotty_breaks] = useState("");
  const [walks, setWalks] = useState("");
  const [type_home, setType_home] = useState("");
  const [outdoor, setOutdoor] = useState("");
  const [emergency, setEmergency] = useState("");
  const x = false;

  const createfomr = () => {
    const details = { ...state };
    axios.post("https://possible-hospitable-transport.glitch.me/pets", details);
    dispatch({ type: "RESET_FORM" });

    // console.log(details);
  };

  return (
    <div className="main_div_one">
      <div className="main_div">
        <div className="first_div">
          <h3>Enter details</h3>
          <label> Enter name</label>
          <br />
          <input
            type="text"
            placeholder="enter name"
            value={name}
            onChange={(e) =>
              dispatch({ type: "ADD_NAME", payload: e.target.value })
            }
          />{" "}
          <br />
          <label> Enter City</label>
          <br />
          <input
            type="text"
            placeholder="enter city"
            value={city}
            onChange={(e) =>
              dispatch({ type: "ADD_CITY", payload: e.target.value })
            }
          />{" "}
          <br />
          <label> Enter Address</label>
          <br />
          <input
            type="text"
            placeholder="enter address"
            value={address}
            onChange={(e) =>
              dispatch({ type: "ADD_ADDRESS", payload: e.target.value })
            }
          />{" "}
          <br />
          <label> Enter Capacity</label>
          <br />
          <input
            type="number"
            placeholder="enter capacity"
            value={capacity}
            onChange={(e) =>
              dispatch({ type: "ADD_CAPACITY", payload: e.target.value })
            }
          />{" "}
          <br />
          <label> Enter Cost per day</label>
          <br />
          <input
            type="text"
            placeholder="enter cost per day"
            value={cost_per_day}
            onChange={(e) =>
              dispatch({ type: "ADD_COST_PER_DAY", payload: e.target.value })
            }
          />{" "}
          <br />
          <label> Enter verified or not</label>
          <br />
          <input
            type="text"
            placeholder="enter verified"
            value={verified}
            onChange={(e) =>
              dispatch({ type: "ADD_VERIFIED", payload: e.target.value })
            }
          />{" "}
          <br />
          <label> Enter Ratings</label>
          <br />
          <input
            type="text"
            placeholder="enter Ratings"
            value={rating}
            onChange={(e) =>
              dispatch({ type: "ADD_RATING", payload: e.target.value })
            }
          />
        </div>
        <div className="second_div">
          <h3>Add pet house details</h3>
          <label> Write about Pets Services </label>
          <br />
          <input
            type="text"
            placeholder="Write About Pet service"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
          <br />
          <label>Mention How many pet Allowed</label>
          <br />
          <input
            type="text"
            placeholder="Enter Number of pet alowed"
            value={number_of_pet}
            onChange={(e) => setNumber_of_pet(e.target.value)}
          />
          <br />
          <label>Enter what type of pets (dog,cat,,) </label>
          <br />
          <input
            type="text"
            placeholder="Enter type of pet"
            value={type_of_pet}
            onChange={(e) => setType_of_pet(e.target.value)}
          />
          <br />
          <label> Enter Pet Weights allowed </label>
          <br />
          <input
            type="text"
            placeholder="Enter pet size alowed"
            value={pet_size}
            onChange={(e) => setPet_size(e.target.value)}
          />
          <br />
          <label> enter self-cleaning dog toilet </label>
          <br />
          <input
            type="text"
            placeholder="Enter potty breaks"
            value={potty_breaks}
            onChange={(e) => setPotty_breaks(e.target.value)}
          />
          <br />
          <label> enter Total number of walks per/ day </label>
          <br />
          <input
            type="text"
            placeholder="Enter Number of walks"
            value={walks}
            onChange={(e) => setWalks(e.target.value)}
          />
          <br />
          <label>The type of home you stay in</label>
          <br />
          <input
            type="text"
            placeholder="Enter type of home"
            value={type_home}
            onChange={(e) => setType_home(e.target.value)}
          />
          <br />
          <label>enter outdoor area size</label>
          <br />
          <input
            type="text"
            placeholder="Enter outdore type"
            value={outdoor}
            onChange={(e) => setOutdoor(e.target.value)}
          />
          <br />
          <label>enter Emergency transport if any</label>
          <br />
          <input
            placeholder="Enter emergency there or not"
            type="text"
            value={emergency}
            onChange={(e) => setEmergency(e.target.value)}
          />{" "}
          <br />
          <button
            className="add_but"
            onClick={() => {
              const payload = {
                summary: summary,
                number_of_pet: number_of_pet,
                type_of_pet: type_of_pet,
                pet_size: pet_size,
                potty_breaks: potty_breaks,
                walks: walks,
                type_home: type_home,
                outdoor: outdoor,
                emergency: emergency,
              };
              dispatch({ type: "ADD_SUB_ARR", payload });
              setSummary("");
              setNumber_of_pet("");
              setType_of_pet("");
              setPet_size("");
              setPotty_breaks("");
              setWalks(" ");
              setType_home("");
              setOutdoor("");
              setEmergency("");
            }}
          >
            Add
          </button>
        </div>
      </div>
      <button className="add_but" onClick={createfomr}>
        Submit form
      </button>
    </div>
  );
};
