import React, { Component } from 'react';

class FormElement extends Component{
    constructor(props){
        super(props);
        this.toggole = this.toggole.bind(this);
        this.state = { showForm : true }
    }

    toggole(){
        this.setState( prev => {
            if(prev.showForm){
                return { showForm : false };
            } else {
                return { showForm : true };
            }
        });
    }

    render(){
        return (
            <div>
                {this.state.showForm === true ? <form  class = "head" onSubmit = {this.props.handleFormSubmission}>
                Item Name : <input type = "text/string" name ="name"></input><br/>
                Item Type : <input type = "text/string" name = "type"></input><br/>
                Restaurant Name : <input type = "text/string" name = "restaurant"></input><br/>
                Location : <input type = "text/string" name = "location"></input><br/>
                Price : <input type = "text/string" name = "price"></input><br/>
                <button>Add item</button><button onClick = {this.toggole} >Hide Form</button>
            </form> : <button  class = "head" onClick = {this.toggole} >Show Form</button>
        }
            </div>
        );
    }
};

export default FormElement;

//style = {{display : this.buttonHandler()}}
            //     <div id = "show"><button  style = {{display : this.buttonHandler()}} class = "head" onClick = {this.showForm} >Show Form</button></div>
            //     <div id = "hide"><form  class = "head" onSubmit = {this.props.handleFormSubmission}>
            //         Item Name : <input type = "text/string" name ="name"></input><br/>
            //         Item Type : <input type = "text/string" name = "type"></input><br/>
            //         Restaurant Name : <input type = "text/string" name = "restaurant"></input><br/>
            //         Location : <input type = "text/string" name = "location"></input><br/>
            //         Price : <input type = "text/string" name = "price"></input><br/>
            //         <button>Add item</button><button onClick = {this.hideForm} >Hide Form</button>
            //     </form></div>
