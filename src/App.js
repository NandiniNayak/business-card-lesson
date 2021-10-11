import {React, Component} from 'react';
import Form from './components/Form';
import Card from './components/Card'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      surname: '',
      email:'',
      phone:'',
      address: {
        number:'',
        street:'',
        suburb:'',
        state:'',
        postcode:'',
        country:''
      }
    }
  }

  onChangePersonal = (event)=>{
    // take a copy of the object and update its value
    // spread is to take a copy of object
    // square bracket is to the indicate te key as a variable in the key value pair of the object
    const updatedInfo = {
      ...this.state, [event.target.name]:event.target.value
    }
    this.setState(updatedInfo)
  }

  onChangeAddress = (event) => {
    // adress is an Object, hence create a copy and update it
    // spread is to take a copy of object
    // square bracket is to the indicate te key as a variable in the key value pair of the object
    const updatedAddress = {
      ...this.state.address,
      [event.target.name]: event.target.value
    }

    // update the address to the state
    const updatedInfo = {
      ...this.state,
      address: updatedAddress
    }
    // set the state
    this.setState(updatedInfo)
  }
  render(){
    return(
      <div>
        <Form
          {...this.state}
          onChangePersonal={this.onChangePersonal}
          onChangeAddress={this.onChangeAddress}
        />
        <Card
          {...this.state}
        />
      </div>
    )
  }
}

export default App
