import React from 'react';
// import { ReactComponent } from '*.svg';
import LandingPage from "./UserViews/LandingPage"


//things one should be able to do on the UserView:
//1. see pictures
//2. favorite pictures
//3. pick my (waist, hips, bust, and length)

class UserView extends React.Component {
render(){
    return <div>
        <h1>This is the User View</h1>
        <LandingPage></LandingPage>
    </div>
}
}

export default UserView;