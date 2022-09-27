import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class ExpenseList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expenses: [],
            columns: [],
            isLoading: false
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllExpenses().then(expenses => {
            this.setState({
                expenses: expenses.data.data,
                isLoading: false
            })
        })
        console.log(this.state.expenses)
    }

    render() {

        const { expenses, isLoading } = this.state
        console.log('TCL: ExpenseList -> render -> expense', expenses)

        const columns = [
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true
            },
            {
                Header: 'Description',
                accessor: 'desc',
                filterable: true
            },
            {
                Header: 'Category',
                accessor: 'category',
                filterable: true
            },
            {
                Header: 'Amount',
                accessor: 'amount',
                filterable: true
            },
        ]

        let showTable = true
        if(!expenses.length){
            showTable = false
        }

        return (
            <div>
                <h1>Expense List</h1>
            </div>
        )
    }
}

export default ExpenseList