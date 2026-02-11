import * as React from "react";
import Stack from "@mui/material/Stack";

export default function RowBetween(props: { children: React.ReactNode }) {
  const arr = React.Children.toArray(props.children).filter(Boolean);
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1} sx={{ width: "100%" }}>
      {arr}
    </Stack>
  );
}
