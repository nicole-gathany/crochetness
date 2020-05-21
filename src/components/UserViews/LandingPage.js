import React from "react";
import AboutStore from "./AboutMyStore"
import ProductPreview from "./ProductsPreview";
import ContactPage from "./Contact"
import ShopperReviews from "./ShopperReviews";
import GreenSkirt from "../../images/green_skirt.jpg";
import StorePage from "./Shopping/StorePage"

class LandingPage extends React.Component{
constructor(props){
    super(props);
    this.handleShopping=this.handleShopping.bind(this);
    this.state = {toShopping: false}
}

handleShopping(){
    console.log("Handle Shopping button works in theory");
    this.setState({ toShopping: true})
}

    render(){
        const shopping = this.state.toShopping;
        let view;
        if(shopping===false){
            view = [<AboutStore></AboutStore>, <ProductPreview></ProductPreview>,  <ContactPage></ContactPage>, <ShopperReviews></ShopperReviews>]
         
        } else if(shopping===true){
            view = <StorePage></StorePage>
        }

        return <div className="landing-page">
            <h1>Crochet-ness</h1>
            <button onClick={this.handleShopping}>shopping</button>
           
             
          {view}
         
        </div>
    }
}

export default LandingPage;