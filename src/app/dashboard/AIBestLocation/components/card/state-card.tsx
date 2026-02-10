'use client';

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function StateCard({
                                    label,
                                    value,
                                    unit,
                                    icon,
                                  }: {
  label: string;
  value: string | number;
  unit?: string;
  icon?: React.ReactNode;
}) {
  return (
    <Paper
			variant="outlined"
      sx={{
        background: 'linear-gradient(180deg, #F7FAFF 0%, #F1F5FF 100%)',
        borderRadius: 2,
        p: 2,
        transition: (theme) => theme.transitions.create('box-shadow'),
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            bgcolor: '#e7edff',
            color: '#3f51b5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: '0 0 auto',
          }}
        >
          {icon}
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 800 }}>
            {label}
          </Typography>
          <Typography sx={{ fontWeight: 900, fontSize: 18, mt: 0.5 }}>
            {value}
            {unit ? ` ${unit}` : ''}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
