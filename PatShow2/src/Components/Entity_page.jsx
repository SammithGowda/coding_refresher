import axios from "axios";
import "../App.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
export const Entity = () => {
  const [udata, setUdata] = useState([]);
  const { id } = useParams();
  const [imga, setImga] = useState("");
  useEffect(() => {
    getdata();
    setImg();
  }, []);

  const getdata = () => {
    axios
      .get(`https://possible-hospitable-transport.glitch.me/pets/${id}`)
      .then((res) => {
        setUdata(res.data.subarr);
      });
  };
  const setImg = () => {
    fetch("https://dog.ceo/api/breeds/image/random ")
      .then((res) => res.json())
      .then((res) => setImga(res.message));
  };

  return (
    <div>
      <div className="table_div_another">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <td>About Petservice</td>
              <td>Number of pets that will be watched at one time</td>
              <td>Accepted Pet Types</td>
              <td>Accepted Pet size In Kgs</td>
              <td>The number of potty breaks provided per day</td>
              <td>The number of walks provided per day</td>
              <td>The type of home I stay in.</td>
              <td>My outdoor area size.</td>
              <td>Emergency transport</td>
            </tr>
          </thead>
          <tbody>
            {udata.map((e) => (
              <tr key={e}>
                <td>{e.summary}</td>
                <td>{e.number_of_pet}</td>
                <td>{e.type_of_pet}</td>
                <td>{e.pet_size}</td>
                <td>{e.potty_breaks}</td>
                <td>{e.walks}</td>
                <td>{e.type_home}</td>
                <td>{e.outdoor}</td>
                <td>{e.emergency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dog_img">
        <img src={imga} alt="" style={{ width: "100%" }} />
      </div>
    </div>
  );
};
