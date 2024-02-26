import React from 'react'

const HighOrderComponent = (WrapperComponent, props, ary) => {
    
    class HOC extends React.Component {
      render() {
        return <WrapperComponent data={props} ary={ary}/>
      }
    }
    return HOC
    
}

export default HighOrderComponent
