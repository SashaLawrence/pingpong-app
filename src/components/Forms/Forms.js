import React, { Component } from "react";
import Player from "../Player";

class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmitName = this.handleSubmitName.bind(this);
    };

    handleChangeName(e) {
        this.setState({ name: e.currentTarget.value });
    };

    handleSubmitName(e) {
        e.preventDefault();
        this.setState({ name: "" });
        this.props.handleName(this.state)
    };

    render() {
        let { name } = this.state;
        let { players } = this.props;

        return (
            <>
                <form onSubmit={ this.handleSubmitName } >
                    <label htmlFor="names">Enter Name</label>
                    <input onChange={ this.handleChangeName } id="names" className="form-control" value={ name } />
                    <button type="submit" className="btn">Add</button>
                </form>
                 <ul className>{
                    players.map((player, i) => (
                        <Player key={ i } index={ i } name={ player.name } />
                    ))
                }
                </ul>
            </>
        );
    }
};

export default Forms;