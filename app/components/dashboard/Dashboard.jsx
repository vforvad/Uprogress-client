import css from './Dashboard.styl';

import CN from 'classnames';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import UserPanel from 'user/panel/UserPanel';
import UserPanelDirections from 'user/panel/directions/UserPanelDirections';
import WidgetTab from 'Widget/Tab/WidgetTab';

class Dashboard extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    directions: PropTypes.object,
    params: PropTypes.object,
    children: PropTypes.object,
    user: PropTypes.object
  };

  static defaultProps = {
    dispatch: () => {},
    directions: {},
    params: {},
    children: {},
    user: {}
  };

  render() {
    const { user, dispatch } = this.props;
    let tabs = {};

    tabs[`/${user.nick}/info`] = 'Progress';
    tabs[`/${user.nick}/shared`] = 'Shared';
    tabs[`/${user.nick}/statistic`] = 'Statistics';

    return (
      <div className={CN(css.dashboard)}>
        <div className="base-info">
          <UserPanel user={user} dispatch={dispatch} />
          <UserPanelDirections
            user={user}
            title="Completed directions"
            icon="finished-icon"
            directions={user.finishedDirections} />
          <UserPanelDirections
            user={user}
            title="New directions"
            icon="new-icon"
            directions={user.newDirections} />
        </div>
        <WidgetTab tabs={tabs} className="horizontal-bottom dashboard-widget" />
        <div className={CN('Card', 'widget-content')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

/**
 * Mapping application state to properties
 * @param  {Object} state Application state
 * @return {Object} Mapped properties
 */
function mapStateToProps(state) {
  return {
    direction: state.directions.list,
    user: state.users.show
  };
}

export default connect(mapStateToProps)(Dashboard);
