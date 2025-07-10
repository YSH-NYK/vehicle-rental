import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import axios from 'axios';

const VehicleTypeForm = ({ formData, setFormData }) => {
  const [vehicleTypes, setVehicleTypes] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/vehicle-types?wheels=${formData.wheels}`)
      .then(res => setVehicleTypes(res.data));
  }, [formData.wheels]);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Vehicle Type</FormLabel>
      <RadioGroup
        value={formData.vehicleTypeId}
        onChange={(e) => setFormData({ ...formData, vehicleTypeId: e.target.value })}
      >
        {vehicleTypes.map(type => (
          <FormControlLabel
            key={type.id}
            value={type.id.toString()}
            control={<Radio />}
            label={type.name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default VehicleTypeForm;