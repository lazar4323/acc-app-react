import React from "react"
import Account from "../Account/account"

const EditTable = ({accounts,deleteAccount}) =>{
    const allAccounts = accounts.map(account=>{
        return(
            <Account deleteAccount={deleteAccount} account={account} edit={true} key={account.id} />
        )
    })
    return(
        <div className="container">
        <div className="row">
            <div className="col-10 offset-1">
                <h3 className="display-4 m-4">Edit/Delete</h3>
                <div className="row">
                    <div className="col-10 offset-1">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>LAST-NAME</th>
                                    <th>EMAIL</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allAccounts}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default EditTable;