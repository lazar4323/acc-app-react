import React from "react";
import Account from "../Account/account";

const AccountsTable = ({accounts}) =>{
    const allAccounts = accounts.map(account=>{
        return(
            <Account account={account} key={account.id} />
        )
    })
    return(
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className="display-4 m-4">Accoutns</h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>LAST-NAME</th>
                                        <th>EMAIL</th>
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

export default AccountsTable;