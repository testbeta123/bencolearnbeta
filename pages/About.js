import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {motion} from 'framer-motion';
import Image from 'next/image'
import learn from '../svg/undraw_learning_re_32qv.svg'
import edu from '../svg/undraw_educator_re_s3jk.svg'
import real from '../svg/undraw_augmented_reality_re_f0qd.svg'
import nabel from '../img/orang/1930510.jpg'
import hazi from '../img/orang/1930506.jpg'

export default function About(){
  const d = new Date();

  return <>
  <Box
    component={motion.div}
    data-aos="fade-down"
    className="about1"
    data-aos-once="false"
    data-aos-delay="50"
    data-aos-duration="1000"
    sx={{ p: 3 }}
  >
  <div
    data-aos="zoom-in"
    data-aos-once="false"
    data-aos-delay="350"
    data-aos-duration="1000"
  >
    <Typography sx={{ fontWeight: 1000 }} style={{color:"white"}} align="center" variant="h4" component="h4">
      Welcome to Bencolearn website About Page!
     </Typography>
     <br/>
  </div>
  <Box sx={{ p: 2.5 }}
  data-aos="fade-right"
  data-aos-once="false"
  data-aos-delay="1000"
  data-aos-duration="2000"
  >
     <Typography style={{color:"white"}} align="center" variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
      About Bencolearn
      </Typography>
      <Typography style={{color:"white"}} align="center" sx={{ fontWeight: 'bold' }}>
       Bencolearn adalah website pembelajaran yang berisi informasi tentang flora dan fauna Bengkulu dengan artikel, video pembelajaran disertai minigame agar pembelajaran semakin menyenangkan!
       <br/>
       Website ini dibuat oleh Nabeel Adriansyah, M Raya Anugerah, dan Schatzy Ahmad Yazid dengan mereka yang ahli dalam peran mereka masing masing
       </Typography>
  </Box>
      <Box sx={{ p: 2.5 }}>
         <br/>
         <div
         data-aos="fade-left"
         data-aos-once="false"
         data-aos-delay="2000"
         data-aos-duration="2500"
         >
         <Typography style={{color:"white"}}  variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
          Visi dan misi kami
          </Typography>
          <br/>
          <Typography style={{color:"white"}}  sx={{ fontWeight: 'bold' }}>
           Website Bencolearn adalah web yang bertujuan untuk memberikan informasi kepada pembaca tentang flora dan fauna Bengkulu serta Aksara Kaganga secara lengkap dan jelas
           <br/>
           Website ini berisi artikel yang jelas dan video pembelajaran dengan visualisasi yang menarik dilengkapi dengan ilustrasi agar pengguna dapat paham dengan cepat.
           </Typography>
           <br/>
           <Box container sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
           <Box container>
           <Image src={learn}
            width={500}
            height={600}
             backgroundColor="white"
            />
            <Typography style={{color:"white"}}  sx={{ fontWeight: 'bold' }}>
              Dilengkapi quiz sebagai uji pemahaman
            </Typography>
            </Box>
            <Box container>
            <Image src={edu}
             width={500}
             height={600}
              backgroundColor="white"
             />
             <Typography style={{color:"white"}}  sx={{ fontWeight: 'bold' }}>
               Video penjelasan yang lengkap
             </Typography>
             </Box>
             <Box container>
             <Image src={real}
              width={500}
              height={600}
               backgroundColor="white"
              />
              <Typography style={{color:"white"}}  sx={{ fontWeight: 'bold' }}>
                Dengan fitur minigame dan simulasi
              </Typography>
            </Box>
            <br/>
          </Box>
          </div>
         <br/>
         <br/>
         <Box container sx={{ ml: 2 }}>
         <Box
         data-aos="flip-left"
         data-aos-once="false"
         data-aos-delay="100"
         data-aos-duration="1000"
         >
         <Typography style={{color:"white"}} align="center" variant="h4" component="h4">
          Nabeel Adriansyah
         </Typography>
         <Box container sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',  alignContent: 'center'  }}>
           <br/>
           <Box sx={{ alignSelf: 'center' }}>
           <Typography style={{color:"white"}} sx={{ fontWeight: 'light' }} variant="h5" component="h5">
            Umur : {d.getFullYear()-2008}
            <br/><br/>
            Tanggal lahir : 30 Januari 2008
            <br/><br/>
            Hobi : Coding, main rubik dan catur
            <br/><br/>
            Peran dalam web : memprogram dan mendesain website
           </Typography>
           </Box>
           <Image src={nabel} width={2584/7} height={4594/7} />
           </Box>
        </Box>
        <Box
        data-aos="flip-up"
        data-aos-once="false"
        data-aos-delay="100"
        data-aos-duration="1000"
        >
           <br/>
           <Typography style={{color:"white"}} align="center" variant="h4" component="h4">
            Schatzy Ahmad Yazid
           </Typography>
           <br/>
           <Box container sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',  alignContent: 'center'  }}>
           <Box sx={{ alignSelf: 'center' }}>
           <Typography style={{color:"white"}} sx={{ fontWeight: 'light' }} variant="h5" component="h5">
            Umur : {d.getFullYear()-2008}
            <br/><br/>
            Tanggal lahir : 18 Mei 2008
            <br/><br/>
            Hobi : Membaca, Travelling
            <br/><br/>
            Peran dalam web : Merangkum artikel dan sebagai instruktur
           </Typography>
           </Box>
           <Image src={hazi} width={2584/7} height={4594/7} />
           </Box>
        </Box>
        <Box
        data-aos="flip-down"
        data-aos-once="false"
        data-aos-delay="100"
        data-aos-duration="1000"
        >
           <br/>
           <Typography style={{color:"white"}} align="center" variant="h4" component="h4">
             M. Raya Anugerah
           </Typography>
           <Box container sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',  alignContent: 'center'  }}>
           <Box sx={{ alignSelf: 'center' }}>
           <br/><br/>
           <Typography style={{color:"white"}} sx={{ fontWeight: 'light' }} variant="h5" component="h5">
            Umur : {d.getFullYear()-2008}
            <br/><br/>
            Tanggal lahir : 22 Desember 2007
            <br/><br/>
            Hobi : Editing
            <br/><br/>
            Peran dalam web : Mengedit video dan penerjemah bahasa inggris
           </Typography>
           </Box>
           </Box>
           <br/>
           </Box>
          </Box>
       </Box>
    </Box>
  </>
}
