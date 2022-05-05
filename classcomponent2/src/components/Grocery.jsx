import React from "react";
import axios from "axios";

export class Grocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Itemname: "",
      Itemprice: "",
      Itemqty: "",
      Itemdescrp: "",
      Itemimg: "",
      Data: [],
      Page: 1,
    };
    this.handlechangename = this.handlechangename.bind(this);
    this.handlechangeprice = this.handlechangeprice.bind(this);
    this.handlechangeqty = this.handlechangeqty.bind(this);
    this.handlechangedesc = this.handlechangedesc.bind(this);
    this.handlechangeimg = this.handlechangeimg.bind(this);
  }

  handlechangename(e) {
    this.setState({
      Itemname: e.target.value,
    });
  }

  handlechangeprice(e) {
    this.setState({
      Itemprice: e.target.value,
    });
  }

  handlechangeqty(e) {
    this.setState({
      Itemqty: e.target.value,
    });
  }
  handlechangedesc(e) {
    this.setState({
      Itemdescrp: e.target.value,
    });
  }
  handlechangeimg(e) {
    this.setState({
      Itemimg: e.target.value,
    });
  }
  handlechnageadd(e) {
    const { Itemname, Itemprice, Itemqty, Itemdescrp, Itemimg } = this.state;
    const payload = {
      Title: Itemname,
      Price: Itemprice,
      Quantity: Itemqty,
      Description: Itemdescrp,
      Image: Itemimg,
    };
    axios.post("http://localhost:4444/Grocery", payload).then((res) => {
      alert("done");
      this.getdata();
    });
  }
  componentDidMount() {
    this.getdata();
  }

  getdata() {
    const { Page } = this.state;
    return axios
      .get("http://localhost:4444/Grocery", {
        params: {
          _limit: 2,
          _page: Page,
        },
      })
      .then((res) => this.setState({ Data: res.data }));
  }
  handledelete(id) {
    axios
      .delete(`http://localhost:4444/Grocery/${id}`)
      .then((res) => this.getdata());
  }

  handlechnagepage(vale) {
    this.setState({ Page: this.state.Page + vale });
  }

  componentDidUpdate(preProps, prevState) {
    if (prevState.Page !== this.state.Page) {
      this.getdata();
    }
  }
  // handlepatch(id) {
  //   let arg = {
  //     Title: "sammith patch",
  //     Price: "420",
  //   };
  //   axios
  //     .patch(`http://localhost:4444/Grocery/${id}`, arg)
  //     .then((res) => this.getdata());
  // }
  render() {
    const { Itemname, Itemprice, Itemqty, Itemdescrp, Itemimg, Data } =
      this.state;

    return (
      <div>
        <h1>ADD Items</h1>
        <div>
          <input
            type="text"
            value={Itemname}
            onChange={this.handlechangename}
            placeholder="Enter item name"
          />
          <input
            type="text"
            value={Itemprice}
            onChange={this.handlechangeprice}
            placeholder="Enter item price"
          />
          <input
            value={Itemqty}
            onChange={this.handlechangeqty}
            type="text"
            placeholder="Enter item quantity"
          />
          <input
            value={Itemdescrp}
            onChange={this.handlechangedesc}
            type="text"
            placeholder="Enter item description"
          />
          <input
            value={Itemimg}
            onChange={this.handlechangeimg}
            type="text"
            placeholder="Add image"
          />
          <button onClick={this.handlechnageadd.bind(this)}>ADD</button>
        </div>
        <div className="item_div">
          <table width={"100%"}>
            <thead>
              <tr>
                <td>Name </td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Description</td>
                <td>Image</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {Data.map((el) => (
                <tr key={el.id}>
                  <td>{el.Title}</td>
                  <td>{el.Price} </td>
                  <td>{el.Quantity} </td>
                  <td>{el.Description} </td>
                  <td>
                    {" "}
                    <img src={el.Image} alt="" width={"50%"} height={"100px"} />
                  </td>
                  <td>
                    <button onClick={() => this.handledelete(el.id)}>
                      Delete
                    </button>
                  </td>
                  {/* <td>
                    <button onClick={() => this.handlepatch(el.id)}>
                      Patch
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => this.handlechnagepage(-1)}>Pre</button>
          <button onClick={() => this.handlechnagepage(1)}>Next</button>
        </div>
      </div>
    );
  }
}
