import React from "react";
import "./Footer.css";

class Footer extends React.Component{
    constructor(props)
    {
        super(props);
    }
render()
{
    return <div>player {this.props.turn}'s turn </div>;
}
}
export default Footer;
