import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import logo from './piza.jpg';
import './App.css';
import Header from './Header';
import FormElement from './FormElement';
import FoodItemList from './FoodItemList';
import Item from './Item';

class App extends Component {
  constructor(props){
    super(props);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleLikeAction = this.handleLikeAction.bind(this);
    this.handleDislikeAction = this.handleDislikeAction.bind(this);
    this.state = {
      fooditemlist : [],
    }
  }

  handleLikeAction(id){
    const updatedItemList = this.state.fooditemlist.map(item => {
      if(item.id === id)
          item.vote += 1;
      return item;
    });
    this.setState( (old) => {
        return {
          fooditemlist : [...updatedItemList],
        }
    });
  }

  handleDislikeAction(id){
    const updatedItemList = this.state.fooditemlist.map(item => {
      if(item.id === id)
          item.vote -= 1;
      return item;
    });
    this.setState( (old) => {
        return {
          fooditemlist : [...updatedItemList],
        }
    });
  }


  updateState(ob){
      this.setState( () => ({
        fooditemlist : [...this.state.fooditemlist,ob],
      }));
  }

  
  handleFormSubmission(event){
    event.preventDefault();
    const name = event.target.elements.name.value;
    const type = event.target.elements.type.value;
    const restaurant = event.target.elements.restaurant.value;
    const location = event.target.elements.location.value;
    const price = event.target.elements.price.value;
    if(name && type  && restaurant && location && price){
      this.updateState({name : name, type : type, restaurant : restaurant, location : location, price : price, vote : 0, id : uuid()});
    }
    event.target.elements.name.value = "";
    event.target.elements.type.value = "";
    event.target.elements.restaurant.value = "";
    event.target.elements.location.value = "";
    event.target.elements.price.value = "";
    ReactDOM.render(<App />, document.getElementById('root'));
  }
  
  render() {
    return (
      <div>
        <Header title = "Food Rating App"/>
        <FormElement handleFormSubmission = {this.handleFormSubmission}/>
        <Header title = "List Of All The Good Mood Foods"/>
        <FoodItemList fooditemlist = {this.state.fooditemlist} handleDislikeAction = {this.handleDislikeAction} handleLikeAction = {this.handleLikeAction}/>
        </div>
    );
  }
}

export default App;
