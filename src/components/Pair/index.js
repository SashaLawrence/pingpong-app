import { connect } from "react-redux";
import Pair from "./Pair";

const mapStateToProps = state => ({
    matches: state.matches,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Pair)