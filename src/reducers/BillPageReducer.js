var initialState = {
   cartProductList: {},
   subElements: {
      'Prop 2mtr + 2mtr': [
         {
            'qty_req': 2,
            'subElementName': '50NB X 3.2 mm',
            'weight': 9.2,
            'Rate': 52 
         },
         {
            'qty_req': 2,
            'subElementName': '40NB X 2.9 mm',
            'weight': 6.5,
            'Rate': 52
         },
         {
            'qty_req': 0.85,
            'subElementName': 'Prop Nut',
            'weight': 1,
            'Rate': 70
         },
         {
            'qty_req': 2,
            'subElementName': '40NB X 2.9 mm',
            'weight': 2,
            'Rate': 50
         }
      ],
      'Prop 3mtr + 3mtr': [
         {
            'qty_req': 2,
            'subElementName': '50NB X 3.2 mm',
            'weight': 9.2,
            'Rate': 52 
         },
         {
            'qty_req': 2,
            'subElementName': '40NB X 2.9 mm',
            'weight': 6.5,
            'Rate': 52
         },
         {
            'qty_req': 0.85,
            'subElementName': 'Prop Nut',
            'weight': 1,
            'Rate': 70
         },
         {
            'qty_req': 2,
            'subElementName': '40NB X 2.9 mm',
            'weight': 2,
            'Rate': 50
         }
      ]
   }
}
export default (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
         if(Object.keys(state.cartProductList).includes(action.product)){
            alert('Already Added');
            return {...state}
         }
         return {...state, cartProductList: {
                              ...state.cartProductList, 
                              [action.product]:{
                                 name: action.product, 
                                 qty: 1
                                 }
                              }
            }
      case 'UPDATE_PRODUCT_QTY':
         return {...state, cartProductList: {
                              ...state.cartProductList, 
                              [action.payload.product]:{
                                 name: action.payload.product, 
                                 qty: action.payload.qty
                                 }
                              }
         }
      default:
         return {...state}
    }
   }