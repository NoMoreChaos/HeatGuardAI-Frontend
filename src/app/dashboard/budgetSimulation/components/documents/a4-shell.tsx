import * as React from "react";
import { Divider, Paper, Typography } from "@mui/material";

type A4ShellProps = {
  title: string;
  children: React.ReactNode;
};

export default function A4Shell({ title, children }: A4ShellProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 2.5,
        bgcolor: "background.paper",
        border: "none",
        boxShadow: "18px 0 32px rgba(15,23,42,0.06), -18px 0 32px rgba(15,23,42,0.06)",
        maxWidth: 920,
        mx: "auto",
        my: 3,
      }}
    >
      <Typography variant="h6" fontWeight={900} sx={{ letterSpacing: "-0.02em", textAlign: "center", mt: 1, mb: 3 }}>
        {title}
      </Typography>
      <Divider sx={{ my: 2 }} />
      {children}
    </Paper>
  );
}
