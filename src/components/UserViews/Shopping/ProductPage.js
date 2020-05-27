import React from "react";

class ProductPage extends React.Component {
  render() {
    return (
      <div>
        <h>this is the product page</h>
        <p>Measurements</p>
        <form>
          <div className="measurement-form">
            <label>Waist</label>
            <input type="number"></input>
            <input type="radio"></input>
            <label>inches</label>
            <input type="radio"></input>
            <label>centimeters</label>
            <br></br>
          </div>

          <div className="measurement-form">
            <label>Bust</label>
            <input type="number"></input>
            <input type="radio"></input>
            <label>inches</label>
            <input type="radio"></input>
            <label>centimeters</label>
            <br></br>
          </div>

          <div className="measurement-form">
            <label>Hips</label>
            <input type="number"></input>
            <input type="radio"></input>
            <label>inches</label>
            <input type="radio"></input>
            <label>centimeters</label>
            <br></br>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductPage;
