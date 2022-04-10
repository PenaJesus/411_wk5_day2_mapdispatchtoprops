import AddCar from "../components/AddCar";
import { connect } from "react-redux";
import { addCar } from "../redux/actions";
//mapStateToProps

//mapDispatchToProps
//using object deceleration
const mapDispatchToProps = {
  addCar
}

export default connect(null, mapDispatchToProps)(AddCar);
