import React, {Component} from 'react';
import {connect} from 'react-redux';
import SubElementsDisplay from './SubElementsDisplay';
import {UpdateProductQtyAction} from '../action/UpdateQtyAction';


class BillingItemsDisplay extends Component{
    updateQty = (event, product_name) => {
        this.props.UpdateProductQtyAction(product_name, event.target.value);
    }

    getItemsRows = () => {
        var res = [];
        var count = 0;
        Object.keys(this.props.cartProductList).forEach(key => {
            var element = this.props.cartProductList[key];
            res.push((
                <div key={count}>
                    <b>Product Name</b> : {element.name} <br />
                    <b>Qty</b> : <input type='number' value={element.qty} onChange={(event) => this.updateQty(event, element.name) } />
                    <SubElementsDisplay product_name={element.name} product_qty={element.qty}/>
                </div>
            ));
            count++;
        });
        return res;
    }
    render(){
        return (
        <div>
            <h1>Product List</h1>
            {this.getItemsRows()}
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartProductList: state.BillPageReducer.cartProductList
    }
}

const mapDispatchToProps = dispatch => ({
    UpdateProductQtyAction: (product, qty) => dispatch(UpdateProductQtyAction(product, qty))
})

export default connect(mapStateToProps, mapDispatchToProps)(BillingItemsDisplay);