import { Box, Typography } from "@mui/material";
import { containerPadding } from "../../styles/spacing";
import ProjectCard from "./ProjectCard";
import { projects } from "../../utiles/data";


const Projects = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        px: containerPadding,
        py: { xs: 6, md: 5 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          fontSize: { xs: "32px", md: "45px" },
          mb: { xs: 4, md: 6 },
        }}
      >
        My Projects
      </Typography>

      
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 3, md: 4 },
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {
          projects.map((data)=>(
            <ProjectCard 
              key={data.projectName}
              projectName={data.projectName}
              githubLink={data.githubLink}
              liveLink={data.liveLink}
              techStack={data.techStack}
            />
          ))
        }
        {/* ProjectCard2 */}
        {/* ProjectCard3 */}
      </Box>
    </Box>
  );
};

export default Projects;
