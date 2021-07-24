import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Register = (props)=>{

    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [businessname, setbusinessname] = useState('')
    const [address, setaddress] = useState('')
    

    const handleUserName = (e) =>{
        const value = e.target.value;
        setusername(value)
    }

    const handleEmail = (e) =>{
        const value = e.target.value;
        setemail(value)
    }

    const handlePassword = (e) =>{
        const value = e.target.value;
        setpassword(value)
    }

    const handleBusinessName = (e) =>{
        const value = e.target.value;
        setbusinessname(value)
    }
    
    const handleAddress = (e) =>{
        const value = e.target.value;
        setaddress(value)
    }

    const  handleRegister= (e) =>{
        
        e.preventDefault();
        
        const registerData={
            username:username,
            email:email,
            password:password,
            businessName: businessname,
            address : address
        }

        console.log('register', registerData)
        requestRegistration(registerData)

    }

    const requestRegistration = (data)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/users/register',data)
            .then((response)=>{
                const result = response.data;
                if(result.hasOwnProperty('errors')){
                    alert('bad response')
                    console.log('error',result)
                }
                else{
                    console.log('result',result)
                    props.history.push('/login')
                }
            })
            .catch(err=>{
                alert('error in getting response')
                console.log('error',err)
            })
    }

    return(
    <div>
            <p>Register</p>
            <form onSubmit={handleRegister}>
                <div>
                    <label>User Name</label>
                    <input type="text" value={username} onChange={handleUserName}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={email} onChange={handleEmail}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" value={password} onChange={handlePassword}/>
                </div>
                <div>
                    <label>Business Name</label>
                    <input type="text" value={businessname} onChange={handleBusinessName}/>
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" value={address} onChange={handleAddress}/>
                </div>

                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register