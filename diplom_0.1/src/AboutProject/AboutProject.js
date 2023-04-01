import React, {Component, useState} from 'react';
import "./AboutProject.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function AboutProject() {
  return (
    <>
    <div style={{marginTop:"13%"}}>
      <Card sx={{ maxWidth: 345, marginLeft: '30em', position: 'absolute' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://thumbs.dreamstime.com/b/lego-minifigure-head-parts-ninjago-lego-minifigure-head-parts-100654313.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Meet Dmytro - Passionate Web Developer and Programmer
            </Typography>
            <Typography variant="body3" color="text.secondary">
              Hi there! My name is Dmytro, and I'm a 21-year-old programmer currently studying to become a web developer. I have a passion for creating innovative and user-friendly websites that help solve real-world problems.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, marginLeft: '53em', position: 'absolute' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://www.ionos.ca/digitalguide/fileadmin/DigitalGuide/Teaser/code-editoren-t.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            The Technology Behind My Diploma Project Website
            </Typography>
            <Typography variant="body3" color="text.secondary">
            I recently built a website for my diploma project using React, Express.js, and MongoDB. These technologies allowed me to create a powerful and dynamic web application that provides a seamless user experience.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 345, marginLeft: '76em', position: 'relative' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://hips.hearstapps.com/hmg-prod/images/2023-ford-gt-mk-iv-02-1670543667.jpg?crop=0.736xw:0.655xh;0.223xw,0.157xh&resize=640:*"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Cars: A Lifelong Fascination and the Inspiration for My Diploma Project
            </Typography>
            <Typography variant="body3" color="text.secondary">
            Since I was a child, I've always been fascinated by cars. From their design to their mechanics, there's something captivating about them. So, when it came time to choose a theme for my diploma project, I knew I wanted to build a website focused on cars. I created a platform for buying and selling cars that provides a simple and efficient way for users to connect with one another.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    </>
  );
}

export default AboutProject;