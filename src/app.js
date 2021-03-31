import React, { useState } from "react";
import Header from "./components/Header/header";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import AccountsTable from "./components/AccountsTable/accountstable"
import AddAccount from "./components/AddAccount/addaccount";
import EditTable from "./components/EditTable/edittable"
import EditAccount from "./components/EditAccount/editaccount"


function App(){

    const [accounts,setAccounts] = useState([
        {
            id : 1,
            name : "Lazar",
            lastname : "Ristic",
            phone : "063-122-8249",
            email : "ristic@gmail.com",
        },
        {
            id : 2,
            name : "Lana",
            lastname : "Ristic",
            phone : "063-842-0886",
            email : "ristic@gmail.com",
        },
        {
            id : 3,
            name : "Marko",
            lastname : "Ristic",
            phone : "063-824-756",
            email : "ristic@gmail.com",
        }

    ])

    const addNewAccountToState = (account) =>{
        setAccounts([...accounts,account])
    }
    const deleteAccount = (id) =>{
        const newCopyAccounts = accounts.filter(account=>account.id !== id)
        setAccounts({
             newCopyAccounts
        })
    }
    const editThisAccount = (acc) =>{
        let accountPossition = accounts.map(account => account.id).indexOf(acc.id)
        accounts[accountPossition] = acc
        setAccounts({
            accounts
        })
    }
        return(
            <BrowserRouter>
                <Header />
                <Route path="/" exact>
                    <AccountsTable accounts = {accounts} />
                </Route>
                <Route path="/add">
                    <AddAccount addNewAccountToState={addNewAccountToState} />
                </Route>
                <Switch>
                    <Route path="/edit/:id">
                        <EditAccount editThisAccount={editThisAccount} accounts={accounts} />
                    </Route>
                    <Route path="/edit">
                        <EditTable deleteAccount={deleteAccount} accounts={accounts} />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
}

export default App;