import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
  }

  render() {
    return (
      <div>
        HrNYC PROJECT
        <h1> {this.props.projectName}  </h1>
      </div>
    );
  }
}

export default App;
