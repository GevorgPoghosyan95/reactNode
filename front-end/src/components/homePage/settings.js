import React from "react";

const Settings = ()=>{
    return (
        <div className="tab-pane" id="settings">
            <form role="form">
                <div className="form-group">
                    <label htmlFor="FullName">Full Name</label>
                    <input type="text"  id="FullName" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="Email" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Username">Username</label>
                    <input type="text" id="Username" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" placeholder="6 - 15 Characters" id="Password" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="RePassword">Re-Password</label>
                    <input type="password" placeholder="6 - 15 Characters" id="RePassword" className="form-control"/>
                </div>
                <button className="btn btn-primary waves-effect waves-light w-md" type="submit">Save</button>
            </form>
        </div>
    );
}

export default Settings;