import Head from 'next/head'
// import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import {motion} from 'framer-motion'
import log1 from '../img/697e817a37df98d9a0f11389516a35b8a9903b8d_s2_n2.png'
import log2 from '../img/89ea7df2629edb1784f95516c72dc41e2fc7d745_s2_n1.png'
import log3 from '../img/ba08c1fabe017190c1f77a3c435e95eb8f9d9784_s2_n2.png'
import log5 from '../img/d44e897429dd47f5ace5be692e9e14f9.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import il1 from '../img/pexels-katerina-holmes-5905700.jpg'
import il2 from '../img/pexels-tima-miroshnichenko-5303515.jpg'
import il3 from '../img/pexels-tima-miroshnichenko-7047607.jpg'
import il4 from '../img/b76ad7e0130541da91de768f572f3cb0.png'
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import learn from '../img/undraw_Teaching_re_g7e3.png'
import game from '../img/undraw_Air_support_re_nybl.png'

//TODO : Anis Enggano, Kacamata Enggano,
const modstyle = {
  top: '20%',
  margin : 'auto',
  background:'white',
  display: 'block',
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    <div className="bg1 overflow-y-hidden	">
    <br/>
      <Box
        component={motion.div}
        data-aos="fade-down"
      >
      <Typography style={{color:"white"}} align="center" variant="h4" component="h4">
        Welcome to Bencolearn website!
       </Typography>
       <br/>
       <Typography
        sx={{
          fontFamily: 'Kaganga',
        }}
        style={{color:"white"}} align="center" variant="h4" component="h4"
      >
        hlo  be%kulu
      </Typography>
      <Typography style={{color:"white"}} align="center" variant="h6" component="h6">
        (Halo Bengkulu)
      </Typography>
       <br/>
       <Typography style={{color:"white"}} align="center" variant="h6" component="h6">
       Yuk lebih mengenal flora dan fauna Bengkulu dengan Bencolearn!
       </Typography>
       <br/>
       <Typography style={{color:"white"}} align="center" variant="h5" component="h5">
        Ingin tahu apa saja flora dan fauna Bengkulu beserta penjelasannya?
      </Typography>
      <br/>
      <Typography style={{color:"white"}} align="center" variant="h4" component="h4">
        Disini kami kupas tuntas semuanya!
       </Typography>
      </Box>
      <br/>
      <br/>
      <Box sx={{m:"auto", p:2}}>
   <Grid container spacing={2}>

   <Grid item xs={10} md={4} align="center">
   <Card
   component={motion.div}
   whileHover={{
    scale: 1.1,
    transition: { duration: 0.4 },
  }}
  whileTap={{ scale: 0.9 }}
   data-aos="fade-right" data-aos-once="false" data-aos-delay="50" data-aos-duration="1000" bgcolor="secondary" sx={{ maxWidth: 300, minWidth:300, maxHeight:550 }}>
 <CardActionArea>
   <CardMedia>
   <Image
   src={log1}
   alt="Tanaman"
   height={310}
   width={310}
   />
   </CardMedia>
   <CardContent style={{backgroundColor: "#333333"}}>
     <Typography color="#F2F2F2" gutterBottom variant="h5" component="div">
       Bunga Rafflesia
     </Typography>
     <Typography variant="body2" color="#F2F2F2">
        adalah tumbuhan parasit obligat yang terkenal karena memiliki bunga berukuran sangat besar, bahkan merupakan bunga terbesar di dunia. Bunga Rafflesia dikatakan bunga yang unik karena hanya berupa bunga mekar tanpa daun, akar dan tidak memiliki batang.
     </Typography>
   </CardContent>
 </CardActionArea>
</Card>
</Grid>

<Grid item xs={10} md={4} align="center">
<Card
component={motion.div}
whileHover={{
 scale: 1.1,
 transition: { duration: 0.4 },
}}
data-aos="fade-up" data-aos-once="false" data-aos-delay="50" data-aos-duration="1000" bgcolor="secondary" sx={{ maxWidth: 300, minWidth:300, maxHeight:550 }}>
   <CardActionArea>
     <CardMedia>
     <Image
     src={log2}
     alt="bakteri"
     height={320}
     width={300}
     />
     </CardMedia>
     <CardContent style={{backgroundColor: "#333333"}}>
       <Typography color="#F2F2F2" gutterBottom variant="h5" component="div">
         Bunga Bangkai
       </Typography>
       <Typography color="#F2F2F2" variant="body2">
          bunga bangkai raksasa atau suweg raksasa, Amorphophallus titanum Becc., merupakan tumbuhan dari suku talas-talasan endemik dari Sumatra, Indonesia, yang dikenal sebagai tumbuhan dengan bunga terbesar di dunia, jenis : Amorphophallus titanum · Amorphophallus hewittii · Amorphophallus peoniifolius · Amorphophallus gigas
       </Typography>
     </CardContent>
   </CardActionArea>
 </Card>
 </Grid>

 <Grid item xs={10} md={3} align="center">
 <Card
 component={motion.div}
 whileHover={{
  scale: 1.1,
  transition: { duration: 0.4 },
}}
 data-aos="fade-left" data-aos-once="false" data-aos-delay="50" data-aos-duration="1000" bgcolor="secondary" sx={{ maxWidth: 300, minWidth:300, maxHeight:550 }}>
    <CardActionArea>
      <CardMedia>
      <Image
      src={log3}
      alt="bakteri"
      height={310}
      width={310}
      />
      </CardMedia>
      <CardContent style={{backgroundColor: "#333333"}}>
        <Typography color="#F2F2F2" gutterBottom variant="h5" component="div">
          Beruang Madu
        </Typography>
        <Typography color="#F2F2F2" variant="body2">
        Beruang madu (Helarctos malayanus) termasuk familia Ursidae serta merupakan jenis paling kecil dari delapan jenis beruang yang ada di dunia. Beruang ini adalah merupakan fauna khas Provinsi Bengkulu sekaligus dipakai sebagai simbol dari Provinsi tersebut
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </Grid>

  <Grid item xs={10} md={5} align="center">
  <Card
  component={motion.div}
  whileHover={{
   scale: 1.1,
   transition: { duration: 0.4 },
 }}
  data-aos="fade-left" data-aos-once="false" data-aos-delay="50" data-aos-duration="1000" bgcolor="secondary" sx={{ maxWidth: 300, minWidth:300, maxHeight:550 }}>
     <CardActionArea>
       <CardMedia>
       <Image
       src={il4}
       alt="bakteri"
       height={310}
       width={310}
       />
       </CardMedia>
       <CardContent style={{backgroundColor: "#333333"}}>
         <Typography color="#F2F2F2" gutterBottom variant="h5" component="div">
           Anis Enggano
         </Typography>
         <Typography color="#F2F2F2" variant="body2">
         Anis Enggano merupakan jenis burung kicau dari salah satu dari beberapa jenis burung anis yang dapat dijumpai di Indonesia tepatnya di pulau enggano sumatera alias sebelah baratnya kota bengkulu
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
 </Grid>
 <Grid item xs={10} md={5} align="center">
 <Card
 component={motion.div}
 whileHover={{
  scale: 1.1,
  transition: { duration: 0.4 },
}}
 data-aos="fade-left" data-aos-once="false" data-aos-delay="50" data-aos-duration="1000" bgcolor="secondary" sx={{ maxWidth: 300, minWidth:300, maxHeight:550 }}>
    <CardActionArea>
      <CardMedia>
      <Image
      src={log5}
      alt="bakteri"
      height={310}
      width={310}
      />
      </CardMedia>
      <CardContent style={{backgroundColor: "#333333"}}>
        <Typography color="#F2F2F2" gutterBottom variant="h5" component="div">
          Kacamata Enggano
        </Typography>
        <Typography color="#F2F2F2" variant="body2">
Burung Kacamata Enggano merupakan burung pengicau dari famili Zosteropidae. Nama latin burung ini adalah Zosterops salvadorii Meyer & Wiglesworth, 1894. Dalam bahasa Inggris burung yang kerap disebut sebagai burung pleci ini dinamai sebagai Enggano White-eye.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
</Grid>
</Grid>
   </Box>
      </div>
      <Box  sx={{ p: 2 }} className='bg2'>
      <Typography style={{color:"white"}} align="center" variant="h4" component="h4">
        Kenapa Bencolearn website?
       </Typography>
       <br/>
       <Box container data-aos="flip-left" data-aos-once="false" data-aos-delay="50" data-aos-duration="1000">
       <Typography style={{color:"white"}} variant="h5" component="h5">
          Artikel dan video yang ringkas dan lengkap
        </Typography>
        <Typography style={{color:"white"}} paragraph>
           Bencolearn menyediakan artikel dan video ringkas yang lengkap sehingga materi mudah diingat dan dipahami.
           <br/>
           Agar tidak bosan saat membaca artikel, dalam website ini juga anda bisa mendengar lagu yang disediakan khusus!
         </Typography>
         <Image src={il1}
          alt={'belajar'}
          width={600}
          height={400}
          />
       </Box>
       <br/>
       <Box container data-aos="fade-left" data-aos-once="false" data-aos-delay="50" data-aos-duration="1000" align="right">
       <Typography style={{color:"white"}} variant="h5" component="h5" align="right">
          Quiz
        </Typography>
        <Typography style={{color:"white"}} paragraph align="right">
           Agar pengguna lebih memahami materi, setelah video dan artikel pemahaman akan diujicoba dengan quiz.
           <br/>
           Dari tingkat mudah, sedang, hingga susah!
         </Typography>
         <Image src={il2}
          alt={'belajar'}
          width={600}
          height={400}
          align="right"
          />
       </Box>
       <br/>
       <Box container data-aos="zoom-in-right" data-aos-once="false" data-aos-delay="50" data-aos-duration="1000" align="center">
       <Typography style={{color:"white"}} variant="h5" component="h5" align="center">
          Minigame!
        </Typography>
        <Typography style={{color:"white"}} paragraph align="center">
           Website juga dilengkapi minigame yang membuat pembelajaran semakin asik!
           <br/>
           Contoh game : Labirin jawaban, lengkapi kata, hubungkan gambar-kalimat dan lainnya!
         </Typography>
         <Image src={il3}
          alt={'belajar'}
          width={593.5}
          height={395.7}
          />
       </Box>
      </Box>
      <Box  sx={{ p: 2, paddingTop:30, pb:30 }} className='bg3'>
      <Box  container  display="flex"
    flexDirection="column"
    justifyContent="center"
    data-aos-once="false" data-aos-delay="50" data-aos-duration="1000" data-aos="flip-up">
        <Typography style={{color:"white"}} align="center" variant="h3" component="h3" align="center">
          Ayo mulai belajar!
         </Typography>
         <br/>
         <Button className="bg-indigo-500" id="belajar" href={"Menu"}>
         <Typography data-aos="flip-up" style={{color:"white"}} align="center" variant="h4" component="h4" align="center">
           GET STARTED!
          </Typography>
         </Button>
       </Box>
       </Box>
    </div>
  )
}
