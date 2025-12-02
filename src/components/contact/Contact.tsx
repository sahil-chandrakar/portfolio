import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { containerPadding } from "../../styles/spacing";

const Contact = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        px: containerPadding,
        py: { xs: 6, md: 5 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          fontSize: { xs: "32px", md: "45px" },
          mb: 4,
          textAlign: "center",
        }}
      >
        Contact Me
      </Typography>

      <Box
        component="form"
        sx={{
          width: "100%",
          maxWidth: "550px",
          background: "#ffffff",
          borderRadius: "16px",
          padding: { xs: 3, md: 4 },
          boxShadow: "0 8px 28px rgba(0,0,0,0.06)",
          border: "1px solid #f0f0f0",
        }}
      >
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />

          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />

          <TextField
            fullWidth
            label="Message"
            multiline
            minRows={4}
            variant="outlined"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              borderRadius: "10px",
              textTransform: "none",
              backgroundColor: "#0EA5E9",
              fontSize: "16px",
              fontWeight: "600",
              paddingY: "10px",
              "&:hover": {
                backgroundColor: "#2563EB",
              },
            }}
          >
            Send Message
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;
