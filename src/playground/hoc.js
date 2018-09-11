import React from 'react';
import ReactDOM from 'react-dom';



// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin ? <p>Welcome admin</p> : undefined}
//             <WrappedComponent {...props} />
//         </div>
//     )
// }
// const AdminInfo = withAdminWarning(Info);

// //
const Info = (props) => {
    return (
        <div>
        <h1>Info: {props.info}</h1>
        <p>JSX</p>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.requireAuth ? <WrappedComponent {...props} /> : <p>Please log in to view</p>}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);


ReactDOM.render(<AuthInfo requireAuth={true} info="these are the details" />, document.getElementById('app'));