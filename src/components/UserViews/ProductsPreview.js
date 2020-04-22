import React from "react";
import BlackDress from "../../images/black_dress.jpeg";
import BlueSweater from "../../images/blue_sweater.jpeg";
import PinkBlue from "../../images/pink_blue.jpg"
import GreenSkirt from "../../images/green_skirt.jpg"



class ProductPreview extends React.Component{
render(){
    return <div>

        <h1>This is the Product Preview Page</h1>
        <img src={BlackDress}></img>
        {/* <img src={BlueSweater}></img>
        <img src={PinkBlue}></img>
        <img src={GreenSkirt}></img> */}
        
    </div>
}

}

export default ProductPreview;