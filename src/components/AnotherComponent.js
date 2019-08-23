import React from 'react'
import { connect } from 'react-redux'

const AnotherDummy = (props) => {
    console.log(props, 'props')
    return(
        <div style={{textAlign: 'center'}}>
            <h1>
                Second route
            </h1>
        </div>
    )
}
export default connect(
    state => ({
        dummyReducer: state.dummyReducer
    })
)(AnotherDummy)