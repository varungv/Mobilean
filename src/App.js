import React, {Component} from 'react';
import { connect } from 'react-redux';
import SearchBar from './components/SearchBar';
import BillingItemsDisplay from './components/BillingItemsDisplay';

class App extends Component {
  render(){
    return (
      <div>
        <div className='page-header'>
          <h1>BILLING</h1>
        </div>
        <SearchBar />
        <BillingItemsDisplay />
        {/* <pre style={{background: 'orange'}}>
          {
            JSON.stringify(this.props,undefined, 2)
          }
          </pre> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 })

export default connect(mapStateToProps)(App);
