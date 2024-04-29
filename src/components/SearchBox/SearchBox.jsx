import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";
import { selectStatusFilter } from "../../redux/filters/selectors";
import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Container,
  CssBaseline,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import { IoIosSearch } from "react-icons/io";

const defaultTheme = createTheme();

const SearchBox = () => {
  const selectNameFilter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IoIosSearch className={css.searchIcon} />
          <Box component="form" noValidate sx={{ mt: 1, width: "400px" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              value={selectNameFilter}
              onChange={onChangeFilter}
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SearchBox;
