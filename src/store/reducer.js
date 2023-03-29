
import { PRODUCT_DATA, CART_DATA, DELETE_CART_PRODUCT, CART_PRODUCT_INCREMENT } from "./types";
const initial = {
    productlist: [],
    cartlist: []
}
export const productreducer = (state = initial, action) => {
    const { type, payload } = action
    switch (type) {
        case PRODUCT_DATA: {
            return {
                ...state,
                productlist: [...initial.productlist, payload]
            }
        }
        case CART_DATA: {
            return {
                ...state,
                cartlist: [...initial.cartlist, payload]
            }
        }
        case DELETE_CART_PRODUCT: {
            return {
                ...state,
                cartlist: initial.cartlist.filter((item) => item.productid !== payload)
            }
        }
        case CART_PRODUCT_INCREMENT: {
            return {
                ...state,
                cartlist: [...initial.cartlist,...payload]
            }
        }
        default: {
            return {
                state
            }
        }
    }
}