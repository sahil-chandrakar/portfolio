import { Box, Typography, IconButton, Stack } from "@mui/material";
import { containerPadding } from "../../styles/spacing";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F9FAFB",
        borderTop: "1px solid #E5E7EB",
        mt: 8,
        py: 4,
        px: containerPadding,
      }}
    >
      {/* CONTENT WRAPPER */}
      <Box
        sx={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
        }}
      >
        {/* COPYRIGHT */}
        <Typography
          sx={{
            color: "#6B7280",
            fontSize: "14px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          © {new Date().getFullYear()} Sahil — All rights reserved.
        </Typography>

        {/* SOCIAL LINKS */}
        <Stack direction="row" spacing={2}>
          <IconButton
            href="https://instagram.com"
            target="_blank"
            sx={{ color: "#111" }}
          >
            <InstagramIcon />
          </IconButton>

          <IconButton
            href="https://twitter.com"
            target="_blank"
            sx={{ color: "#111" }}
          >
            <TwitterIcon />
          </IconButton>

          <IconButton
            href="https://youtu.be"
            target="_blank"
            sx={{ color: "#111" }}
          >
            <YouTubeIcon />
          </IconButton>

          <IconButton
            href="https://linkedin.com"
            target="_blank"
            sx={{ color: "#111" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
