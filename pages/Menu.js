import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Image from 'next/image'
import log5 from '../img/d44e897429dd47f5ace5be692e9e14f9.png'
import il4 from '../img/b76ad7e0130541da91de768f572f3cb0.png'
import Navbar from '../comp/Navbar.js'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Image from 'next/image'
// import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
//Placeholder
import raf from '../img/placeholder/rafflesia-world-s-largest-flower-rare-beautiful-red-flower-jungle_431724-2622.png'

import rafflesia from '../img/menu/bunga-raflesia-1280x720.jpg'
import bangke from '../img/menu/2582325114.jpg'
import beruang from '../img/menu/Sun_Bear_7.jpg'
import kacamata from '../img/menu/Ciri-Khas-Burung-Kacamata-Enggano.jpg'
import anis from '../img/menu/anis-enggano.jpg'
import kaganga from '../img/menu/kaganga2.jpg'

export default function Menu(){

  return(
    <>
      <Box>
      <ul className="background">
      <br/>
        <li></li>
        <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
      </ul>
      <Navbar/>
       <br/>
       <br/>
      <Box sx={{m:"auto", p:2}}>
      <Grid container spacing={2}>
      <Grid item  xs={6} md={6} align="center">
            <Card sx={{ maxWidth: 345}}>
        <CardActionArea>
          <Image
            src={rafflesia}
            width={1380/2.5}
            height={917/2.5}
          />
          <CardContent style={{backgroundColor: "white"}}>
            <Typography gutterBottom variant="h5" component="div">
              Rafflesia
            </Typography>
            <Typography variant="subtitle" color="text.secondary">
              Rafflesia Arnoldi merupakan flora khas Bengkulu, yang ditemukan ahli botani Inggris Joseph Arnold dan negarawan Sir Thomas Stamford Raffles.
            </Typography>
            <Button href="/belajar/Rafflesia">Belajar</Button>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      <Grid item  xs={6} md={5} align="center">
      <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
      <Image
      src={bangke}
      width={1380/2.5}
      height={917/2.5}
      />
      <CardContent style={{backgroundColor: "white"}}>
      <Typography gutterBottom variant="h5" component="div">
        Bunga Bangkai
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Amorphophallus titanum yang tingginya 2,8 meter mekar sempurna di area penangkaran bunga langka milik Holidin, warga desa Tebat Monok, Kabupaten Kepahiang, Provinsi Bengkulu.
      </Typography>
      </CardContent>
      </CardActionArea>
      </Card>
      </Grid>
        <Grid item xs={6} md={6} align="center">
      <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
      <CardMedia>
      <Image
      src={beruang}
      width={1380/2.5}
      height={917/2.5}
      />
      </CardMedia>
      <CardContent style={{backgroundColor: "white"}}>
      <Typography gutterBottom variant="h5" component="div">
        Beruang Madu
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Beruang ini adalah fauna khas provinsi Bengkulu sekaligus dipakai sebagai simbol dari provinsi tersebut.
      </Typography>
      </CardContent>
      </CardActionArea>
      </Card>
      </Grid>
      <Grid item xs={6} md={5} align="center">
      <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
      <CardMedia>
      <Image
      src={kacamata}
      width={1380/2.5}
      height={917/2.5}
      />
      </CardMedia>
      <CardContent style={{backgroundColor: "white"}}>
      <Typography gutterBottom variant="h5" component="div">
        Kacamata Enggano
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Burung Kacamata Enggano atau Zosterops salvadorii adaah salah satu jenis burung kicauan yang merupakan burung endemik Pulau Enggano, Bengkulu.
      </Typography>
      </CardContent>
      </CardActionArea>
      </Card>
      </Grid>
      <Grid item xs={6} md={6} align="center">
      <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
      <CardMedia>
      <Image
      src={anis}
      width={1380/2.5}
      height={917/2.5}
      />
      </CardMedia>
      <CardContent style={{backgroundColor: "white"}}>
      <Typography gutterBottom variant="h5" component="div">
        Anis  Enggano
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Anis Enggano merupakan jenis burung kicau dari salah satu dari beberapa jenis burung anis yang dapat dijumpai di Indonesia tepatnya di pulau enggano sumatera alias sebelah baratnya kota bengkulu
      </Typography>
      </CardContent>
      </CardActionArea>
      </Card>
      </Grid>
      <Grid item xs={6} md={5} align="center">
      <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
      <CardMedia>
      <Image
      src={kaganga}
      width={1380/2.5}
      height={917/2.5}
      />
      </CardMedia>
      <CardContent style={{backgroundColor: "white"}}>
      <Typography gutterBottom variant="h5" component="div">
        BONUS : Ka Ga Nga
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Yuk perdalam wawasan tentang budaya Bengkulu mu dengan mempelajari Aksara kaganga rejang dengan cepat dan mudah di Website Bencolearn!
      </Typography>
      </CardContent>
      </CardActionArea>
      </Card>
      </Grid>
      <Grid item xs={6} md={6} align="center">
      <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
      <CardMedia>
      <Image
      src={raf}
      width={1380/2.5}
      height={917/2.5}
      />
      </CardMedia>
      <CardContent style={{backgroundColor: "white"}}>
      <Typography gutterBottom variant="h5" component="div">
        MINIGAME!
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Pembelajaran di Bencolearn semakin seru dengan Bencolearn Minigame! Yuk mainkan semua variasi game nya sambil menguji pemahaman kamu tentang budaya bengkulu!
      </Typography>
      </CardContent>
      </CardActionArea>
      </Card>
      </Grid>
      </Grid>
      </Box>
      </Box>
    </>
  )
}
