import React from "react";
import "./App.css";
import UserView from "./components/UserView";
import AdminView from "./components/AdminView";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserButton = this.handleUserButton.bind(this);
    this.handleAdminButton = this.handleAdminButton.bind(this);
    this.state = { isAdmin: false };
  }

  handleUserButton() {
    console.log("User View Button works in theory")
    this.setState({ isAdmin: false });
  }

  handleAdminButton() {
    console.log("Admin View Button works in theory")
    this.setState({ isAdmin: true });
  }
  render() {
    const isAdmin = this.state.isAdmin;
    let view;
    if (isAdmin === false) {
      view = <UserView></UserView>;
    } else if (isAdmin === true) {
      view = <AdminView></AdminView>;
    }

    return (
      <div className="App">
        <header>
          <button onClick={this.handleUserButton}>User View</button>
          <button onClick={this.handleAdminButton}>Admin View</button>
          {view}
        </header>
      </div>
    );
  }
}

export default App;
