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
                <form onSubmit={ isEven(players.length) ? this.handleSubmitMatch : this.handleErrorMatch } className="form">
                    <button className="btn">Create Matches</button>
                    { !errorMatch ? null : <p>Enter an even number of players</p> }
                </form>
            </>
        );
    }
};

export default Forms;