import React, { Component } from 'react';
import 'images/sprite.svg';

export default class ElementLogoIcon extends Component {

  static propTypes = {
    className: React.PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    // let icon = `<use xlink:href="/images/sprite.svg#${this.props.icon}" />`;

    return (
      <svg x="0px" y="0px" viewBox="0 0 363.3 320.7" enableBackground="new 0 0 363.3 320.7">
        <g id="Layer_2">
        </g>
        <g id="Layer_3">
          <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="96.8767" y1="200.6363" x2="267.9059" y2="43.8418">
            <stop offset="0%" style={{ stopColor: '#00A669' }}/>
            <stop offset="1%" style={{ stopColor: '#34EA5C' }}/>
          </linearGradient>
          <circle fill="url(#SVGID_1_)" cx="181.9" cy="122.7" r="115.3"/>
        </g>
        <g id="Layer_1">
          <g>
            <path fill="#444444" d="M13.5,267.3c1.8-1.5,5.3-0.1,5.1,2.5c0.1,8.9-0.1,17.9,0.1,26.9c0.2,6,7.1,10.9,12.7,8.5
              c3.9-1.2,6.6-5.2,6.7-9.2c0.2-9-0.1-18.1,0.1-27.1c0.5-3.2,6.3-2.6,5.9,0.8c0,9.1,0,18.1,0,27.2c-0.1,8.2-7.8,15.4-16,15
              c-8.2,0.4-15.6-6.9-15.8-15c-0.1-8.4,0-16.7-0.1-25.1C12.4,270.3,12,268.3,13.5,267.3L13.5,267.3z"/>
            <path fill="#444444" d="M184.3,288.8c-0.1-10,7.5-19.1,17-21.5c7.3-1.5,15.6,0,20.8,5.5c0,1.2-0.1,2.3-0.3,3.5
              c-0.7,0.3-2,0.9-2.7,1.2c-4.5-2.8-9.6-5.7-15.1-4.3c-8.1,1.3-14.5,9.4-13.4,17.6c0.4,7.2,6.3,13.6,13.4,14.7c4,1,8-0.6,11.6-2
              c0.1-2.9,0.1-5.8,0.1-8.7c-2.9-0.1-5.7,0.1-8.6-0.2c-3.1-0.8-2.5-6.1,0.8-6.1c3.7-0.1,7.5-0.1,11.2,0c1.6,0,3.1,1.6,2.9,3.3
              c0.1,4.4,0.1,8.7,0,13.1c0.2,1.9-1.9,2.7-3.2,3.7c-4.9,3.2-11.1,3.9-16.8,2.9C191.7,309.4,183.8,299.3,184.3,288.8L184.3,288.8z"
              />
            <path fill="#444444" d="M260.2,269.7c-0.2-1.7,1.2-3.1,2.9-2.9c9.1-0.1,18.2,0.1,27.3-0.1c2.3,1.5,2.3,4.5,0,6.1
              c-8.1-0.1-16.2,0-24.3-0.1c0,4.4,0,8.9,0,13.4c5.9,0,11.8,0.1,17.7-0.1c1.1,1.2,2,2.5,2.1,4.1c-0.7,0.7-1.5,1.5-2.2,2.2
              c-5.9,0-11.8,0-17.6,0c0,4.5,0,8.9,0,13.4c8.1,0,16.2,0.1,24.2-0.1c2.3,1.6,2.3,4.6,0,6.1c-9.1-0.2-18.3,0-27.4-0.1
              c-1.6,0.2-3.1-1.2-2.9-2.9C260.2,295.9,260.2,282.8,260.2,269.7L260.2,269.7z"/>
            <path fill="#444444" d="M304.7,267.4c5.7-2.1,13,0.4,15.1,6.4c0,2.1-1.5,3.5-3.6,3.6c-2.7-1.5-4.8-5.8-8.5-4.2
              c-4.1,0.8-5.8,6.9-2.2,9.4c4,2,8.8,2.5,11.8,6.1c6.3,5.3,5,16.3-1.7,20.7c-6.1,4.6-16.2,2.9-20.1-3.9c-1.1-1.6-0.2-3.9,1.5-4.7
              c3.2-0.8,4.2,3.2,6.8,4.3c3.8,2.3,9,0,10.6-4.1c1.5-3.1,0.3-7.2-2.7-8.9c-3.8-2.3-8.9-2.5-11.8-6.1
              C294.7,280.3,297.5,270,304.7,267.4L304.7,267.4z"/>
            <path fill="#444444" d="M334.7,267.4c5.4-1.9,12.2,0.1,14.7,5.5c1.5,2.7-2.7,6-4.7,3.4c-1.8-1.9-4.2-4.5-7-3.2
              c-3.2,0.8-5,4.5-3.7,7.5c1.1,2.5,4.1,2.8,6.4,3.7c3.8,1.1,7.1,3.7,9.4,6.9c3.1,5.4,1.9,13-2.9,17.1c-6.1,5.8-17.8,4.1-21.5-3.7
              c-0.9-2.4,1.6-4.8,3.9-4c2.2,1.8,3.9,4.7,7,5.1c5.8,1.1,11.2-5.9,8.1-11.1c-3-5.4-10.7-4.1-14.3-8.8
              C324.7,280.4,327.5,270,334.7,267.4L334.7,267.4z"/>
            <path fill="#444444" d="M91.2,269.9c-5.1-4.3-12-2.9-18.1-3c-1.7-0.2-3.1,1.2-2.9,2.9c0,13.1,0,26.1,0,39.2
              c-0.6,3.5,5.3,4.2,5.9,0.9c0.3-4.4,0-8.8,0.1-13.1c5.5,0.3,11.7,0.3,15.9-3.9C99.1,287,98.5,275.1,91.2,269.9z M87,288.9
              c-3.1,2.3-7.1,1.3-10.7,1.6c-0.1-5.9,0-11.7,0-17.6c4.2,0,9.1-0.5,12.1,2.9C92.2,279.2,91.4,286.2,87,288.9z"/>
            <path fill="#444444" d="M131,307.9c-2.8-5.1-6.2-9.9-9.2-14.9c2.5-1.8,5.1-4,6.2-7c2.8-6.3-0.2-14.5-6.3-17.5
              c-4.4-2.6-9.7-1.3-14.5-1.6c-2,0.2-5.5-0.7-6,2c-0.2,13.4-0.1,26.7-0.1,40.1c-0.5,3.4,5.4,4,5.9,0.8c0.3-5,0-10.1,0.1-15.1
              c2.7,0,5.5,0,8.2,0c3.6,5.4,6.8,11.1,10.5,16.4C128,313.3,132.3,310.9,131,307.9z M118.2,287.8c-3.5,1.1-7.3,0.4-10.9,0.6
              c-0.1-5.2,0-10.4,0-15.6c4.3,0.3,9.4-1.1,13,2.1C124.4,278.3,123.3,285.9,118.2,287.8z"/>
            <path fill="#444444" d="M179.3,286c-0.8-6.9-5.3-12.9-11.1-16.4c-5.2-3.2-11.8-3.5-17.6-2.2c-6.8,2-12.5,7.2-15,13.8
              c-2.7,7.2-1.5,15.7,3.2,21.8c4.4,5.9,11.9,9.5,19.3,8.8C171.1,311.8,181.7,298.6,179.3,286z M155.1,305.7
              c-7.8-0.8-14.6-7.9-14.5-15.9c-0.5-7.4,5-14.4,12-16.3c9.8-3.1,20.8,5.2,20.8,15.4C173.9,298.4,164.6,307.1,155.1,305.7z"/>
            <path fill="#444444" d="M255.8,307.3c-2.8-4.9-6-9.5-8.9-14.4c2.6-1.8,5.2-4.1,6.2-7.2c2.5-6.1-0.1-13.8-5.9-17
              c-4.5-2.9-10-1.6-15.1-1.9c-2,0.2-5.4-0.7-5.9,2.1c-0.2,13.3,0,26.7-0.1,40.1c-0.5,3.5,5.5,4,5.9,0.8c0.3-5,0-10,0.1-15.1
              c2.8,0,5.5,0,8.3,0c3.1,4.9,6.1,9.7,9.2,14.6c0.8,1.2,1.7,2.9,3.5,2.6C255.4,312.1,257.1,309.1,255.8,307.3z M242.7,288
              c-3.4,0.7-7,0.3-10.4,0.4c-0.1-5.2,0-10.4,0-15.6c4.3,0.3,9.4-1.1,13,2C249.6,278.4,248.1,286.4,242.7,288z"/>
            <path fill="#444444" d="M50.5,293.3c4.8-0.2,9.6-0.1,14.4,0c2.2,0.5,2.9,3.2,1.6,4.9c-1.4,1.5-3.5,1-5.3,1.1
              c-3.6-0.1-7.2,0.1-10.8-0.1C47.4,298.6,47.5,293.6,50.5,293.3L50.5,293.3z"/>
            </g>
            <path fill="#F6F6F6" d="M137.1,65.4c2.4-6.4,14-5.4,14.9,1.6c-8.4,30.7-16.6,61.6-25,92.4c-1.4,3.6,0.4,8.1,4.2,9.3
              c4,1.7,8.9-1.1,9.6-5.4c9.1-34,18.3-68,27.4-102.1c15.9,0,31.8,0.1,47.7,0c4.7-0.2,9.3,1.3,13.9,2.4c8.5,3.3,15.5,10.1,19.2,18.5
              c3,8.6,4,18.1,1.5,27c-0.7,4.3-2.6,8.2-5.3,11.6c-6.4,9.6-18.1,14.5-29.4,14.5c-10.2,0-20.5-0.1-30.7,0c-2.6-1.5-5.2-3.7-5.3-7
              c-0.4-3.6,2.4-6.4,5.3-8.1c9.9,0.1,19.7,0,29.6,0c5.9,0.1,12-1.7,16.1-6c5.8-5.6,6.9-14.4,5.4-21.9c-1.3-7.2-7.1-13.4-14.2-15.2
              c-5-1.4-10.2-0.8-15.3-0.9c-9.1,0.1-18.3-0.2-27.4,0.2c-8.1,30.6-16.5,61.1-24.6,91.7c-1.4,6.1-5.9,11.1-11.4,13.8
              c-3.1,1.1-6.3,1.8-9.5,2.3c-5.4-0.7-11-2-15-5.9c-6-5.5-8.7-14.5-6.1-22.3C120.9,125.8,129.1,95.6,137.1,65.4L137.1,65.4z"/>
        </g>
      </svg>
      );
  }
}
