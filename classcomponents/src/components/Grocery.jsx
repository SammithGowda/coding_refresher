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
    };
    this.handlechange = this.handlechange.bind(this);
  }

  handlechange(e) {
    console.log(this);
    this.setState({
      Itemname: e.target.value,
      Itemprice: e.target.value,
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
    // axios.post("http://localhost:4444/Grocery",payload)
    // .then((res)=>{

    // })
    console.log(payload);
  }

  render() {
    const { Itemname, Itemprice, Itemqty, Itemdescrp, Itemimg } = this.state;
    // console.log(this.state.Itemimg);

    return (
      <div>
        <h1>ADD Items</h1>
        <div>
          <input
            type="text"
            value={Itemname}
            onChange={this.handlechange}
            placeholder="Enter item name"
          />
          <input
            type="text"
            value={Itemprice}
            onChange={this.handlechange}
            placeholder="Enter item price"
          />
          <input type="text" placeholder="Enter item quantity" />
          <input type="text" placeholder="Enter item description" />
          <input type="text" placeholder="Add image" />
          <button onClick={this.handlechnageadd.bind(this)}>ADD</button>
        </div>
      </div>
    );
  }
}
