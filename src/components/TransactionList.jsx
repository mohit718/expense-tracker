import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalProvider'
import TransactionItem from './TransactionItem'

export default function TransactionList() {
  const {transactions, deleteTransaction} = useContext(GlobalContext);
  return (
    <div className='text-start my-4'>
        <h6 className="fw-bold mb-0">History</h6>
        <hr className='my-2 mb-3'/>
        {transactions.map(t=><TransactionItem key={t.id} transaction={t} deleteTransaction={deleteTransaction}/>)}
    </div>
  )
}
