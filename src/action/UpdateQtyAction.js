export const UpdateProductQtyAction = (product, qty) => dispatch => {
    dispatch({
     type: 'UPDATE_PRODUCT_QTY',
     payload: {
        product: product,
        qty: qty ? qty: 0
     }
    })
   }