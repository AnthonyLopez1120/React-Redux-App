 import React from "react"
 import { connect } from  "react-redux"

 const Pickup = props => {

    return (
        <div>
            <h1>Pickup-Lines</h1>
            {!props.pickup && <p>Try it</p>}
            <button>Spit some Game</button>
        </div>
    )
 }

  const mapStateToProps = state => {
    return{

        pickup: state.pickup,
        isFetching: state.isFetching,
        error: state.error
    }
  }

 export default connect(mapStateToProps, {})(Pickup) 
