import React from 'react'
import { connect } from 'react-redux'

class DummyComponent extends React.Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>
                    hello world
                </h1>
            </div>
        )
    }
}

export default connect(
    state => ({
        dispatch: state.dispatch
    })
)(DummyComponent)