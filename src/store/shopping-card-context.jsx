import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from '../dummy-products.js';


export const CartContext = createContext({
    items: [],
    updateCartItemQuantity: () => { },
    addItemToCart: () => { },
})

function shoppingCardReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
            updatedItems.push({
                id: action.payload,
                name: product.title,
                price: product.price,
                quantity: 1,
            });
        }

        return {
            items: updatedItems,
        };
    }
    else if (action.type === 'UPDATE') {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.payload.productId
        );

        const updatedItem = {
            ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += action.payload.amount;

        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
        };
    }
}

export default function CardContextProvider({ children }) {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCardReducer, {
        items: []
    })
    function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: "ADD_ITEM",
            payload: id,
        })
    }

    function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
            type: "UPDATE",
            payload: {
                productId,
                amount
            }
        })
    }
    const CartCtx = {
        items: shoppingCartState.items,
        updateCartItemQuantity: handleUpdateCartItemQuantity,
        addItemToCart: handleAddItemToCart,
    }
    return <CartContext.Provider value={CartCtx}>
        {children}
    </CartContext.Provider>
}