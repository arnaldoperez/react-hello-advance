import { useContext } from "react";
import { Context } from "../main.jsx";

export const useDispatch = () => {
	const { dispatch } = useContext(Context);
    return dispatch
} 