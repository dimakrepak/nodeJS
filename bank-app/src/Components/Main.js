import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function Main() {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const [userid, setUser] = useState('')

    const [addId, setAddId] = useState('')
    const [addCash, setAddCash] = useState('')
    const [addCredit, setAddCredit] = useState('')

    const [fromId, setFromId] = useState('')
    const [toId, setToId] = useState('')
    const [amount, setAmount] = useState('')

    useEffect(() => {
        axios.get('https://bank-api-apple.herokuapp.com/api/bank/users')
            .then((request) => {
                setUsers(request.data.users)
            })
    })
    const getById = () => {
        setInputValue('')
        axios.get(`https://bank-api-apple.herokuapp.com/api/bank/users/${inputValue}`)
            .then((request) => {
                console.log(request.data.user);
                // setUser(request.data.user)
            })
    }
    const addUser = () => {
        axios.post(`https://bank-api-apple.herokuapp.com/api/bank/users`,
            {
                id: addId,
                cash: addCash,
                credit: addCredit,
            }
        )
    }
    const handleTransfer = () => {
        axios.put(`https://bank-api-apple.herokuapp.com/api/bank/transfer`,
            {
                from: fromId,
                to: toId,
                amount: amount,
            }
        )
    }
    return (
        <div className="main">
            <button onClick={() => setShow(!show)}>Get Users</button>
            {show &&
                <ul>
                    {users.map((user) =>
                        <li key={user.id}>id: {user.id}, cash: {user.cash}, credit: {user.credit}</li>
                    )}
                </ul>
            }
            <div>
                <input type='text' value={inputValue} onChange={(e) => { setInputValue(e.target.value) }}></input>
                <button onClick={getById}>Get user by id</button>
                {userid !== '' &&
                    <p>{`ID: ${userid.id} CASH: ${userid.cash} CREDIT: ${userid.credit}`}</p>
                }
            </div>
            <div>
                <label>ID</label>
                <input type='text' value={addId} onChange={(e) => { setAddId(e.target.value) }}></input>
                <label>Cash</label>
                <input type='text' value={addCash} onChange={(e) => { setAddCash(e.target.value) }} ></input>
                <label>Credit</label>
                <input type='text' value={addCredit} onChange={(e) => { setAddCredit(e.target.value) }}></input>
                <button onClick={addUser}>add user</button>
            </div>
            <div>
                <label>From</label>
                <input type='text' value={fromId} onChange={(e) => { setFromId(e.target.value) }}></input>
                <label >To</label>
                <input type='text' value={toId} onChange={(e) => { setToId(e.target.value) }}></input>
                <label>Amount</label>
                <input type='text' value={amount} onChange={(e) => { setAmount(e.target.value) }}></input>
                <button onClick={handleTransfer}>Send</button>
            </div>
        </div>
    )
}
