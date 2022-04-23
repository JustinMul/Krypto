import * as React from 'react';

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={8}>
    <Box component="svg" sx={{ width: 200, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        
      />
    </Box>
  </Paper>
);

export default function SlideFromContainer() {
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      sx={{
        height: 180,
        width: "100%",
        display: 'flex',
        padding: 2,
        borderRadius: 1,
        bgcolor: (theme) =>
          theme.palette.mode === 'light' ? 'grey.100' : 'grey.900',
        overflow: 'hidden',
      }}
      ref={containerRef}
    >
      <Box sx={{ width: 800 }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show from target"
        />
        <Slide direction="right" value={[10, 100]} in={checked} sx={{ width: '100%' }}>
          <FavoriteBorderIcon/>
        </Slide>
      </Box>
    </Box>
  );
}
