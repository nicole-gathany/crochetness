import React from "react";
import BlackDress from "../../../images/black_dress.jpeg";
import BlueSweater from "../../../images/blue_sweater.jpeg";

import GreenBlack from "../../../images/green_black.jpg";
import PinkBlue from "../../../images/pink_blue.jpg";

import GreenSkirt from "../../../images/green_skirt.jpg";

import RedDress from "../../../images/red.jpg";
import MagentaDress from "../../../images/magenta_dress.jpeg";
import ReactDom from "react-dom";

import ProductPage from "./ProductPage"

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
        description: "great, big blue sweater for the winter",
        clicks: 0
      },
      {
        outfit: "black dress",
        outfit_type: "dress",
        source: BlackDress,
        main_color: "black",
        description: "great dress for coachella (or coachella inside rn)",
        clicks: 0
      },
      {
        outfit: "green and black two piece",
        outfit_type: "two piece",
        source: GreenBlack,
        main_color: ["green", "black"],
        description: "two piece for fun",
        clicks:0
      },
      {
        outfit: "pink and blue two piece",
        outfit_type: "two piece",
        source: PinkBlue,
        main_color: "blue",
        description: "great, big blue sweater for the winter",
        clicks: 0 
      },
      {
        outfit: "green skirt",
        outfit_type: "skirt",
        source: GreenSkirt,
        main_color: "green",
        description: "green skirt",
        clicks: 0
      },
      {
        outfit: "red dress",
        outfit_type: "dress",
        source: RedDress,
        main_color: "red",
        description:
          "nice red dress for your next #norushchallenge or whatever tiktok challenge you do",
        clicks: 0
      },
      {
        outfit: "magenta dress",
        outfit_type: "dress",
        source: MagentaDress,
        main_color: "magenta",
        description: "magenta dress so you can do the lord's werk",
        clicks: 0
      }
    ];
    this.state = {isProduct: false}
    this.toProductPage = this.toProductPage.bind(this);
    this.toClicksCounter = this.toProductPage.bind(this);
  }

  toProductPage(e, value){
    //filter so that there is only one product
    //and shows the product page 
    e.preventDefault();
    value.clicks++;
    console.log(value.clicks)
    console.log(value.source)
    this.setState({isProduct: true})
  }

  clicksCounter(e, value){
    //this.products is the array
    e.preventDefault();
    console.log(value);
    value.clicks++;
    console.log(value.clicks)
  }

  //i think at this point, i really need a backend
  render() {
    const isProduct = this.state.isProduct;
    let items = this.products.map(product => (
      <div>
        <div className="grid-container">
          <img src={product.source} className="grid-item"></img>
        </div>
        <button onClick={e => this.clicksCounter(e, product)}>test button</button>
        <button onClick={e => this.toProductPage(e, product)}>View this item</button>
        <button onClick={e =>this.toProductPage(e, product)}>Add to Cart</button>
        <button className="favorite-button">♡</button>
      </div>
     
    )); 

        //  const oneItem = items.filter((item, index)=>)
    


    let view=[];
        if(isProduct===false){
            view.push(items);
            console.log(view)
        } else if(isProduct===true){
          
            view.push(<ProductPage></ProductPage>)
            console.log(view)
        }
  

    return (
      <div className="store-page">
        <h1>this is the store page</h1>

        {view}
      </div>
    );
  }
}

export default StorePage;
