import React from "react";
import GridItem from "../GridItem" // after Grid folder there is nothing so it will search for index.js
 import "./App.css";
 import Header from "../Header";
 import Footer from "../Footer";
class App extends React.Component{
    constructor()
    {
        super();
        this.state={
            gameState:["","","","","","","","",""],
            currentPlayer:"X",
            status:true
        }
        this.winningMatrix = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
     this.copygameState=[];
    }


reset=()=>{
    this.setState({
        gameState:["","","","","","","","",""],
        currentPlayer:"X"
    })
}


    winningCondition() {
        for (let i = 0; i < this.winningMatrix.length; i++) {
            let matrix = this.winningMatrix[i];
            let a = this.copygameState[matrix[0]];
            let b = this.copygameState[matrix[1]];
            let c = this.copygameState[matrix[2]];
            if (a == "" || b == "" || c == "")
            {
                continue;
            }
            if (a == b && b == c) {
        
                alert("won");
                this.setState({status:false});
                return;
                
            }
        }
                if (!this.copygameState.includes("")) {
                    alert("Draw!")
                    this.setState({status:false});
                    return;
                   
                
            
        }
    }


    handleClick=(index)=>
    {
        console.log("clicked");
         this.copygameState=[...this.state.gameState];
        if (this.copygameState[index]=="" && this .state.status==true)
        {
        this.copygameState[index]=this.state.currentPlayer;
         this.winningCondition();
        this.setState({
            gameState:this.copygameState,
            currentPlayer:this.state.currentPlayer=="X"?"0":"X"
        })
       
        }
    }
    render(){
      let row=this.state.gameState.map((value,index)=>(
      <GridItem value={value} index={index} handleClick={this.handleClick} status={this.state.status}/>
      ));
        return (
            <>
            <Header/>
            <div className="grid">{row}</div>
            <Footer turn={this.state.currentPlayer}/>
            <button onClick={this.reset} style={{textAlign:"center"}}>Reset</button>
             </>

        )
    }
}

export default App;