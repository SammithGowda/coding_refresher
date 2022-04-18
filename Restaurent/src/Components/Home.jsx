import axios from "axios";
import { useEffect, useState } from "react";
import "../Style/Home.css";
export const Home = () => {
  const [page, setPage] = useState(1);

  const [restaurents_data, setRestaurents_data] = useState([]);
  const [formdata, setFormdata] = useState({
    name: "",
    categories: "",
    payment: "",
    image: "",
    cost_for_one: "",
    min: "",
    max: "",
    Rating: "",
    vote: "",
    review: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurants?_limit=5&_page=${page}`)
      .then((res) => {
        setRestaurents_data(res.data);
      });
  }, [page]);

  const ascending = () => {
    axios
      .get(`http://localhost:8080/restaurants?_sort=cost_for_one&_order=asc`)
      .then((res) => {
        setRestaurents_data(res.data);
      });
  };
  const decending = () => {
    axios
      .get(`http://localhost:8080/restaurants?_sort=cost_for_one&_order=desc`)
      .then((res) => {
        setRestaurents_data(res.data);
      });
  };

  const onestar = () => {
    axios
      .get(`http://localhost:8080/restaurants?Rating_gte=1&Rating_lte=1.9`)
      .then((res) => {
        setRestaurents_data(res.data);
      });
  };
  const twostar = () => {
    axios
      .get(`http://localhost:8080/restaurants?Rating_gte=2&Rating_lte=2.9`)
      .then((res) => {
        setRestaurents_data(res.data);
      });
  };
  const threestar = () => {
    axios
      .get(`http://localhost:8080/restaurants?Rating_gte=3&Rating_lte=3.9`)
      .then((res) => {
        setRestaurents_data(res.data);
      });
  };
  const fourstar = () => {
    axios
      .get(`http://localhost:8080/restaurants?Rating_gte=4&Rating_lte=4.9`)
      .then((res) => {
        setRestaurents_data(res.data);
      });
  };
  const cashonly = () => {
    axios.get(`http://localhost:8080/restaurants?payment=Cash`).then((res) => {
      setRestaurents_data(res.data);
    });
  };
  const cardonly = () => {
    axios.get(`http://localhost:8080/restaurants?payment=Card`).then((res) => {
      setRestaurents_data(res.data);
    });
  };
  const Bothcash_card = () => {
    axios
      .get(`http://localhost:8080/restaurants?payment=Cash_And_Card`)
      .then((res) => {
        setRestaurents_data(res.data);
      });
  };
  const eventhandler = (e) => {
    let { id, value } = e.target;
    setFormdata((pra) => ({ ...pra, [id]: value }));
  };
  const eventformhandlechnager = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/restaurants`, formdata).then(() => {
      alert("done");
    });
  };

  return (
    <>
      <div className="functions_div">
        <button
          onClick={() => {
            onestar();
          }}
        >
          1 star
        </button>
        <button
          onClick={() => {
            twostar();
          }}
        >
          2 star
        </button>
        <button
          onClick={() => {
            threestar();
          }}
        >
          3 star
        </button>
        <button
          onClick={() => {
            fourstar();
          }}
        >
          4 star
        </button>
        <div className="button_sort">
          <button
            onClick={() => {
              decending();
            }}
          >
            high to low
          </button>
          <button
            onClick={() => {
              ascending();
            }}
          >
            low to high
          </button>
        </div>
        <div className="button_sort">
          <button
            onClick={() => {
              cashonly();
            }}
          >
            cash{" "}
          </button>
          <button
            onClick={() => {
              cardonly();
            }}
          >
            Card
          </button>
          <button
            onClick={() => {
              Bothcash_card();
            }}
          >
            all
          </button>
        </div>
      </div>

      <div>
        <h3>Add restaurents</h3>
        <div>
          <form onSubmit={eventformhandlechnager}>
            <input
              type="text"
              placeholder="enter Resto name"
              onChange={eventhandler}
              id="name"
            />
            <input
              type="text"
              placeholder="enter categories"
              onChange={eventhandler}
              id="categories"
            />
            <input
              type="text"
              placeholder="enter payment method"
              onChange={eventhandler}
              id="payment"
            />
            <input
              type="text"
              placeholder="enter image"
              onChange={eventhandler}
              id="image"
            />
            <input
              type="text"
              placeholder="enter cost_for_two"
              onChange={eventhandler}
              id="cost_for_one"
            />
            <input
              type="text"
              placeholder="enter minmum price"
              onChange={eventhandler}
              id="min"
            />
            <input
              type="text"
              placeholder="enter maxmum price"
              onChange={eventhandler}
              id="max"
            />
            <input
              type="text"
              placeholder="enter Rating"
              onChange={eventhandler}
              id="Rating"
            />
            <input
              type="text"
              placeholder="enter vote"
              onChange={eventhandler}
              id="vote"
            />
            <input
              type="text"
              placeholder="enter review"
              onChange={eventhandler}
              id="review"
            />
            <input type="submit" value={"submit"} />
          </form>
        </div>
        <div>
          {restaurents_data.map((el) => (
            <div key={el.id} className="main_item_div">
              <div className="image_div">
                <img src={el.image} width={"100%"} height={"100%"} alt="" />
              </div>
              <div className="info_div">
                <h4>{el.name}</h4>
                <h4>{el.categories}</h4>
                <p>cost_of_two:₹ {el.cost_for_one}</p>
                <p>payment method: {el.payment}</p>
              </div>
              <div className="rating_div">
                <button>{el.Rating}</button>
                <p>votes {el.vote}</p>
                <p>Review {el.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Next
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          pre
        </button>
      </div>
    </>
  );
};
