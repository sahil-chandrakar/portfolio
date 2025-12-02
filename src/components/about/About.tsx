import { Box, Typography } from "@mui/material";
import { containerPadding } from "../../styles/spacing";

const About = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        px: containerPadding,
        py: { xs: 6, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: { xs: 5, md: 20 },
      }}
    >
      <Box
        component="img"
        src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
        alt="about-img"
        sx={{
          width: { xs: "220px", md: "320px" },
          borderRadius: "12px",
        }}
      />

      {/* right sidde text */}
      <Box sx={{ maxWidth: "650px" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            mb: 2,
            fontSize: { xs: "32px", md: "45px" },
          }}
        >
          About Me
        </Typography>

        <Typography
          sx={{ fontSize: "18px", color: "#444", lineHeight: 1.7, mb: 3 }}
        >
          I’m a passionate software developer who enjoys building functional,
          aesthetic and efficient web experiences. My focus is on writing clean,
          scalable code and creating interfaces that feel natural to users.
        </Typography>

        <Typography sx={{ fontSize: "18px", color: "#444", lineHeight: 1.7 }}>
          I work mainly with JavaScript/TypeScript, React, Python and modern UI
          frameworks like Material UI. My goal is simple:
          <strong> build meaningful products that people enjoy using.</strong>
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography sx={{ mb: 1 }}>🎯 Strong focus on UI/UX</Typography>
          <Typography sx={{ mb: 1 }}>
            ⚡ Fast & responsive fullstack development
          </Typography>
          <Typography sx={{ mb: 1 }}>🧩 Problem-solving mindset</Typography>
          <Typography sx={{ mb: 1 }}>
            🚀 Completed Master of Computer Application in AI/ML 
          </Typography>
          <Typography sx={{ mb: 1 }}>
            🚀 Always learning something new
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
