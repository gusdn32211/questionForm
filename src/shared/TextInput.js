import React from "react";
import classNames from "classnames";

export default class TextInput extends React.Component {

  render() {

    var myClassNames = classNames({
      'textInputContainer': true,
      'defaultPointsContainer': this.props.defaultPointsContainer
    });

    return (
        <div>
        	<div class="title">{this.props.title}</div>
		  	<input class={myClassNames} type="text" value={this.props.value}/>
		</div>
    );
  }
}
