import { connect } from "react-redux";
import Player from "./Player";

const mapStateToProps = state => ({
    players: state.players,
}); 

export default connect(mapStateToProps)(Player);