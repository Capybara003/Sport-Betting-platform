// CustomSnackbar.js
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Box } from '@mui/material';

const CustomSnackbar = ({ open, message, onClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      autoHideDuration={3000} // Automatically closes after 3 seconds
      onClose={onClose}
    >
      <Box 
        sx={{
          bgcolor: '#7F0376', // Set background color here
          color: 'white', // Set text color if needed
          padding: '16px', // Optional padding
          borderRadius: '4px', // Optional border radius
        }}
      >
        {message}
      </Box>
    </Snackbar>
  );
};

export default CustomSnackbar;
