import React, {Component} from 'react';

class Item extends Component{
    constructor(props){
        super(props);
    }    

    render(){
        return(
            <div class = "child">
                {this.props.item.name}<br/>
                ({this.props.item.type})<br/>
                At {this.props.item.restaurant}
                ,{this.props.item.location}<br/>
                {this.props.item.price}TK<br/>
                {this.props.item.vote}votes
                <button onClick = { () => {this.props.handleLikeAction(this.props.item.id) } } >+</button>
                <button onClick = { () => {this.props.handleDislikeAction(this.props.item.id)}} >-</button>
            </div>
        );
    }
};

export default Item;