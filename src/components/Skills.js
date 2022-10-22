import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import GridCardContent from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Animated } from "react-animated-css";
import { Grid } from '@mui/material';
import projects from '../list/projects'
import Direction from './Direction'
export default function Skills() {
  return (
    <div>
      <Container sx={{ 'marginTop': '10px', alignItems: "center", justifyContent: 'center' }}>
        <Animated animationIn="zoomInRight" animationOut="shake" animationInDuration={900} animationOutDuration={1000} isVisible={true} animateOnMount>
          <Direction />
          <Grid container sx={{ alignItems: "center", justifyContent: 'center' }}>
            {projects.map((project) => (
              <Grid className="grid" items xs={8} sx={{ 'margin': '10px 20px', 'height': '100%' }}>
                <Animated animationIn="flipInY" animationOut="shake" animationInDuration={900} animationOutDuration={1000} isVisible={true} animateOnMount>
                  <Card className="my_project">
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="100%"
                      image={project.image[0]}
                    />
                    <CardContent sx={{ color: 'white' }}>
                      <div className="project_content">
                        <Typography gutterBottom variant="h5" component="div">
                          <a href={project.link}>{project.name}</a>
                        </Typography>
                        <Typography variant="body2" >
                          {project.description}
                        </Typography>
                      </div>

                      <div className="tech">
                        {project.tech.map((tec) => (
                          <i class={tec}></i>
                        ))}

                      </div>
                    </CardContent>

                  </Card>
                </Animated>

              </Grid>
            ))}

          </Grid>
        </Animated>
      </Container>

    </div>
  )
}
