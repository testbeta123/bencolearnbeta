import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import * as React from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import Navbar from '../../comp/Navbar.js'

export default function Rafflesia(){
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return <>
  <ul className="background3">
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

<Grid
container
spacing={0}
direction="column"
alignItems="center"
justifyContent="center"
style={{ minWidth: '100%' }}
>
<Navbar/>
<br/>
    <Box  className="background2" sx={{ width: '70%', borderRadius: '16px' }}>
     <br/>
     <List className="background2">
     <Typography align="center" variant="h4" component="h4">
       Rafflesia
      </Typography>
     <ListItemButton className="background2" onClick={handleClick1} variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
      Bagian Awal
      {open1 ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open1} timeout="auto" unmountOnExit>

    <Box className="background2">
      <List component="div" disablePadding>
        <ListItemButton href="Rafflesia/Sejarah">Sejarah</ListItemButton>
      </List>
    </Box>

    <Box>
      <List component="div" disablePadding>
        <ListItemButton>Struktur</ListItemButton>
      </List>
    </Box>

    <Box>
      <List component="div" disablePadding>
        <ListItemButton>Ciri ciri</ListItemButton>
      </List>
    </Box>
    </Collapse>

    <ListItemButton onClick={handleClick2} variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
     Bagian Dua
     {open2 ? <ExpandLess /> : <ExpandMore />}
   </ListItemButton>
   <Collapse in={open2} timeout="auto" unmountOnExit>

   <Box>
     <List component="div" disablePadding>
       <ListItemButton>Habitat</ListItemButton>
     </List>
   </Box>

   <Box>
     <List component="div" disablePadding>
       <ListItemButton>Tempat penangkaran/Budidaya</ListItemButton>
     </List>
   </Box>

   <Box>
     <List component="div" disablePadding>
       <ListItemButton>Perkembang Biakan</ListItemButton>
     </List>
   </Box>

   <Box>
     <List component="div" disablePadding>
       <ListItemButton>Manfaat bagi alam</ListItemButton>
     </List>
   </Box>

   </Collapse>
     </List>
    </Box>
    <br/>
    </Grid>
  </>
}
