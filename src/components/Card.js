import React from 'react'

const Card = ({name,surname,email,phone, address :{number, street, suburb,state,postcode,country}}) =>{
    const container={
        width:'500px',
        minHeight:'500px',
        backgroundColor:'#F5F5F5',
        margin: '20px auto',
        paddingTop: '100px'
    }
    const card={
        margin: '30px',
        backgroundColor: 'white'
    }
    const title={
        minHeight:'50px',
        backgroundColor:'#0514ed',
        color: 'white',
        paddingTop:'10px',
        textAlign: 'center'
    }
    const content={
        width:'500px',
        minHeight:'270px',
        marginTop:'0'
    }
    const hrStyles ={
        color:'gray',
        width:'430px',
        margin:'0'
    }
    return(
        <div style={container}>
            <div style={card}>
                <h1>Business Card</h1>
                <h2 style={title}>{name} {surname}</h2>
                <div style={content}>
                    <p>EMAIL {email}</p>
                    <hr style={hrStyles}/>
                    <p>PHONE {phone}</p>
                    <hr style={hrStyles}/>
                    <p>ADDRESS {number} {street} {suburb} {state}</p>
                    <hr style={hrStyles}/>
                    <p>POSTCODE {postcode}</p>
                    <hr style={hrStyles}/>
                    <p>COUNTRY {country}</p>
                    <hr style={hrStyles}/>
                </div>
            </div>
        </div>
    )
}

export default Card