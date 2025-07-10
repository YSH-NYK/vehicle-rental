import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const WheelsForm = ({ formData, setFormData }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Number of Wheels</FormLabel>
      <RadioGroup
        value={formData.wheels}
        onChange={(e) => setFormData({ ...formData, wheels: e.target.value })}
      >
        <FormControlLabel value="2" control={<Radio />} label="2 Wheels" />
        <FormControlLabel value="4" control={<Radio />} label="4 Wheels" />
      </RadioGroup>
    </FormControl>
  );
};

export default WheelsForm;