import axios from "axios";
import { useEffect, useState } from "react";
export const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    axios.get("http://localhost:8080/Userdata").then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  };
  // console.log(users, "usr");
  return (
    <>
      <div className="trdiv">
        <div>
          <h1>User Info</h1>
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>AGE</th>
                <th>DATE_OF_BIRTH</th>
                <th>ADDRESS</th>
                <th>STATE</th>
                <th>PIN</th>
              </tr>
            </thead>
            <tbody>
              {users.map((el) => (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <td>{el.age} </td>
                  <td>{el.dob} </td>
                  <td>{el.address} </td>
                  <td>{el.state} </td>
                  <td>{el.pin} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
