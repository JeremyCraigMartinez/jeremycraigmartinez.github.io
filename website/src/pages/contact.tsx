import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { actionIncrement, actionDecrement } from "../store/actions";

const Contact: React.FC = () => {
    const count = useSelector((state: RootState) => state.home.count);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Contact</h1>

            <p>I have been contacted {count} times</p>
            <button onClick={() => dispatch(actionIncrement())}>Increase</button>
            <button onClick={() => dispatch(actionDecrement())}>Decrement</button>
        </>
    );
}

export default Contact;