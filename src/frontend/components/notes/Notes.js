import React from 'react';
import Note from "./Note"

export class Notes extends React.Component {

constructor(props){
	super(props);

	this.state = {
		isLoaded: true,
		notes: []
	}
}

componentDidMount(){

	fetch("/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            notes: result
          });
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
}

	render() {
		return (
			<div>
				{this.state.notes.map(item => (
					<Note key={item._id} id={item._id} name={item.name} age={item.age} />
				))}
			</div>
		)
	}
}

export default Notes;