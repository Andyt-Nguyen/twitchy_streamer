import React from 'react'
import { connect } from 'react-redux'
import { createStream } from '../../actions'
import StreamForm from './StreamForm'

export default connect(null, {createStream})(class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }
    render() {
        return (
            <div>
                <h3>Create a stream</h3>
                <StreamForm 
                    onSubmit={this.onSubmit}/>
            </div>
        )
    }
})
