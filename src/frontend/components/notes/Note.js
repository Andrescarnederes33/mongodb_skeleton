import React from 'react'

function Note(props) {
	const { id, name, age } = props;
	return (
		<div style={{border: "1px solid #ddd", padding: "10px", marginBottom: "10px"}}>
			{name} {age} &nbsp;
			<div style={{float: "right"}}>
				<button type="button" onClick={() => console.log("Edit", id)}>Edit</button> &nbsp;
				<button type="button" onClick={() => console.log("Delete", id)}>Delete</button>
			</div>
		</div>
	)
}

export default Note