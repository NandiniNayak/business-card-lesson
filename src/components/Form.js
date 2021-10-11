import React from 'react'

const Form = (props) =>{
    const {name,surname,email,phone,address} = props
    const container={
        maxWidth: '500px',
        margin:'0 auto'
    }
    const card={
        display:'flex',
        flexDirection: 'column'
    }
    return(
        <div style={container}>
            <h1>Personal Details</h1>
            <form style={card}>
                <label>GIVEN NAME</label>
                <input name="name" type="text" value={name} onChange={props.onChangePersonal}/>
                <label>SURNAME</label>
                <input name="surname" type="text" value={surname} onChange={props.onChangePersonal}/>
                <label>EMAIL</label>
                <input name="email" type="text" value={email} onChange={props.onChangePersonal}/>
                <label>PHONE</label>
                <input name="phone" type="text" value={phone} onChange={props.onChangePersonal}/>
            </form>
        </div>
    )
}

export default Form