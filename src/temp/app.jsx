import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import Add from "./components/add";

class App extends Component {
    state = {
        habits: [
            { id: 1, name: "Reading", count: 0 },
            { id: 2, name: "Running", count: 0 },
            { id: 3, name: "Coding", count: 0 },
        ],
    };

    handleIncrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({ habits: habits }); // habits만 써도 가능
    };

    handleDecrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        // habits[index].count <= 0
        //   ? (habits[index].count = 0)
        //   : habits[index].count--;
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({ habits });
    };

    handleDelete = (habit) => {
        // const habits = [...this.state.habits];
        // const index = habits.indexOf(habit);
        // habits.pop(index);
        // this.setState({ habits });

        const habits = this.state.habits.filter((item) => item.id !== habit.id);
        this.setState({ habits });
    };

    render() {
        return (
            <>
                <Navbar habits={this.state.habits} />
                <Add habits={this.state.habits} />
                <Habits
                    habits={this.state.habits}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                />
            </>
        );
    }
}

export default App;
