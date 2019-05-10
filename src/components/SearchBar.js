import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AddProductAction} from '../action/AddProductAction';

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectedDropDown: 'Prop 2mtr + 2mtr'
        }   
    }
    onchange = (event) => {
        this.setState({...this.state, selectedDropDown: event.target.value});
    }
    addProduct = (event) => {
        this.props.AddProductAction(this.state.selectedDropDown);
    } 
    render(){
        return (
            <div className='form-group form-inline'>
                <label htmlFor='search_drop_down' className='btn control-label'>Select Product Type</label>
                <select  name='search_drop_down' id='search_drop_down' className='form-control' onChange={this.onchange}>
                    <option value='Prop 2mtr + 2mtr'>Prop 2mtr + 2mtr</option>
                    <option value='Prop 3mtr + 3mtr'>Prop 3mtr + 3mtr</option>
                </select>
                <button className='btn btn-success' onClick={this.addProduct}>ADD</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    AddProductAction: (product) => dispatch(AddProductAction(product))
})


export default connect(null, mapDispatchToProps)(SearchBar);