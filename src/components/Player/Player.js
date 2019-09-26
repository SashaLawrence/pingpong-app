import React, { Component } from "react";

class Player extends Component {
    constructor(props) {
        super(props);
        //add the value of input to the state
        this.state = {
            newName: "",
        };
        //bind the handle change method
        this.handleChange = this.handleChange.bind(this);
    };
    //handlechange function allows input to change
    handleChange(e) {
        this.setState({ newName: e.currentTarget.value });
    };


    render() {
        //destructure state and props
        let { enteredName} = this.state;
        let { players, index } = this.props; 

        return (
            //using the value of the state and props outputted as a list
            <>   
                <li className="list-group-item">
                    <span>{ players[index].name }</span>
                </li> 
                    <form onSubmit={ enteredName } className="form">
                    </form>
            </>
        );
    };
};

export default Player;