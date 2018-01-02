require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Tab from './TabComponent.js';
import TabPane from './TabPaneComponent.js';


class AppComponent extends React.Component {
  render() {
    return (
        <div className="app">
            <Tab activeIndex={1} defaultActiveIndex={1}>
                <TabPane order="1" tab={'tab 1'} >First Tab Content</TabPane>
                <TabPane order="2" tab={'tab 2'} >Second Tab Content</TabPane>
                <TabPane order="3" tab={'tab 3'} >Third Tab Content</TabPane>
                <TabPane order="4" tab={'tab 4'} >Fourth Tab Content</TabPane>
            </Tab>
        </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
