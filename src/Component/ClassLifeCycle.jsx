import React, { Component } from 'react'

export class ClassLifeCycle extends Component {
    constructor(){
        super();
        this.state = {
            count: 1,
        }
        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log(props, "a");
        console.log(state, "b");
        console.log("getDerivedStateFromProps");
        return true
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    getSnapshotBeforeUpdate(props, state){
        console.log(props, "updateProps");
        console.log(state, "updateState");
        console.log("getSnapshotBeforeUpdate");
        return true
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    
  render() {
    console.log("render")
    return (
      <>
        <h1 className='text-center fw-bold'>Class Life Cycle</h1>
        <h1 className='text-center fw-bold'>Count : {this.state.count}</h1>
        <div className='text-center'>
            <button className='btn btn-success' onClick={() => this.setState({count: this.state.count + 1})}>Click Here</button>
        </div>
      </>
    )
  }
}

export default ClassLifeCycle
