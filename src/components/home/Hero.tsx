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
        pr: { lg: 25, md: 0 },
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
          I build fast, modern and scalable applications using React, Next.js, TypeScript, Python/Django and Java/Spring Boot. I turn ideas into elegant, user-focused digital solutions powered by strong frontend, backend and AI/ML skills.
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
      <Box
        sx={{
          width: { xs: '100%', md: 400, lg: 500 },
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
          overflow: "hidden",
          background: "linear-gradient(to bottom, transparent 30%, #f0f0f0 50%)",
          p: 2,
        }}
      >
        <Box
          component="img"
          src="/assets/2.png"
          alt="developer-img"
          sx={{ width: "100%", display: "block" }}
        />
      </Box>


    </Box>
  );
}
