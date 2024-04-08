import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemsActions";

export const itemsReducer = (state = [], action) => {

    switch (action.type) {
        case AddProductCart:

            return [...state,
            {
                product: action.payload,
                quantity: 1,
            }
            ];
        case UpdateQuantityProductCart:

            return state.map(
                (i) => {
                    if (i.product.id === action.payload.id) {
                        /*si se deja i.quantity = i.quantity + 1; se tendra doble la actualizacion al ingresar un
                        nuevo producto del mismo tipo al carrito. */
                        //i.quantity = i.quantity + 1;
                        //Para eliminar este error deberemos de retornar una instancia nueva
                        return {
                            ...i, quantity: i.quantity + 1
                        }
                    }
                    return i;
                }

            );
        case DeleteProductCart:

            return [
                ...state.filter((i)=>i.product.id !== action.payload)
            ];
                
            //o se le pueden quitar los corchetes como a continuación    
               state.filter((i) => i.product.id !== action.payload)
              
        default:
            return state;
    }

}