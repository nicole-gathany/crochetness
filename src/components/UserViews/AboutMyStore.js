import React from "react";
import BlueSweater from "../../images/blue_sweater.jpeg"

class AboutMyStore extends React.Component{
    render(){
        return <div>

            <h1> This is About my store</h1>
            <img src={BlueSweater}></img>
        </div>
    }
}

export default AboutMyStore;