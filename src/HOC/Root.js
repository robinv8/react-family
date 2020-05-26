import React from 'react';
import * as ApiServices from '../service/api';
export default function Root(WrappedComponent) {
  class Root extends React.Component {
    render() {
      return <WrappedComponent {...this.props}></WrappedComponent>;
    }
  }
  return Root;
}
export { ApiServices };
