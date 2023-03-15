import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./App.css";

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 500
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              style={{ fontSize: 11, marginBottom: 20 }}
            >
              *Required fields.
            </Typography>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <Typography variant="caption" display="block" gutterBottom>
                  Date of Birth*
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                  <div className="customDatePickerWidth">
                    <DatePicker
                      renderInput={(params) => {
                        return (
                          <TextField
                            {...params}
                            label="fullWidth"
                          />
                        );
                      }}
                    />
                  </div>
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item sm={6}>
                <Typography variant="caption" display="block" gutterBottom>
                  Zip Code*
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="zipCode"
                  name="zipCode"
                  autoComplete="zip-code"
                  style={{ marginTop: 7 }}
                />
              </Grid>
              <Grid item xs={12}>
              <Typography variant="caption" display="block" gutterBottom>
                  Mobile Number
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="mobileNumber"
                  name="mobileNumber"
                  autoComplete="mobile-number"
                />
              </Grid>
              <Grid item xs={12}>
              <Typography variant="caption" display="block" gutterBottom>
                  Promo Code
                </Typography>
                <TextField
                  required
                  fullWidth
                  name="promoCode"
                  type="promoCode"
                  id="promoCode"
                  autoComplete="promo-code"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
