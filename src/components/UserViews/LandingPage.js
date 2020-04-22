import React from "react";
import AboutStore from "./AboutMyStore"
import ProductPreview from "./ProductsPreview";
import ContactPage from "./Contact"
import ShopperReviews from "./ShopperReviews";

class LandingPage extends React.Component{
    render(){
        return <div>
            <h1>This is the landing page</h1>
          <AboutStore></AboutStore>
          <ProductPreview></ProductPreview>
          <ContactPage></ContactPage>
          <ShopperReviews></ShopperReviews>
        </div>
    }
}

export default LandingPage;