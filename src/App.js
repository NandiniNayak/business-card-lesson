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
      adress: {
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
    // square bracket is to the indicate te key value pair in the object
    const updatedInfo = {
      ...this.state, [event.target.name]:event.target.value
    }
    this.setState(updatedInfo)
  }
  render(){
    return(
      <div>
        <Form
          {...this.state}
          onChangePersonal={this.onChangePersonal}
        />
        <Card
          {...this.state}
        />
      </div>
    )
  }
}

export default App
