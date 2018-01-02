'use strict';

import React from 'react';

require('styles//TabNav.css');

class TabNavComponent extends React.Component {
  getTabs() {
    const { panels, activeIndex } = this.props;
    return React.Children.map(panels, (child) => {
        const order = parseInt(child.props.order, 10);
        const isActive = activeIndex === order;
        let navStyle = isActive ? 'active-nav' : 'disable-nav';
        return (
            <li className={navStyle} onClick={this.props.onTabClick.bind(this, order)}>
                {child.props.tab}
            </li>
        );
    });
  }

  render() {
    return (
      <div className="tabnav-component">
        <ul className="tabs">
            {this.getTabs()}
        </ul>
      </div>
    );
  }
}

TabNavComponent.displayName = 'TabNavComponent';

// Uncomment properties you need
TabNavComponent.propTypes = {
    classPrefix: React.PropTypes.string,
    panels: React.PropTypes.node,
    activeIndex: React.PropTypes.number
};
// TabNavComponent.defaultProps = {};

export default TabNavComponent;
