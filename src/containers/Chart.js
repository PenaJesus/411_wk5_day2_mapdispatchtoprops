import { connect } from "react-redux";
import Chart from '../components/Chart'

const mapStatetoProps = (state) => {
  return {
    cars : state.cars
  }
}

export default connect(mapStatetoProps)(Chart)