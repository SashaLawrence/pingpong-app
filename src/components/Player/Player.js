import React, { Component } from "react";

class Player extends Component {
    constructor(props) {
        super(props);
        //add the value of input to the state
        this.state = {
            newName: "",
        };
        //bind the handlechange and handleDelete  method
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    };

    //handlechange function allows input to change the state
    handleChange(e) {
        this.setState({ newName: e.currentTarget.value });
    };

    handleDelete(index) {
        // this prop comes from the wrapper of player, it dispatchs the action.
        //index is used so the reducer knows which name it should delete from the players array in global state
        this.props.delete(index);
    };

    render() {
        //destructure state and props
        let { enteredName} = this.state;
        let { players, index } = this.props; 

        return (
            //using the value of the state and props outputted as a list
            <>   
                <li className="list-group-item list-group-item-action list-group-item-secondary">
                    <span className="float-left">{ players[index].name }</span>
                    <span onClick={ () => this.handleDelete(index) } className="btn btn-outline-danger btn-sm float-right">Delete</span>
                </li> 
                <form onSubmit={ enteredName } className="form-group">
                </form>
            </>
        );
    };
};

export default Player;