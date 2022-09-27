import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { NavBar } from '../components'
import { ExpenseList, ExpenseInsert, ExpenseUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/expenses/list' element={ <ExpenseList/> } />
                <Route path='/expense/add' element={ <ExpenseInsert/> } />
                <Route 
                    path='/expenses/update/:id' 
                    exact 
                    component={ <ExpenseUpdate/> } />
            </Routes>
        </Router>
    )
}

export default App
