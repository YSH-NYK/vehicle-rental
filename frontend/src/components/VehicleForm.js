import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import axios from 'axios';

const VehicleForm = ({ formData, setFormData }) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/vehicles?vehicleTypeId=${formData.vehicleTypeId}`)
      .then(res => setVehicles(res.data));
  }, [formData.vehicleTypeId]);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Specific Model</FormLabel>
      <RadioGroup
        value={formData.vehicleId}
        onChange={(e) => setFormData({ ...formData, vehicleId: e.target.value })}
      >
        {vehicles.map(vehicle => (
          <FormControlLabel
            key={vehicle.id}
            value={vehicle.id.toString()}
            control={<Radio />}
            label={vehicle.name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default VehicleForm;