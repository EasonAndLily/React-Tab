'use strict';

import React from 'react';

require('styles//TabPane.css');

class TabPaneComponent extends React.Component {
  render() {
    const { isActive, children } = this.props;
    let classNames = 'tabpane-component';
    classNames += this.props.isActive ? ' active-tabPane' : ' hidden-tabPane';
    return (
        <div role="tabPanel" className={classNames} aria-hidden={!isActive}>
            {children}
        </div>
    );
  }
}

TabPaneComponent.displayName = 'TabPaneComponent';

// Uncomment properties you need
TabPaneComponent.propTypes = {
    tab: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.node]).isRequired,
    order: React.PropTypes.string.isRequired,
    disable: React.PropTypes.bool,
    isActive: React.PropTypes.bool
};
// TabPaneComponent.defaultProps = {};

export default TabPaneComponent;
