import React from 'react'
import TransactionItem from './TransactionItem'

export default function TransactionList({transactions}) {
  return (
    <div className='text-start my-4'>
        <h6 className="fw-bold">History</h6>
        <hr className='my-1'/>
        {transactions.map(t=><TransactionItem key={t.id} transaction={t}/>)}
    </div>
  )
}
