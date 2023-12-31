import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';

// 設定ドロワー
const SettingsDrawer = (props) => {
  const { open, handleClose,
    onChangePmtilesLayer,
    onChagneRasterXyzTileLayer,
    onChagneCogLayer,
    onChagneVectorXyzTileLayer,
    onChagneVectorPmtilesLayer,
  } = props;

  const [type, setType] = useState('pmtilesLayer');

  const _onChange = (event) => {
    const type = event.target.value;
    setType(type);
    onChangePmtilesLayer(type === 'pmtilesLayer');
    onChagneRasterXyzTileLayer(type === 'rasterXyzTileLayer');
    onChagneCogLayer(type === 'cogLayer');
    onChagneVectorXyzTileLayer(type === 'vectorXyzTileLayer');
    onChagneVectorPmtilesLayer(type === 'vectorPmtilesLayer');
  };

  return (
    <Drawer anchor={'left'} open={open} variant="persistent"    >
      <Box sx={{ width: 'auto' }} role="presentation"      >
        <IconButton onClick={handleClose}>
          <ChevronLeftIcon />
        </IconButton>
        <Box sx={{ m: 1 }}>
          <Typography variant='body2'>※ Zoom Level = 0-4</Typography>
          <RadioGroup
            aria-labelledby="blend-radio-buttons-group-label"
            name="blend-radio-buttons-group"
            value={type}
            onChange={_onChange}
          >
            <FormControlLabel value='pmtilesLayer' control={<Radio />} label='PMTiles' />
            <FormControlLabel value='rasterXyzTileLayer' control={<Radio />} label='Raster XYZ Tile' />
            <FormControlLabel value='cogLayer' control={<Radio />} label='Cloud Optimized GeoTiff' />
            <FormControlLabel value='vectorXyzTileLayer' control={<Radio />} label='Vector XYZ Tile' />
            <FormControlLabel value='vectorPmtilesLayer' control={<Radio />} label='Vector Pmtiles' />
          </RadioGroup>
        </Box>

      </Box>

    </Drawer >
  )
}


export default SettingsDrawer;