import React,{useState} from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [input, setInput] = useState({
        name:"",
        email:"",
        password:""
    });

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value 
        }))
    };
    
    const handleSubmit = (e) => {
        e.eventDefault();
        console.log(input);
    };

    const resetState = () => {
        setIsSignup(!isSignup);
        setInput({
            name: "",
            email: "",
            password: ""
        })
    }
    
    console.log(isSignup);
    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <Box display="flex" 
                flexDirection={"column"} 
                maxWidth={400} 
                alignItems={"center"} 
                margin="auto"
                marginTop={5}
                padding={3}
                borderRadius={5}
                boxShadow={"5px 5px 10px #ccc"}
                sx={{
                    ":hover":{
                        boxShadow:'10px 10px 20px #ccc'
                    }
                }}
                >                    
                <Typography 
                    variant="h4" 
                    padding={3} 
                    textAlign="center">{isSignup ? "Sign Up" : "Sign In"}</Typography>

                {isSignup && 
                <TextField 
                    name="name" 
                    value={input.name} 
                    onChange={handleChange}
                    margin="normal" 
                    type={'text'} 
                    variant="outlined" 
                    placeholder="Name"/>}
                        
                <TextField 
                    name="email" 
                    value={input.email} 
                    onChange={handleChange}
                    margin="normal" 
                    type={'email'} 
                    variant="outlined" 
                    placeholder="Email"/>

                <TextField 
                    name="password" 
                    value={input.password} 
                    onChange={handleChange}
                    margin="normal" 
                    type={'password'} 
                    variant="outlined" 
                    placeholder="Password"/>

                <Button 
                    endIcon={isSignup ? <HowToRegOutlinedIcon/> : <LoginOutlinedIcon/>}                
                    type="submit"
                    sx={{marginTop:3, borderRadius:3 }}                 
                    variant="contained" 
                    color="warning">
                    {isSignup ? "Sign up" : "Let's Go"}</Button>
                    
                <Button 
                    endIcon={isSignup ? <LoginOutlinedIcon/> : <HowToRegOutlinedIcon/>}
                    onClick={resetState}
                    sx={{marginTop:3, borderRadius:3 }}>
                    {isSignup ? "login" : "Signup"}
                </Button>
                </Box>
            </form>
        </div>
    )
}

export default Auth