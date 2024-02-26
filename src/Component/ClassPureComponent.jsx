import React, { Component, PureComponent } from 'react'
import HighOrderComponent from './HOC';

export class ClassPureComponent extends PureComponent {
    constructor(){
        super();
    }
  render() {
    console.log(this.props, "props")
    return (
      <>
        <h1>Data</h1>
      </>
    )
  }
}

export default HighOrderComponent(ClassPureComponent, "Femil", [1,2,3])
