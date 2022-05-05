import React from "react";
import axios from "axios";
import res from "express/lib/response";
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
    };
    this.handlechangename = this.handlechangename.bind(this);
    this.handlechangeprice = this.handlechangeprice.bind(this);
    this.handlechangeqty = this.handlechangeqty.bind(this);
    this.handlechangedesc = this.handlechangedesc.bind(this);
    this.handlechangeimg = this.handlechangeimg.bind(this);
  }

  handlechangename(e) {
    // console.log(this);
    this.setState({
      Itemname: e.target.value,
    });
  }

  handlechangeprice(e) {
    // console.log(this);
    this.setState({
      Itemprice: e.target.value,
    });
  }

  handlechangeqty(e) {
    // console.log(this);
    this.setState({
      Itemqty: e.target.value,
    });
  }
  handlechangedesc(e) {
    // console.log(this);
    this.setState({
      Itemdescrp: e.target.value,
    });
  }
  handlechangeimg(e) {
    // console.log(this);
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
    });
  }
  componentDidMount() {
    axios
      .get("http://localhost:4444/Grocery")
      .then((res) => console.log(res.data));
  }

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
      </div>
    );
  }
}
