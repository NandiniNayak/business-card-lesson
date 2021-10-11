import React from 'react'

const Form = ({name,surname,email,phone, address :{number, street, suburb,state,postcode,country},onChangePersonal,onChangeAddress }) =>{
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
                <input name="name" type="text" value={name} onChange={onChangePersonal}/>
                <label>SURNAME</label>
                <input name="surname" type="text" value={surname} onChange={onChangePersonal}/>
                <label>EMAIL</label>
                <input name="email" type="email" value={email} onChange={onChangePersonal}/>
                <label>PHONE</label>
                <input name="phone" type="text" value={phone} onChange={onChangePersonal}/>
                 <h1>Address</h1>
                <label>Number</label>
                <input name="number" type="text" value={number} onChange={onChangeAddress}/>
                <label>STREET</label>
                <input name="street" type="text" value={street} onChange={onChangeAddress}/>
                <label>SUBURB</label>
                <input name="suburb" type="text" value={suburb} onChange={onChangeAddress}/>
                <label>STATE</label>
                <input name="state" type="text" value={state} onChange={onChangeAddress}/>
                <label>POSTCODE</label>
                <input name="postcode" type="text" value={postcode} onChange={onChangeAddress}/>
                <label>COUNTRY</label>
                <input name="country" type="text" value={country} onChange={onChangeAddress}/>
            </form>
        </div>
    )
}

export default Form