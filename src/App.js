import "./styles.css";
import { Component } from "react";
import { receipt1, receipt2, receipt3 } from "./data";
import Receipt from "./components/Receipt";
class App extends Component {
  state = {
    receipt1: receipt1,
    receipt2: receipt2,
    receipt3: receipt3
  };
  render() {
    return (
      <div className="App">
        {this.state.receipt1.paid ? null : (
          <Receipt receipt={this.state.receipt1} />
        )}
        {this.state.receipt2.paid ? null : (
          <Receipt receipt={this.state.receipt2} />
        )}
        {this.state.receipt3.paid ? null : (
          <Receipt receipt={this.state.receipt3} />
        )}
      </div>
    );
  }
}
export default App;
