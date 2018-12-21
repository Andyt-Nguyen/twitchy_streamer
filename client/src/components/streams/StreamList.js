import React from "react"
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchStreams })
    (class StreamList extends React.Component {
        
        renderAdmin(stream) {
            if(stream.userId === this.props.currentUserId) {
                return (
                    <div className="right floated content">
                        <Link 
                            to={`/streams/edit/${stream.id}`}   
                            className="ui button primary">
                            Edit
                        </Link>

                        <Link 
                            to={`/streams/delete/${stream.id}`} 
                            className="ui button negative">
                            Delete
                        </Link>
                    </div>
                )
            }
        }

        renderList() {
            return this.props.streams.map( a => (
                <div className="item" key={a.id}>
                    {this.renderAdmin(a)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${a.id}`} className="header">
                            {a.title}
                        </Link>
                        <div className="description">{a.description}</div>
                    </div>
                </div>
            ))
        }

        renderCreate() {
            if(this.props.isSignedIn) {
                return (
                    <div style={{textAlign:"right"}}>
                        <Link to="/streams/new" className={"ui button primary"}>Create Stream</Link>
                    </div>
                )
            }
        }


        componentDidMount() {
            this.props.fetchStreams()
        }

        render() {
            console.log(this.props)
            return (
                <div>
                    <h2>Streams</h2>
                    <div className="ui celled list">
                        {this.renderList()}
                    </div>
                    {this.renderCreate()}
                </div>
            )
        }
    }
)
