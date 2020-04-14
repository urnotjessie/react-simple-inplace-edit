import classNames from 'classnames';
import React from 'react';
import './InplaceEdit.css';

interface Props {
  originalValue: string;
  errorMessage?: string;
  onSubmit?: (param?: string) => void;
  validate?: (param: string) => boolean;
  titleClassName?: string;
  formClassName?: string;
  inputClassName?: string;
  errorMessageClassName?: string;
}

interface State {
  isInputValid: boolean;
  isEditing: boolean;
  updatedValue: string;
}
/**
 * A react component that enables in-place editing for text.
 * 
 * The `<InplaceEdit />` component consists of an `<h1>` element that display the text
 * and an `<input>` element that allows users to edit the text
 */
export default class InplaceEdit extends React.Component<Props, State> {
  static defaultProps = {
    originalValue: null,
    errorMessage: null,
    onSubmit: null,
    validate: null,
    titleClassName: null,
    formClassName: null,
    inputClassName: null,
    errorMessageClassName: null,
  };
  state: State = {
    isInputValid: true,
    isEditing: false,
    updatedValue: this.props.originalValue,
  };

  titleClasses = classNames(this.props.titleClassName, 'titleEditing');
  inputClasses = classNames(this.props.inputClassName, 'titleInput');

  onCancel = () => {
    this.setState({isEditing: false});
    if (!this.state.isInputValid || !this.state.updatedValue.length) {
      this.setState({updatedValue: this.props.originalValue});
    }
  }

  onNameClick = () => {
    this.setState({isEditing: true});
  };

  isValidInput = (input: string) => {
    if (this.props.validate) return this.props.validate(input)
    // eslint-disable-next-line no-useless-escape
    return (input.match(/[a-zA-Z0-9\-_\<\>\$\!\,\.\'\s]+/) || [''])[0].length === input.length;
  };

  onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (this.isValidInput(value)) {
      this.setState({
        isInputValid: true,
        updatedValue: value,
      });
    } else {
      this.setState({
        isInputValid: false,
        updatedValue: value,
      });
    }
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (this.state.updatedValue.length && this.state.isInputValid) {
      this.setState({isEditing: false});
      this.props.onSubmit && this.props.onSubmit(this.state.updatedValue);
    } else {
      e.preventDefault();
    }
  };

  handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.keyCode === 27 /* ESC key */) {
      this.onCancel();
    }
  };

  render() {
    const {originalValue, errorMessage, formClassName, errorMessageClassName} = this.props;

    return (
      <div>
        {!this.state.isEditing && (
          <h1
            className={this.titleClasses}
            onClick={this.onNameClick}
          >
            {this.state.isInputValid ? this.state.updatedValue : originalValue}
          </h1>
        )}
        {this.state.isEditing && (
          <form
            className={formClassName}
            onSubmit={this.handleSubmit}
            onKeyDown={this.handleKeyDown}
            onBlur={this.onCancel}
          >
            <input
              className={this.inputClasses}
              type="text"
              autoFocus={true}
              value={this.state.updatedValue}
              onChange={this.onFieldChange}
            />
          </form>
        )}
        {this.state.isEditing && !this.state.isInputValid && errorMessage && (
          <p className={errorMessageClassName}>
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
}