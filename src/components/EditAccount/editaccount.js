import React, { useState } from "react";
import {withRouter} from "react-router-dom";


function EditAccount(props) {
    
    
    const [account,setEditedAccount] = useState(
        props.accounts.filter(acc => acc.id == props.match.params.id)[0]
    )
    const editThisAccount = () =>{
        props.editThisAccount(account);
        props.history.push("/"); 
    }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h2 className="disply-4 m-4">Edit Account</h2>
                        <div className="row">
                            <div className="col-10 offset-1">
                                <input type="text" id="name" className="form-control" value={account.name} onChange={e=>{setEditedAccount({...account,name:e.target.value})}}/><br/>
                                <input type="text" id="lastname" className="form-control" value={account.lastname} onChange={e=>{setEditedAccount({...account,lastname:e.target.value})}}/><br/>
                                <input type="text" id="phone" className="form-control" value={account.phone} onChange={e=>{setEditedAccount({...account,phone:e.target.value})}}/><br/>
                                <input type="text" id="email" className="form-control" value={account.email} onChange={e=>{setEditedAccount({...account,email:e.target.value})}}/><br/>
                                <button onClick={editThisAccount} className="form-control btn btn-info">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}





export default withRouter(EditAccount);