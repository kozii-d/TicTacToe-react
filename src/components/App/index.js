import {restart, toggleActivePlayer} from "../../store/activePlayer/actions";
import {updateGamefield} from "../../store/gamefield/actions";
import {gamefield} from "../../store/gamefield/selectors";
import {activePlayer } from "../../store/activePlayer/selectors";
import {connect} from "react-redux";
import App from "./App";
import {createStructuredSelector} from "reselect";

const mapDispatchToProps = {
    toggleActivePlayer,
    restart,
    updateGamefield
}

const mapStateToProps = createStructuredSelector({
    gamefield,
    activePlayer
});

export default connect(mapStateToProps, mapDispatchToProps)(App);