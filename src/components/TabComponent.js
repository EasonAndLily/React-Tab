'use strict';

import React from 'react';
import TabNav from './TabNavComponent';
import TabContent from './TabContentComponent';

require('styles//Tab.css');

class TabComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);

    const currProps = this.props;
    let activeIndex;
    if ('activeIndex' in currProps) {
        activeIndex = currProps.activeIndex;
    } else if ('defaultActiveIndex' in currProps) {
        activeIndex = currProps.defaultActiveIndex;
    }
    this.state = {
        activeIndex,
        preIndex: activeIndex
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('activeIndex' in nextProps) {
        this.setState({activeIndex: nextProps.activeIndex});
    }
  }

  handleTabClick(activeIndex) {
    const preIndex = this.state.activeIndex;
    if (this.state.activeIndex !== activeIndex &&
        'defaultActiveIndex' in this.props) {
        this.setState({activeIndex, preIndex});
    }
    this.props.onChange({activeIndex, preIndex});
  }

  renderTabNav() {
    const { classPrefix, children } = this.props;

    return (
            <TabNav key="tabBar" classPrefix={classPrefix}
                onTabClick={this.handleTabClick}
                panels={children}
                activeIndex={this.state.activeIndex}>
            </TabNav>
        );
  }

  renderTabContent() {
    const {classPrefix, children} = this.props;
    return (
        <TabContent key="tabContent" classPrefix={classPrefix}
            panels={children}
            activeIndex={this.state.activeIndex}>
        </TabContent>
    );
  }

  render() {
    // const { className } = this.props;
    // const classes = classames(className, 'ui-tabs');
    return (
      <div className="tab-component" >
        {this.renderTabNav()}
        {this.renderTabContent()}
      </div>
    );
  }
}

TabComponent.displayName = 'TabComponent';

// Uncomment properties you need
TabComponent.propTypes = {
    className: React.PropTypes.string,
    classPrefix: React.PropTypes.string,
    children: React.PropTypes.oneOfType([React.PropTypes.arrayOf(React.PropTypes.node), React.PropTypes.node]),
    defaultActiveIndex: React.PropTypes.number,
    activeIndex: React.PropTypes.number,
    onChange: React.PropTypes.func
};

TabComponent.defaultProps = {
    classPrefix: 'tabs',
    onChange: () => {}
};

export default TabComponent;
