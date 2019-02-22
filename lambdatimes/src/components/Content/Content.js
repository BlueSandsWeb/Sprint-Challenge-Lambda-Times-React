import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';
import PropTypes from 'prop-types';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'all',
      tabs: [],
      cards: [],
    };
  }
  
  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({
      tabs: [...tabData], 
      cards: [...cardData] });
      console.log("ComponentDidMount");
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({
      selectedTab: tab
    })
  };

  filterCards = (tab) => {
    let data = [...cardData];
    if ( tab === 'all'){
      return this.setState({ cards: data})
    }
    const newData = data.filter( (card) => {
      return card.tab === tab
    });
    return this.setState({
      cards: newData
    })
  };

  selectTabHandler = (tab) => {
    this.changeSelected(tab);
    this.filterCards(tab);
  }

  render() {
    return (
      <div className="content-container">
        {/* Add 2 props to the Tabs component, selectedTab` that includes the currently selected tab and `selectTabHandler` that includes the function to change the selected tab */}
        <Tabs tabs={this.state.tabs} selectTabHandler={this.selectTabHandler} selectedTab={this.state.selectedTab}/>
        <Cards cardsData={this.state.cards}/>
      </div>
    );
  }
}
