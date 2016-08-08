import { connect } from 'react-redux';
import { Component } from 'react';

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return { };
}

class <%= name %> extends Component {
  render() {
    return (
      <div>Hello!</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(<%= name %>);
