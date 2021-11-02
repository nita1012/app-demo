import React ,{Component }  from "react";

class Message extends Component{
    constructor()
    {
        super();
        this.state={
            message:'Welcome nita'
        }
    }

    changeMessage()
    {
        this.setState({
            message:'thank nita'
        })
    }
  render()
  {
      return (
          <div>
      <h1>{this.state.message}</h1>
      <button onClick={()=> this.changeMessage()}>subscribe</button>
          </div>
     
      )
  }
}

export default Message