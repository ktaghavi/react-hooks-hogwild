import React from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogContainer hogsData={hogs} />
		</div>
	);
}

export default App;
