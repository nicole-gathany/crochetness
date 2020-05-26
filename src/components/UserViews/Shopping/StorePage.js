import React from "react";
import BlackDress from "../../../images/black_dress.jpeg";
import BlueSweater from "../../../images/blue_sweater.jpeg";

import GreenBlack from "../../../images/green_black.jpg";
import PinkBlue from "../../../images/pink_blue.jpg";

import GreenSkirt from "../../../images/green_skirt.jpg";

import RedDress from "../../../images/red.jpg";
import MagentaDress from "../../../images/magenta_dress.jpeg";
import ReactDom from "react-dom";

//i think this is what i want in my storage array
//[{outfit: "blue sweater", "outfit type": "sweater", "source": {BlueSweater}, "main_color": "blue, ""colors": {blue, green,}, "description": "blue ass sweater" }]
class StorePage extends React.Component {
  constructor(props) {
    super(props);
    this.products = [
      {
        outfit: "blue sweater",
        outfit_type: "sweater",
        source: BlueSweater,
        main_color: "blue",
        description: "great, big blue sweater for the winter"
      },
      {
        outfit: "black dress",
        outfit_type: "dress",
        source: BlackDress,
        main_color: "black",
        description: "great dress for coachella (or coachella inside rn)"
      },
      {
        outfit: "green and black two piece",
        outfit_type: "two piece",
        source: GreenBlack,
        main_color: ["green", "black"],
        description: "two piece for fun"
      },
      {
        outfit: "pink and blue two piece",
        outfit_type: "two piece",
        source: PinkBlue,
        main_color: "blue",
        description: "great, big blue sweater for the winter"
      },
      {
        outfit: "green skirt",
        outfit_type: "skirt",
        source: GreenSkirt,
        main_color: "green skirt",
        description: "green skirt"
      },
      {
        outfit: "red dress",
        outfit_type: "dress",
        source: RedDress,
        main_color: "red",
        description:
          "nice red dress for your next #norushchallenge or whatever tiktok challenge you do"
      },
      {
        outfit: "magenta dress",
        outfit_type: "dress",
        source: MagentaDress,
        main_color: "magenta",
        description: "magenta dress so you can do the lord's werk"
      }
    ];
  }

  render() {
    const items = this.products.map(product => (
      <div>
        <div className="grid-container">
          <img src={product.source} className="grid-item"></img>
        </div>
        <button>View this item</button>
        <button>Add to Cart</button>
        <button>♡</button>
      </div>
    ));

    return (
      <div className="store-page">
        <h1>this is the store page</h1>

        {items}
      </div>
    );
  }
}

export default StorePage;
