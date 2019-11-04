import React, { useState, useEffect } from "react"
import api from "../utils/api"

function Friends(props) {
	const [user, setUser] = useState({
		name: "",
		username: "",
	})

	useEffect(() => {
		api().get("/api/friends")
			.then(result => {
				setUser({
					name: result.data.name,
					username: result.data.username,
				})
			})
			.catch(error => {
				console.log(error)
			})
	}, [])

	return (
		<>
			<h1>Account</h1>

			<div className="account-row">Name: {user.name}</div>
			<div className="account-row">Username: {user.username}</div>
		</>
	)
}

export default Friends