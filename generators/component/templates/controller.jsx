import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return { };
}

class <%= name %> extends React.Component {
  render() {
    return (
      <div>Hello!</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(<%= name %>);
