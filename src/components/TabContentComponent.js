'use strict';

import React from 'react';

require('styles//TabContent.css');

class TabContentComponent extends React.Component {
  getTabContents() {
    const {classPrefix, activeIndex, panels} = this.props;
    return React.Children.map(panels, (child) => {
        if (!child) return;
        const order = parseInt(child.props.order, 10);
        const isActive = activeIndex === order;
        return React.cloneElement(child, {
            classPrefix,
            isActive,
            children: child.props.children,
            key: `tabpane-${order}`
        });
    });

  }
  render() {
    return (
      <div className="tabcontent-component">
        {this.getTabContents()}
      </div>
    );
  }
}

TabContentComponent.displayName = 'TabContentComponent';

// Uncomment properties you need
TabContentComponent.propTypes = {
    classPrefix: React.PropTypes.string,
    panels: React.PropTypes.node,
    activeIndex: React.PropTypes.number
};
// TabContentComponent.defaultProps = {};

export default TabContentComponent;
