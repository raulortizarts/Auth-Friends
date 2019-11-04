import "./App.css"
import React from "react"
import { Link, Route, withRouter } from "react-router-dom"
import { getToken } from "./utils/api"
import ProtectedRoute from "./components/ProtectedRoute"
import Signin from "./components/Login"
import Friends from "./components/Friends"
import Logout from "./components/Logout"

function App() {
	const signedIn = getToken()

	return (
		<div className="wrapper">
			<nav>
				<Link to="/">Home</Link>

				{!signedIn && <Link to="/api/login">Log In</Link>}
				{signedIn && <Link to="/api/friends">Account</Link>}
				{signedIn && <Link to="/api/logout">Logout</Link>}
			</nav>

			<Route exact path="/api/login" component={Signin} />
			<ProtectedRoute exact path="/api/friends" component={Friends} />
			<ProtectedRoute exact path="/api/logout" component={Logout} />
		</div>
	)
}

export default withRouter(App)