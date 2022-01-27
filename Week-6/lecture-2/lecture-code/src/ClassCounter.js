import { Component } from 'react';

class ClassCounter extends Component {

  constructor() {
    super();

    this.state = {
      counter: 0,
      text: "Do I survive?"
    };

    this.increment = this.increment.bind(this);
  }

  componentDidMount() {
    console.log("Class Counter mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Class Counter updated!", prevState);
  }

  componentWillUnmount() {
    console.log("Class Counter Unmounted!!");
  }

  increment() {
    console.log("Increment");
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const { props } = this;

    return (
      <div>
        <div>
          {props.label}
        </div>
        <span>{this.state.counter} </span>
        <button onClick={this.increment}>Increment</button>

        <div>{this.state.text}</div>
        <input
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })} />
      </div>
    );
  }

}

export default ClassCounter;