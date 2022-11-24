const ENDPONT = process.env.REACT_APP_ENDPOINT;

export const TransactionService = {
    fetchAll: async()=>await fetch(`${ENDPONT}/transactions`).then(res=>res.json()),

    fetchById: async(id)=>await fetch(`${ENDPONT}/transactions/${id}`).then(res=>res.json()),

    save: async(transaction)=>await fetch(`${ENDPONT}/transactions`,{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transaction)
    }).then(res=>res.json()),

    delete: async(id)=>await fetch(`${ENDPONT}/transactions/${id}`,{
        method: 'DELETE'
    }).then(res=>res.json())

}