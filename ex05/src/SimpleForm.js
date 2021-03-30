import React from 'react';

class SimpleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "Yoda" };
    }
    onChangeHandler = (event) => {
        this.setState({name: event.target.value});
    }
    render() {
        return (
            <form>
                <h1>Name: {this.state.name}</h1>
                <p>First Name:</p>
                <input
                    type='text'
                    onChange={this.onChangeHandler}/>
            </form>
        )
    }
}
export default SimpleForm;