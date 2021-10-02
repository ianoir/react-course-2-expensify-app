// Higher Order Components (HOC)
// A component in React that renders another component
// This allows:
// Code Reuse, Render Hijacking, Prop Manipulation, Abstract State

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private information, please don't share.</p>}
            <WrappedComponent {...props} />
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} />: <p>This file requires authentication to use. Please log in to continue.</p>}
        </div>
    );
};
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the detail" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info="This is the detail" />, document.getElementById('app'));