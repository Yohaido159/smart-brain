import React from "react";

class Rank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: "",
    };
  }

  componentDidMount() {
    this.genNumber(this.props.entries);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.entries === this.props.entries &&
      prevProps.name === this.props.name
    ) {
      return null;
    }

    this.genNumber(this.props.entries);
  }

  genNumber = (entries) => {
    fetch(
      `https://i07fnm0f93.execute-api.us-east-1.amazonaws.com/dev/rank?rank=${entries}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ num: data.input }))
      .catch(console.log("err"));
  };
  render() {
    return (
      <div>
        <div className="white f3">
          {`${this.props.name}, your current entry count is...`}
        </div>
        <div className="white f1">{this.props.entries}</div>
        <div className="white f3">{`Rank is: "${this.state.num}"`}</div>
      </div>
    );
  }
}

export default Rank;
