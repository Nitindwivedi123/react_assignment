import React from 'react';

class Currency extends React.Component{

    constructor(props){
        super(props)
        this.state={
            curr:this.props.curr
        }
        
    }

    submit=()=>{
        //
        if (this.props.type1=="UNDollar" && this.props.type2=="CNY"){          
            //this.state.curr=this.props.curr*6.76;
            this.setState({
                curr:this.props.curr*6.76
            })
            console.log(this.state.curr)
                 
        }
        else if (this.props.type1=="UNDollar" && this.props.type2=="RUB"){
            this.state.curr=this.props.curr*57.0;
        }
        else if (this.props.type1=="UNDollar" && this.props.type2=="CANADIANDOLLAR"){
            this.state.curr=this.props.curr*1.30;
        }
        else if (this.props.type1=="UNDollar" && this.props.type2=="BajanDollar"){
            return this.state.curr=this.props.curr*2.01;
        }
        else if (this.props.type1=="CNY" && this.props.type2=="UNDollar"){
            return this.state.curr=this.props.curr*0.15;
        }
        else if (this.props.type1=="CNY" && this.props.type2=="RUB"){
            return this.state.curr=this.props.curr*8.44;
        }
        else if (this.props.type1=="CNY" && this.props.type2=="CANADIANDOLLAR"){
            return this.state.curr=this.props.curr*0.19;
        }
        else if (this.props.type1=="CNY" && this.props.type2=="BajanDollar"){
            return this.state.curr=this.props.curr*0.30;
        }
        else if (this.props.type1=="RUB" && this.props.type2=="UNDollar"){
            return this.state.curr=this.props.curr*0.018;
        }
        else if (this.props.type1=="RUB" && this.props.type2=="CNY"){
            return this.state.curr=this.props.curr*0.12;
        }
        else if (this.props.type1=="RUB" && this.props.type2=="CANADIANDOLLAR"){
            return this.state.curr=this.props.curr*0.023;
        }
        else if (this.props.type1=="RUB" && this.props.type2=="BajanDollar"){
            return this.state.curr=this.props.curr*0.035;
        }
        else if (this.props.type1=="CANADIANDOLLAR" && this.props.type2=="UNDollar"){
            return this.state.curr=this.props.curr*0.77;
        }
        else if (this.props.type1=="CANADIANDOLLAR" && this.props.type2=="CNY"){
            return this.state.curr=this.props.curr*5.19;
        }
        else if (this.props.type1=="CANADIANDOLLAR" && this.props.type2=="RUB"){
            return this.state.curr=this.props.curr*43.85;
        }
        else if (this.props.type1=="CANADIANDOLLAR" && this.props.type2=="BajanDollar"){
            return this.state.curr=this.props.curr*1.55;
        }
        else if (this.props.type1=="BajanDollar" && this.props.type2=="UNDollar"){
            return this.state.curr=this.props.curr*0.50;
        }
        else if (this.props.type1=="BajanDollar" && this.props.type2=="CNY"){
            return this.state.curr=this.props.curr*3.36;
        }
        else if (this.props.type1=="BajanDollar" && this.props.type2=="RUB"){
            return this.state.curr=this.props.curr*28.32;
        }
        else if (this.props.type1=="BajanDollar" && this.props.type2=="CANADIANDOLLAR"){
            return this.state.curr=this.props.curr*0.65;
        }
        console.log(this.state.curr)
      }
    render(){
        return(
            <div>
                <button onClick={this.submit}>Submit</button>
                <h1>
            Currency:{
                this.state.curr
            } 
            </h1> 
                <br></br>
                <>
                                 
                    Type1:{
                        this.props.type1
                    }
                    Type2:{
                        this.props.type2
                    }                      
        </>
            </div>
        )
    }
}
export default Currency;