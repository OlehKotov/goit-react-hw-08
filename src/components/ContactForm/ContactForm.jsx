import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const defaultTheme = createTheme();
const notify = () => toast.success("Successfully created contact!");

const ContactForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: "", number: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addContact(formData));
    setFormData({ name: "", number: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Phonebook
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              type="text"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              label="Number"
              type="phone"
              id="number"
              autoComplete="number"
              value={formData.number}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={notify}
            >
              Add contact
            </Button>
            <Toaster />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ContactForm;
