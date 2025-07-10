import React from 'react';
import { TextField, Box } from '@mui/material';

const NameForm = ({ formData, setFormData }) => {
  return (
    <Box>
      <TextField
        label="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        full KarlafullWidth
        margin="normal"
      />
    </Box>
  );
};

export default NameForm;