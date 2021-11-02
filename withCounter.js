import React from "react";


const UpdatedComponent =(OrignalComponent)=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                count:0 
            }
        }
        
        incrementCount = () =>{
            //console.log(prevState)
            this.setState(prev=>{
                return {count:prev.count+1}
            })
        }
        render()
        {
            return <OrignalComponent count={this.state.count} incrementCount={this.incrementCount} />
        }
    }
    return NewComponent
}
export default  UpdatedComponent 
