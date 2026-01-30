'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function StateCard({
                                    label,
                                    value,
                                    unit,
                                  }: {
  label: string;
  value: string | number;
  unit?: string;
}) {
  return (
    <Card
      sx={{
        borderRadius: 2,
        border: '1px solid #eee',
        boxShadow: '0 2px 10px rgba(0,0,0,0.06)', // ✅ 그림자만 추가
        bgcolor: '#fff',
      }}
    >
      <CardContent sx={{ py: 1.5, '&:last-child': { pb: 1.5 } }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 800 }}>
          {label}
        </Typography>

        <Typography sx={{ fontWeight: 900, fontSize: 18, mt: 0.5 }}>
          {value}
          {unit ? ` ${unit}` : ''}
        </Typography>
      </CardContent>
    </Card>
  );
}
