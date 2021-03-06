import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class DirectionsList extends Component {

  static propTypes = {
    directions: PropTypes.array
  };

  static defaultProps = {
    directions: []
  };

  render() {
    const { directions } = this.props;

    return (
      <div className="directions">
        <div className="directions-list">
          {directions.map((item, index) => {
            return (
              <div className="direction-item" key={index}>
                  <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default connect()(DirectionsList);
