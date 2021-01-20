import React, {
    Component,
    useState,
    useRef,
    useCallback,
    useEffect,
} from "react";

// import React from "react";

const SimpleHabit = (props) => {
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });

    useEffect(() => {
        console.log(`mounted & updated! : ${count}`);
    }, [count]);
    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">
                Reading
            </span>
            <span className="habit-count">{count}</span>
            <button
                className="habit-button habit-increase"
                onClick={handleIncrement}
            >
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;

// class SimpleHabit extends Component {
//     state = {
//         count: 0,
//     };

//     handleIncrement = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     render() {
//         return (
//             <li className="habit">
//                 <span className="habit-name">Reading</span>
//                 <span className="habit-count">{this.state.count}</span>
//                 <button
//                     className="habit-button habit-increase"
//                     onClick={this.handleIncrement}
//                 >
//                     <i className="fas fa-plus-square"></i>
//                 </button>
//             </li>
//         );
//     }
// }

// export default SimpleHabit;
