import React, { useRef, useState, useEffect, useContext }  from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import UserContext from './UserContext';
import '../helpers/array.js'
import { Typography } from "@mui/material";

export function UsersForm(props) {
  
  const {users, setUsers} = useContext(UserContext);

  const valueRef = useRef({
    "name":"",
    "surname":"",
    "email":""
  });

  const sendValue = () => {
    let newUser = {
        name: valueRef.current.name.value,
        surname: valueRef.current.surname.value,
        email: valueRef.current.email.value
    };
    console.log(valueRef);
    console.log(users);

    setUsers([...users, newUser]);
  }

  return (
    <Box sx={{ m:0, '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
      <form align="center" noValidate autoComplete='off'>
        <Typography sx={{m:2}} align="center" variant="h7" component="div">
        Dodaj nowego użytkownika
        </Typography>
        
        <TextField id='name' label='Imię' variant='outlined' inputRef={ref => valueRef.current.name = ref}/><br/>
        <TextField id='surname' label='Nazwisko' variant='outlined' inputRef={ref => valueRef.current.surname = ref}/><br/>
        <TextField id='email' label='Email' variant='outlined' inputRef={ref => valueRef.current.email = ref}/><br/>
        
        <Button sx={{m:2}}variant='contained' color='primary' size='small' onClick={sendValue}>
          Wyślij
        </Button>
        </form>
    </Box>
  );
}
export default UsersForm;
