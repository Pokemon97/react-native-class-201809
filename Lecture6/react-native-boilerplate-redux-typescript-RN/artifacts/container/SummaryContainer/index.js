import Summary from "../../stories/screens/Summary";
import * as actions from "./actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
function bindAction(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
const mapStateToProps = state => ({
    value: state.countReducer.result,
});
export default connect(mapStateToProps, bindAction)(Summary);
//# sourceMappingURL=index.js.map