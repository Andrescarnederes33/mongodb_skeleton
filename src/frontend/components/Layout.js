import React, { Fragment } from 'react'
import Nav from "./nav/Nav";

export default function Layout(props) {
	return (
		<Fragment>
			<Nav />
			{props.children}
		</Fragment>
	)
}