import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Demo = () => {
  const {store, dispatch}=useGlobalReducer()
	// Note: as we see in the Single view, we can use the destructuring form for our code.

	const changeColor = (index,color) =>{
		const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		});
		return demo
	}


	return (
		<div className="container">
			<ul className="list-group">
				{store && store.demo?.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Open file ./store.js to see the global store that contains and updates the list of colors
								</p>
							) : null}
							<button className="btn btn-success" onClick={()=> dispatch({type:"change_color",nextDemo:changeColor(index,"orange")}) }>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};