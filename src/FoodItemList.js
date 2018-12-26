import React, {Component} from 'react';
import Item from './Item';

class FoodItemList extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div class = "parent">
                {this.props.fooditemlist.map(item => <Item key = {item.id}  handleDislikeAction = {this.props.handleDislikeAction} handleLikeAction = {this.props.handleLikeAction}  item = {item}/>)}
            </div>
        );
    }
};

export default FoodItemList;