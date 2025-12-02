import { Box, Button, Stack, Typography } from "@mui/material";
import { containerPadding } from "../../styles/spacing";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: containerPadding,
        flexDirection: { xs: "column", md: "row" },
        pt: { xs: 5, md: 0 },
        pr: { lg: 35, md: 0 },
      }}
    >
      <Box sx={{ maxWidth: "550px" }}>
        <Typography
          sx={{
            fontSize: "18px",
            color: "#6A6A6A",
            mb: 1,
          }}
        >
          Hi, I’m Sahil 👋
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: "900",
            mb: 2,
            fontSize: { xs: "40px", md: "55px" },
            lineHeight: 1.2,
          }}
        >
          Software Developer
        </Typography>

        <Typography sx={{ color: "#555", fontSize: "18px", mb: 3 }}>
          I build fast, modern and clean web applications using TypeScript,
          React and Node.js. I enjoy turning ideas into smooth, user-friendly
          digital experiences.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#EF4444",
              "&:hover": { backgroundColor: "#DC2626" },
            }}
          >
            View My Work
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              backgroundColor: "#0EA5E9",
              "&:hover": { backgroundColor: "#2563EB" },
              color: "white",
            }}
          >
            Contact Me
          </Button>
        </Stack>
      </Box>

      {/* right side  */}
      <Box sx={{ mt: { xs: 4, md: 0 } }}>
        <Box
          component="img"
          src="https://img.icons8.com/fluency/512/programming.png"
          alt="developer-img"
          sx={{
            width: { xs: "250px", md: "400px", lg:'500px', },
          }}
        ></Box>
      </Box>
    </Box>
  );
}
