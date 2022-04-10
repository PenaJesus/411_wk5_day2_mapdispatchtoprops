import { connect } from "react-redux"
import Total from "../components/Total"


const mapStatetoProps = (state) => {
  return {
    cars: state.cars
  }
}

export default connect(mapStatetoProps)(Total)