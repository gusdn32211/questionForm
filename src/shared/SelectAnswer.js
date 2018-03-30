import React from "react";
import classNames from "classnames";

export default class SelectAnswer extends React.Component {

  render() {
    return (
      <div class="selectAnswerContainer">
        <button class="floatLeft circle smallCircle"/>
        <div class="floatLeft optionsText">{this.props.question}</div>
        <div class="floatLeft">{this.props.text}</div>
      </div>
    );
  }
}
