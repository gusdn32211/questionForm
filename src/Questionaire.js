import React from "react";
import TextInput from './shared/TextInput';
import AnswerForm from './shared/AnswerForm';
import SelectAnswer from './shared/SelectAnswer';

export default class Questionaire extends React.Component {


  render() {
    const questionText = "A reaction between an acid and a base is called a";
    const hintAnswer = "We did a lab experiment on this"
    const a1 = "Neutralization reaction";
    const a2 = "Salt reaction";
    const a3 = "Hydroxide reaction";
    const a4 = "Single replacement reaction";

    return (
    	<div>
			<div class="leftContainer">
				<div class="leftContainerSpacing">
					<div class="header">Editing Question</div>

					<div class="floatRight optionsContainer">
						<i class="fas fa-sort-down floatRight"></i>
						<div class="floatRight optionsText blueFont">Options</div>
					</div>

					<TextInput
					  title="Short Description"
					  value="Types of Reactions" />

        			<div class="title">Question Text*</div>
					<textarea 
					  className="textInputContainer textAreaContainer"
					  value={questionText} />
					
					<TextInput
					  title="Hint"
					  value={hintAnswer} />

		        	<div class="title">Answers *</div>
		        </div>

				<AnswerForm value={a1} visible={true}  />
				<AnswerForm value={a2} />
				<AnswerForm value={a3} />
				<AnswerForm value={a4} />

				<div class="leftContainerSpacing">
					<div class="blueFont marginBottom">Add Answer</div>

					<div class="marginBottom">
						<button class="square"></button>
						<div>Randomize answers for each student</div>
					</div>

					 <div class="marginBottom">
					 	<div class="title">Enumeration</div>
						<select class="textInputContainer enumerationInput">
						    <option value="" disabled selected hidden>a,b,c,d,e,f ...</option>
						 	<option value="a">a</option>
						 	<option value="b">b</option>
						 	<option value="c">c</option>
						 	<option value="d">d</option>
						 	<option value="e">e</option>
						 	<option value="f">f</option>
						 	<option value="g">g</option>
						</select>
					</div>

					<TextInput
					  defaultPointsContainer={true}
					  title="Default Points *"
					  value="1" />

					<button class="blueButton button" type="submit">Save</button>
					<button class="button" type="submit">Save and New</button>
					<button class="button" type="submit">Cancel</button>
				</div>
			</div>

			<div class="rightContainer">
				<div class="rightContainerSpacing">
					
					<span>{questionText}</span>
					<SelectAnswer
						question="a)"
						text={a1} />
					<SelectAnswer
						question="b)"
						text={a2} />
					<SelectAnswer
						question="c)"
						text={a3} />
					<SelectAnswer
						question="d)"
						text={a4} />	

					<div class="hintTextContainer">
						<div class="hintText">Hint:</div>
					</div>											

					<div class="hintAnswer">{hintAnswer}</div>

				</div>
			</div>

	    </div>
    );
  }
}
