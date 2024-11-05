import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    console.log("login efetuado!");
    console.log(`Email: ${email}`);
    console.log(`password: ${password}`);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding={3}
    >
      <Typography variant="h4" gutterBottom>
        Login page
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("email", {
            required: "Email é obrigatório!",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Precisa ser um email válido!",
            },
          })}
          type="text"
          label="Email"
          placeholder="voce@exemplo.com"
          color={errors.email ? "error" : "primary"}
          required
          fullWidth
          margin="normal"
        />
        {errors.email && (
          <FormHelperText error>{errors.email.message}</FormHelperText>
        )}
        <TextField
          {...register("password", {
            required: "senha é obrigatória!",
            minLength: {
              value: 5,
              message: "Senha deve conter pelo menos 5 caracteres",
            },
          })}
          type="password"
          label="Senha"
          placeholder="********"
          color={errors.password ? "error" : "primary"}
          required
          fullWidth
          margin="normal"
        />
        {errors.password && (
          <FormHelperText error>{errors.password.message}</FormHelperText>
        )}
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;