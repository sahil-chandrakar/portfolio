import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import type { ProjectsDataType } from "../../utiles/data";

const ProjectCard = ({
  projectName,
  githubLink,
  liveLink,
  techStack,
}: ProjectsDataType) => {
  const techs = techStack.split(","); // Convert "React, TypeScript" -> ["React"," TypeScript"]

  return (
    <Card
      sx={{
        borderRadius: "16px",
        padding: 2,
        width: { xs: "100%", sm: "48%", md: "30%" },
        border: "1px solid #f0f0f0",
        transition: "0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0px 12px 30px rgba(0,0,0,0.12)",
        },
      }}
    >
      <CardContent>
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            fontSize: "20px",
            mb: 2,
          }}
        >
          {projectName}
        </Typography>

        {/* Tech Chips */}
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 3 }}>
          {techs.map((t, index) => (
            <Chip
              key={index}
              label={t.trim()}
              size="small"
              sx={{
                backgroundColor: "#F3F4F6",
                color: "#111827",
                fontWeight: 500,
              }}
            />
          ))}
        </Stack>

        {/* Buttons */}
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href={githubLink}
            target="_blank"
            sx={{
              textTransform: "none",
              backgroundColor: "#0EA5E9",
              "&:hover": { backgroundColor: "#0284C7" },
            }}
          >
            GitHub
          </Button>

          <Button
            variant="contained"
            startIcon={<LaunchIcon />}
            href={liveLink}
            target="_blank"
            sx={{
              textTransform: "none",
              backgroundColor: "#0EA5E9",
              "&:hover": { backgroundColor: "#0284C7" },
            }}
          >
            Live
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
