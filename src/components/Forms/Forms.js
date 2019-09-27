import React, { Component } from "react";
import Player from "../Player";


class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            errorMatch: false,
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmitName = this.handleSubmitName.bind(this);
        this.handleErrorMatch = this.handleErrorMatch.bind(this);
        this.handleSubmitMatch = this.handleSubmitMatch.bind(this);
    };

    handleChangeName(e) {
        this.setState({ name: e.currentTarget.value });
    };

    handleSubmitName(e) {
        e.preventDefault();
        this.setState({ name: "" });
        this.props.handleName(this.state)
    };

    handleErrorMatch(e) {
        e.preventDefault();
        this.setState({ errorMatch: true });
    };

    handleSubmitMatch(e) {
        e.preventDefault();
        this.props.handleMatch(this.state);
        this.setState({ errorMatch: false });
    };
    
    render() {
        let { name, errorMatch} = this.state;
        let { players } = this.props;
        
        const isEven = i => {
            {
            return (i % 2 === 0);
            };
        };

        return (
            <>
                <form onSubmit={ this.handleSubmitName } >
                    <label htmlFor="names" className="help-block">ENTER PLAYERS<small className="pl-2">add names and create your pairings</small></label>
                    <input onChange={ this.handleChangeName } id="names" className= "form-control" value={ name } />
                    <button type="submit" className="btn btn-outline-success mt-3 mb-3">Add</button>
                </form>
                 <ul className="list-group">{
                    players.map((player, i) => (
                        <Player key={ i } index={ i } name={ player.name } />
                    ))
                }
                </ul>
                <form onSubmit={ isEven(players.length) ? this.handleSubmitMatch : this.handleErrorMatch } className="form">
                    <button type="submit" className="btn btn-outline-success mt-3 mb-3">Create Tournament</button>
                    { !errorMatch ? null : <div class="alert alert-info" role="alert">Enter an even number of players!</div> }
                </form>
            </>
        );
    }
};

export default Forms;