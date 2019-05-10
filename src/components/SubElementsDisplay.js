import React, {Component} from 'react';
import {connect} from 'react-redux';

class SubElementsDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
            labour_charge: 57,
            profit: 8
        }
    }
    updateLabour = (event) => {
        this.setState({...this.state, labour_charge: parseInt(event.target.value)})
    }
    updateProfit = (event) => {
        this.setState({...this.state, profit: parseInt(event.target.value)})
    }
    getTotalMaterialCost = () => {
        var total = 0;
        this.props.subelements.forEach((subelement) => {
            total = total + subelement.Rate;
        })
        return total * this.props.product_qty;
    }
    getsubelements = () => {
        var res = [];
        var slno = 1;
        this.props.subelements.forEach((subelement) => {
            res.push(
            <tr key={slno}>
                <td>
                    {slno}
                </td>
                <td>
                    {subelement.subElementName}
                </td>
                <td>
                    {subelement.qty_req}
                </td>
                <td>
                    {subelement.weight}
                </td>
                <td>
                    {subelement.Rate}
                </td>
                <td>
                    {subelement.Rate*this.props.product_qty}
                </td>
            </tr>
            );
            slno++;
        })
        return res;
    }
    render(){
        return (<div>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Material Descripton</th>
                        <th>Qty</th>
                        <th>Wt</th>
                        <th>Rate</th>
                        <th>Total Rs</th>
                    </tr>
                </thead>
            <tbody>
                {this.getsubelements()}
                <tr>
                    <td colSpan='5'>Labour Charge</td>
                    <td><input type='number' value={this.state.labour_charge} onChange={this.updateLabour} /></td>
                </tr>
                <tr>
                    <td colSpan='5'>Sub Total</td>
                    <td>{this.getTotalMaterialCost() + this.state.labour_charge}</td>
                </tr>
                <tr>
                    <td colSpan='5'>
                        Profit
                        <input type='number' value={this.state.profit} onChange={this.updateProfit}/> %
                    </td>
                    <td>{
                        (this.getTotalMaterialCost() + this.state.labour_charge)*this.state.profit/100
                        }</td>
                </tr>
                <tr>
                    <td colSpan='5'>Grand Total</td>
                    <td>
                        {
                            (this.getTotalMaterialCost() + this.state.labour_charge) + 
                            (
                                (
                                    this.getTotalMaterialCost() + this.state.labour_charge)*this.state.profit/100
                            )
                        }
                    </td>
                </tr>
            </tbody>
            </table>
            </div>)
    }
}


const mapStateToProps = (state, ownprops) =>{
    return {
        subelements : state.BillPageReducer.subElements[ownprops.product_name]
    }
}

export default connect(mapStateToProps)(SubElementsDisplay);