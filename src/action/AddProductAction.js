export const AddProductAction = (product) => dispatch => {
    dispatch({
     type: 'ADD_PRODUCT',
     product: product
    })
   }

// okay