import React, { useState } from 'react';
import { Container, Typography, Button, Box, Alert } from '@mui/material';
import axios from 'axios';
import NameForm from './components/NameForm';
import WheelsForm from './components/WheelsForm';
import VehicleTypeForm from './components/VehicleTypeForm';
import VehicleForm from './components/VehicleForm';
import DateRangeForm from './components/DateRangeForm';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    wheels: '',
    vehicleTypeId: '',
    vehicleId: '',
    startDate: null,
    endDate: null
  });
  const [error, setError] = useState('');

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
      setError('');
    }
  };

  const validateStep = () => {
    if (step === 1 && (!formData.firstName || !formData.lastName)) {
      setError('Please enter both first and last name');
      return false;
    }
    if (step === 2 && !formData.wheels) {
      setError('Please select the number of wheels');
      return false;
    }
    if (step === 3 && !formData.vehicleTypeId) {
      setError('Please select a vehicle type');
      return false;
    }
    if (step === 4 && !formData.vehicleId) {
      setError('Please select a vehicle');
      return false;
    }
    if (step === 5 && (!formData.startDate || !formData.endDate)) {
      setError('Please select a date range');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      alert('Booking successful!');
      setStep(1);
      setFormData({
        firstName: '',
        lastName: '',
        wheels: '',
        vehicleTypeId: '',
        vehicleId: '',
        startDate: null,
        endDate: null
      });
    } catch (err) {
      setError(err.response?.data?.error || 'Booking failed');
    }
  };

  return (
    <Container maxWidth="sm" className="mt-8">
      <Typography variant="h4" align="center" gutterBottom>
        Vehicle Rental Form
      </Typography>
      {error && <Alert severity="error" className="mb-4">{error}</Alert>}
      {step === 1 && <NameForm formData={formData} setFormData={setFormData} />}
      {step === 2 && <WheelsForm formData={formData} setFormData={setFormData} />}
      {step === 3 && <VehicleTypeForm formData={formData} setFormData={setFormData} />}
      {step === 4 && <VehicleForm formData={formData} setFormData={setFormData} />}
      {step === 5 && <DateRangeForm formData={formData} setFormData={setFormData} />}
      <Box className="mt-4">
        <Button
          variant="contained"
          color="primary"
          onClick={step === 5 ? handleSubmit : handleNext}
          fullWidth
        >
          {step === 5 ? 'Submit' : 'Next'}
        </Button>
      </Box>
    </Container>
  );
};

export default App;