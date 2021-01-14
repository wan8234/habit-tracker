import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <button className="logo-leaf">
                    <i class="fas fa-leaf"></i>
                </button>
                <span className="habit-tracker">Habit Tracker</span>
            </div>
        );
    }
}

export default Navbar;
