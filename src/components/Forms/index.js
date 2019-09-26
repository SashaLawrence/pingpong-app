import { connect } from "react-redux";
import Forms from "./Forms";
import { newPlayer } from "../../data/actions/state";
import { newMatch } from "../../data/actions/state";

const mapStateToProps = state => ({
    players: state.players,
}); 

const mapDispatchToProps = dispatch => ({
    handleName: values => dispatch(newPlayer(values)),
    handleMatch: values => dispatch(newMatch(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms)