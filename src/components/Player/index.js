//connect talks to Provider component to  access store
import { connect } from "react-redux";
//component to be wrapped
import Player from "./Player";
// import the deletePlayer action
import { deletePlayer } from "../../data/actions/state"

//mapStateToProps: maps the current state (from the store) 
// to the props that get passed into the wrapped component
const mapStateToProps = state => ({
    players: state.players,
}); 

//pass in the store.dispatch method - passes value, index to delete player action
const mapDispatchToProps = dispatch => ({
    delete: (values, index) => dispatch(deletePlayer(values, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);