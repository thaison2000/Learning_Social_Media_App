import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';

const Input = (props:any) => {
    const [value, setValue] = React.useState('');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      props.handleInput(value)
    };
  
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-textarea"
            label={props.title}
            placeholder="..."
            multiline
            value={value}
            onChange={handleChange}
            sx={{'& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: 'green',
                },
              }, '& label.Mui-focused': {
                color: 'green',
              },}}

          />
        </div>
      </Box>
    );
  }

export default Input