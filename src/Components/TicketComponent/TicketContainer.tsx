import { IState } from "../../reducers"
import { connect } from "react-redux"
import TicketComponent from "./TicketComponent"

const mapStateToProps = (state: IState) => {
	return {
		authUser: state.login.authUser
	}
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketComponent)