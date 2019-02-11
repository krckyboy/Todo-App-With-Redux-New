import React, { Component } from "react";

class Form extends Component {
  componentDidMount() {
    // Comment in dev mode because it's annoying
    // this.input.focus();
  }

  onSubmit = e => {
    e.preventDefault();
    this.handleEmptyInput();
    this.props.addTodo(this.input.value);
    this.resetAndFocus();
  };

  resetAndFocus = () => {
    this.input.value = "";
    this.input.focus();
  };

  handleEmptyInput = () => {
    if (!this.input.value.trim()) {
      this.resetAndFocus();
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          type="text"
          required={true}
          placeholder="What's your next todo?"
          ref={input => (this.input = input)}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
