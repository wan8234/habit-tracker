import React, { Component } from "react";

class Navbar extends Component {
    render() {
        const habits = this.props.habits;
        var sum = 0;
        habits.forEach((item) => {
            sum += item.count;
        });

        return (
            <div className="navbar">
                <button className="logo-leaf">
                    <i className="fas fa-leaf"></i>
                </button>
                <span className="habit-tracker">Habit Tracker</span>
                <span className="habit-count habit-navbar-count">{sum}</span>
            </div>
        );
    }
}

export default Navbar;
