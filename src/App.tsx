import React from 'react';
import './App.css';

interface Props {
  originalValue: string;
  errorMessage?: string;
  onSubmit?: (param: string) => void;
  validate?: (param: string) => boolean;
}

interface State {
  isInputValid: boolean;
  isEditing: boolean;
  updatedValue: string;
}

export class App extends React.Component<Props, State> {
  state: State = {
    isInputValid: true,
    isEditing: false,
    updatedValue: this.props.originalValue,
  };

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
    const {originalValue, errorMessage} = this.props;

    return (
      <div className="uc-workspaceCollectionHeader-editingWrapper">
        {!this.state.isEditing && (
          <h1
            onClick={this.onNameClick}
          >
            {this.state.isInputValid ? this.state.updatedValue : originalValue}
          </h1>
        )}
        {this.state.isEditing && (
          <div>
            <form
              onSubmit={this.handleSubmit}
              onKeyDown={this.handleKeyDown}
              onBlur={this.onCancel}
            >
              <input
                className="font-sansRegular uc-workspaceCollectionHeader-titleInput"
                data-tn="workspaceBoardHeader-input-title"
                type="text"
                autoFocus={true}
                value={this.state.updatedValue}
                onChange={this.onFieldChange}
              />
            </form>
          </div>
        )}
        {this.state.isEditing && !this.state.isInputValid && errorMessage && (
          <p>
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
}