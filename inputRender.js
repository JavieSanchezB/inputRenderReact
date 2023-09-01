import React from 'react';

class GetInput extends React.Component {
  render() {
    return (
      <div>
        <h2>Get Input:</h2>
        <input value={this.props.inputValue} onChange={this.props.handleChange} />
      </div>
    );
  }
}

class RenderInput extends React.Component {
  render() {
    return (
      <div>
        <h2>Input Render:</h2>
        <p>{this.props.inputValue}</p>
      </div>
    );
  }
}

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div>
        <GetInput inputValue={this.state.input} handleChange={this.handleChange} />
        <RenderInput inputVal={this.state.input} />
      </div>
    );
  }
}

export default MyApp;
