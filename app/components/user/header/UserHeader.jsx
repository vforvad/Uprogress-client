import css from './UserHeader.styl';

import CN from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { signOut } from 'actions/users';

import Button from 'Button/ElementButton';
import Image from 'Image/ElementImage';
import SvgIcon from 'SVGIcon/SVGIcon';

export default class UserHeader extends Component {

  static propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func
  };

  static defaultProps = {
    user: {},
    dispatch: () => {}
  };

  signOut() {
    this.props.dispatch(signOut());
  }

  displayImage(user) {
    if (user.attachment) {
      return <Image size={40} className="circle" src={user.attachment.url} />;
    }
    else {
      return <SvgIcon icon="empty-user" />;
    }
  }

  render() {
    const { user } = this.props;
    const image = this.displayImage(user);

    return (
      <div className={CN(css.userHeader)}>
        <div className="user-nick">
          {image}
          <span className="nick">
            <Link to={`/${user.nick}`}>{user.nick}</Link>
          </span>
        </div>
        <Button size="auto" color="red" onClick={this::this.signOut} className="sign-out-button">Sign out</Button>
      </div>
    );
  }
}
