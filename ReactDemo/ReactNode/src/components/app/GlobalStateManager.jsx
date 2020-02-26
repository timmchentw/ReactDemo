import React, { Component } from 'react';

// Global State Context
const productsInitState = { products: 0 }  // Initial global state
const ordersInitState = { orders: [] }      
const ContextStore = React.createContext({  // Context (stores state)
    products: [],
    orders: []
})

// Reducers
function productsReducer(state, action) {
    switch (action.type) {
        case 'EDIT_PRODUCT':
            const newState = JSON.parse(JSON.stringify(state));
            newState.products = action.payload; // Put "e.target.value" into state.
            return newState
        case 'PLUS_1_PRODUCT':
            const newState2 = JSON.parse(JSON.stringify(state));
            newState2.products = parseInt(newState2.products, 10) + 1; // State + 1
            return newState2
        case 'ADD_PRODUCT':
            return Object.assign({}, state, {
                products: state.products.concat({ id: state.products.length })
            })  // This will add "new object" in current state.
                // Meanings: Object.assign(target, source), concat: Add value in array

        default:
            return state
    }
}
function ordersReducer(state, action) {
    switch (action.type) {
        case 'ADD_ORDER':
            return Object.assign({}, state, {
                orders: state.orders.concat({ id: state.orders.length })
            })
        default:
            return state
    }
}

// "Ruducers" bind to "Context"
function Application() {
    const [pState, pDispatch] = React.useReducer(productsReducer, productsInitState);
    const [oState, oDispatch] = React.useReducer(ordersReducer, ordersInitState);

    return (
        <ContextStore.Provider
            value={{
                orders: oState.orders,
                products: pState.products,
                pDispatch,
                oDispatch
            }}
        >
            <React.Fragment>
                <Products />
                <Orders />
            </React.Fragment>
        </ContextStore.Provider>
    )
}

// Get Context
function Products() {
    const { products, pDispatch } = React.useContext(ContextStore);

    function handleChange(e) {
        pDispatch({ type: 'EDIT_PRODUCT', payload: e.target.value})
    }

    return (
        <div>
            <div>
                PRODUCT - {products}
            </div>
            <input type="text" onChange={handleChange}></input>
            <button onClick={(e) => pDispatch({ type: 'PLUS_1_PRODUCT' })}>SAVE</button>
        </div>
    )
}

function Orders() {
    const { orders, oDispatch } = React.useContext(ContextStore);
    return (
        <div>
            {
                orders.map(order => (<div>PRODUCT - {order.id}</div>))
            }
            <button onClick={() => oDispatch({ type: 'ADD_ORDER' })}>ADD ORDER</button>
        </div>
    )
}

export default Application;