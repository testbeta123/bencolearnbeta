import { motion } from "framer-motion";
import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {Howl, Howler} from 'howler';
import CheckIcon from '@mui/icons-material/Check';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

var sound = new Howl({
  src: ['/aud/Quiz.mp3'],
  loop: true,
  volume: 0.5,
  autoplay: true,
});

export default function Quiz1(){

  useEffect(()=>{
    // loadLightInteraction(tsParticles);
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 20,
        sync: true
      }
    },
    shape: {
      type: ["circle", "square", "triangle"]
    },
    opacity: {
      value: 1
    },
    size: {
      value: 30,
      random: {
        enable: true,
        minimumValue: 15
      }
    },
    rotate: {
      value: 0,
      direction: "clockwise",
      animation: {
        speed: 5,
        enable: true
      }
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      out_mode: "out"
    }
  },
  detectRetina: true,
  background: {
    color: "#440A67"
  }
});
  })
  const questions = [
   {
     questionText: 'Siapa penemu bunga rafflesia arnoldi?',
     answerOptions: [
       { answerText: 'a. Joseph Arnold', isCorrect: false },
       { answerText: 'b. Sir Thomas Stamford Raffles', isCorrect: false },
       { answerText: 'c. Joseph Arnold dan Sir Thomas Stamford Raffles', isCorrect: true },
       { answerText: 'd. Nelayan Indonesia', isCorrect: false },
     ],
   },
   {
     questionText: 'Dimana bunga rafflesia arnoldi pertama kali ditemukan?' ,
     answerOptions: [
       { answerText: 'A. Pulau Jawa', isCorrect: false },
       { answerText: 'B. Inggris', isCorrect: false },
       { answerText: 'C. Pulau Sumatera', isCorrect: true },
       { answerText: 'D. Pulau Kalimantan', isCorrect: false },
     ],
   },
   {
     questionText: 'Kapan bunga rafflesia arnoldi pertama kali ditemukan',
     answerOptions: [
       { answerText: 'A. 1818', isCorrect: true },
       { answerText: 'B. 1954', isCorrect: false },
       { answerText: 'C. 1945', isCorrect: false },
       { answerText: 'D. 1918', isCorrect: false },
     ],
   },
   {
     questionText: 'Kapan bunga rafflesia arnoldi mekar?',
     answerOptions: [
       { answerText: 'A. Setelah 10 Bulan', isCorrect: false },
       { answerText: 'B. Setelah 12 bulan', isCorrect: false },
       { answerText: 'C. Setelah 9 bulan', isCorrect: true },
       { answerText: 'D. Setelah 11 bulan', isCorrect: false },
     ],
   },
   {
     questionText: 'Bagaimana Quiz tadi?',
     answerOptions: [
       { answerText: 'A. Lancar', isCorrect: true },
       { answerText: 'B. Banyak salah', isCorrect: true },
       { answerText: 'C. Ragu-ragu', isCorrect: true },
       { answerText: 'D. Susah', isCorrect: true },
     ],
   }
 ];

 const [currentQuestion, setCurrentQuestion] = React.useState(0);
 const [showScore, setShowScore] = React.useState(false);
 const [score, setScore] =React.useState(0);

 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 const [open1, setOpen1] = React.useState(false);
 const handleOpen1 = () => setOpen1(true);
 const handleClose1 = () => setOpen1(false);

 const [open2, setOpen2] = React.useState(false);
 const handleOpen2 = () => setOpen2(true);
 const handleClose2 = () => setOpen2(false);

 const [open3, setOpen3] = React.useState(false);
 const handleOpen3 = () => setOpen3(true);
 const handleClose3 = () => setOpen3(false);

 const [open4, setOpen4] = React.useState(false);
 const handleOpen4 = () => setOpen4(true);
 const handleClose4 = () => setOpen4(false);

 const handleAnswerOptionClick = (isCorrect) => {
   if (isCorrect) {
     setScore(score + 1);
      handleOpen()
   }

   if(!isCorrect&&(currentQuestion==0)){
      handleOpen1()
   }

   if(!isCorrect&&(currentQuestion==1)){
      handleOpen2()
   }

   if(!isCorrect&&(currentQuestion==2)){
      handleOpen3()
   }

   if(!isCorrect&&(currentQuestion==3)){
      handleOpen4()
   }

   const nextQuestion = currentQuestion + 1;
   if (nextQuestion < questions.length) {
     setCurrentQuestion(nextQuestion);
   } else {
     setShowScore(true);
   }
 };

 let classQuiz=['bg-purple-600','bg-violet-700','bg-indigo-600','bg-fuchsia-500']
  return <>
  <div id="tsparticles"></div>
    <div>
    <Box
      sx={{mx: 'auto',
     textAlign: 'center',
      display: 'flex',
    flexWrap: 'wrap',
   justifyContent: 'center'}}
    component={motion.div}
    initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ delay: 0.5 }}
    >
        <div className='tsp'>
        <Typography style={{color:"white"}} variant="h6" component="h6">
          Quiz 1 Rafflesia : Sejarah Bunga Rafflesia
         </Typography>
         <br/>
         {showScore ? (
           <>
        <Typography variant="h5" color="#ffffff">
					Anda benar {score-1} dari {questions.length-1}
          <br/>
          Pembahasan:
          <br/><br/>
          Bunga Rafflesia Arnoldi ditemukan oleh Joseph Arnold dan Sir Thomas Stamford Raffles pada tahun 1818 di pulau Sumatera, Bunga ini mekar saat berumur 9 bulan
        </Typography>
        <br/>
        <Box
          sx={{mx: 'auto',
         textAlign: 'center',
          display: 'flex',
       justifyContent: 'center'}}>
       <Box
        component={motion.button}
        className={'bg-green-500'}
        sx={{ p: 3, borderRadius: '16px' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        >
       <Link href={"/belajar/Rafflesia/"} onClick={()=>sound.stop()}>Lanjut ke materi selanjutnya</Link>
       </Box>
       <br/>
       <Box
        component={motion.button}
        className={'bg-green-500'}
        sx={{ p: 3, borderRadius: '16px' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        >
        <Link href={"/belajar/Rafflesia/Sejarah"} onClick={()=>sound.stop()}>Kembali ke materi sejarah</Link>
      </Box>
       </Box>
        </>
			) : (
				<>
					<div className='question-section'>
						<Typography variant="h4" color="#ffffff">
							<span>Question {currentQuestion+1}</span>/{questions.length-1}
						</Typography>
            <br/>
            <Typography style={{color:"white"}} variant="h5" component="h5">
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
             </Typography>
					</div>
          <br/>
        <Box>
					<div className='answer-section text-center'>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Benar
              </Typography>
              <CheckIcon/>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Yuk, lanjut mengerjakan soal
              </Typography>
            </Box>
          </Modal>

          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Aduh, kamu salah
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Bunga Rafflesia Arnoldi itu ditemukan oleh Joseph Arnold dan Sir Thomas Stamford Raffles
              </Typography>
            </Box>
          </Modal>

          <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Aduh, kamu salah
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Bunga Rafflesia Arnoldi Pertama kali ditemukan di hutan tropis Sumatera
              </Typography>
            </Box>
          </Modal>

          <Modal
            open={open3}
            onClose={handleClose3}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Aduh, kamu salah
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Bunga Rafflesia Arnoldi Pertama kali ditemukan pada tahun 1818
              </Typography>
            </Box>
          </Modal>

          <Modal
            open={open4}
            onClose={handleClose4}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Aduh, kamu salah
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Bunga Rafflesia Arnoldi Mekar dalam waktu 9 bulan
              </Typography>
            </Box>
          </Modal>

						{questions[currentQuestion].answerOptions.map((answerOption,y) => (
              <>
              <Box
               component={motion.div}
               className={classQuiz[y]}
               sx={{ p: 3, borderRadius: '16px' }}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.8 }}
               >
               <Typography style={{color:"white"}} variant="h5" component="h5">
               <motion.button onClick={() => {handleAnswerOptionClick(answerOption.isCorrect)}}>
                 {answerOption.answerText}.
               </motion.button>
                </Typography>
               </Box>
               <br/>
              </>
						))}
					</div>
        </Box>
				</>
			)}
        </div>
    </Box>
    </div>
  </>
}
