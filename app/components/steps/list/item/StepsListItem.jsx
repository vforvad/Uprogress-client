import css from './StepsListItem.styl';
import CN from 'classnames';

import React, { Component, PropTypes } from 'react';
import { updateStep, deleteStep } from 'actions/steps';

import CheckBox from 'CheckBox/ElementCheckBox';

export default class StepsListItem extends Component {

  state = {
    step: {
      is_done: false
    }
  };

  static propTypes = {
    step: PropTypes.object,
    dispatch: PropTypes.func
  };

  static defaultProps = {
    step: {},
    dispatch: () => {}
  };

  componentWillMount() {
    this.setState({ step: this.props.step });
  }

  handleChanges(event) {
    if (event.target.type === 'checkbox') {
      this.changeState(event);
      this.props.dispatch(updateStep(
        this.state.step.direction_id,
        this.state.step.id,
        this.state.step
      ));
    }
    else {
      this.changeState(event);
    }
  }

  changeState(event) {
    let state = this.state.step;

    state[event.target.name] = Boolean(event.target.type.match(/text/)) ? event.target.value : event.target.checked;
    this.setState({ step: state });
  }

  displayTitle(state) {
    let template;

    if (state.is_done) {
      template = (<strike>{state.title}</strike>);
    }
    else {
      template = state.title;
    }

    return template;
  }

  deleteStep() {
    this.props.dispatch(deleteStep(this.state.step.direction_id, this.state.step.id));
  }

  render() {
    let { step } = this.state;
    const title = this.displayTitle(step);

    return (
      <div className={CN(css.stepsListItem)}>
        <CheckBox name="is_done"
          checked={step.is_done}
          onChange={ this::this.handleChanges }/>
        {title}
        <a className="delete-icon" onClick={this::this.deleteStep}>
          <img title="Delete" src="/images/delete.png" />
        </a>
      </div>
    );
  }
}
