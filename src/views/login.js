import React, { Component } from 'react'
import { connect } from 'react-redux'

export class login extends Component {
    render() {
        return (
            <div>
                login
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(login)
