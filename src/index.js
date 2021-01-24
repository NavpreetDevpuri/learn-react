import React from "react";
import ReactDOM from "react-dom";
import LearnClass from "./components/LearnClass";

class Garage extends React.Component {
    render() {
        const carinfo = { name: "Ford", model: "Mustang" };
        return (
            <div>
                <h1>Learn Reactjs?</h1>
                <LearnClass brand={carinfo} color="prop color" />
            </div>
        );
    }
}

ReactDOM.render(<Garage />, document.getElementById("root"));
