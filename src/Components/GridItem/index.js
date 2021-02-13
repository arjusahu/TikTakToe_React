import React from "react";
import "./GridItem.css";
class GridItem extends React.Component{
  constructor(props)
  {
    super(props);
  }
    handleClick(event)
    {
      // console.log(e
    }
    render()
    {
      console.log(this.props.status)
        return (
        <div className="item" 
        onClick={this.props.status?(()=>this.props.handleClick(this.props.index)):null}>
          {this.props.value}
          </div>
          );
    }
}
export default GridItem;