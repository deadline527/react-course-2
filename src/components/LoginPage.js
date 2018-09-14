import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({ startLogin }) => (
    <div>
        {console.log(startLogin)}
        <h1>This is the login page</h1>
        <form>
            <button onClick={startLogin}>Login</button>
        </form>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin)
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
