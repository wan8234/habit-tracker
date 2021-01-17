import React, { Component } from "react";

class Add extends Component {
    saveInput = () => {
        var act = document.getElementById("inputHabit").value;
        act = null;
    };

    render() {
        return (
            <div>
                <input type="text" id="inputHabit" placeholder="Habit"></input>
                <button onClick={this.saveInput}>Add</button>
            </div>
        );
    }
}

export default Add;
