import React from 'react';
import './App.css';

interface Props {
  originalValue: string;
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

  isValidInput = (value) => {
    // eslint-disable-next-line no-useless-escape
    return (value.match(/[a-zA-Z0-9\-_\<\>\$\!\,\.\'\s]+/) || [''])[0].length === value.length;
  };

  onFieldChange = (e) => {
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

  handleSubmit = (e) => {
    if (this.state.updatedValue.length && this.state.isInputValid) {
      this.setState({isEditing: false});
      // this.props.editCollectionName(this.state.collectionName);
    } else {
      e.preventDefault();
    }
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 27 /* ESC key */) {
      this.onCancel();
    }
  };

  render() {
    const {originalValue} = this.props;

    return (
      <div className="uc-workspaceCollectionHeader-editingWrapper">
        {!this.state.isEditing && (
          <h1
            onClick={this.onNameClick}
          >
            {originalValue}
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
        {this.state.isEditing && !this.state.isInputValid && (
          <p>
            {`Error message`}
          </p>
        )}
      </div>
    );
  }
}