import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { formatKRW } from "@/app/dashboard/budgetSimulation/lib/budget-utils";

export default function MoneyBlock(props: { label: string; value: number; emphasize?: boolean }) {
  const { label, value, emphasize } = props;

  return (
    <Box sx={{ minWidth: 0 }}>
      <Typography
        variant="overline"
        color="text.secondary"
        sx={{
          display: "block",
          fontWeight: 900,
          letterSpacing: "0.08em",
          lineHeight: 1.1,
        }}
      >
        {label}
      </Typography>
      <Typography
        variant={emphasize ? "h5" : "h6"}
        fontWeight={emphasize ? 900 : 850}
        sx={{
          lineHeight: 1.12,
          mt: 1.05,
          letterSpacing: "-0.02em",
        }}
      >
        {formatKRW(value)}
      </Typography>
    </Box>
  );
}
