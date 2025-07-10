import React from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box } from '@mui/material';
import dayjs from 'dayjs';

const DateRangeForm = ({ formData, setFormData }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <DatePicker
          label="Start Date"
          value={formData.startDate}
          onChange={(date) => setFormData({ ...formData, startDate: date })}
          minDate={dayjs()}
          sx={{ mb: 2, width: '100%' }}
        />
        <DatePicker
          label="End Date"
          value={formData.endDate}
          onChange={(date) => setFormData({ ...formData, endDate: date })}
          minDate={formData.startDate || dayjs()}
          sx={{ width: '100%' }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default DateRangeForm;