import React from "react";
import classNames from "classnames";

export default class AnswerForm extends React.Component {
  	render() {
	    var checkMarkClassNames = classNames({
	      'fas fa-check': true,
	      'opacityNone': !this.props.visible
	    });

	    return (
	        <div class="answerContainer">
	        	<div class="menuIconContainer">
					<i class="fas fa-list floatLeft"></i>
				</div>
				<div class="leftContainerSpacing">
					<button class="circle">
						<i class={checkMarkClassNames}></i>
					</button>
					<input class="textInputContainer answerInputContainer" type="text" value={this.props.value}/>
					<i class="fas fa-times"></i>		
				</div>
			</div>
	    );
	}
}
