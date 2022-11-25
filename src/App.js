import './App.css';
import { Box, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {createAccountSchema} from './yupSchema';

const wait = (duration = 1000) => {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  })
}

function App() {

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(createAccountSchema),
    mode: 'onTouched'
  });

  const onSubmit = async (data) => {
    await wait(2000);
    console.log(data)
  }
  
  return (
    <div className="App">
      <Box 
        className="App-header"
        onSubmit={handleSubmit(onSubmit)}
        component="form"
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "1rem", mb: '2rem', width:'30%' }}
        >
          <TextField variant="outlined" type="text" name="firstname" label="Prénom" error={errors.firstname} helperText={errors.firstname?.message} {...register("firstname")} />
          <TextField variant='outlined' type='text' name='lastname' label='Nom' error={errors.lastname} helperText={errors.lastname?.message} {...register("lastname")}/>
          <TextField variant='outlined' type='email' name='email' label='Email' error={errors.email} helperText={errors.email?.message} {...register("email")}/>
          <TextField variant='outlined' type='password' name='password' label='Mot de passe' error={errors.password} helperText={errors.password?.message} {...register("password")}/>
          <TextField variant='outlined' type='password' name='confirmPassword' label='Confirmez le mot de passe' error={errors.confirmPassword} helperText={errors.confirmPassword?.message} {...register("confirmPassword")}/>
        </Box>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-around', mb: '2rem', width:'30%' }}
        >
          <Button variant='contained' type='submit'>Submit</Button>
        </Box>
      </Box>
    </div>
  );
}

export default App;
