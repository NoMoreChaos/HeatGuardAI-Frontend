import * as React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { formatKRW } from "@/app/dashboard/budgetSimulation/lib/budget-utils";

type DenseTableProps = {
  head: string[];
  rows: Array<Array<string | number>>;
  footer?: Array<string | number>;
};

export default function DenseTable({ head, rows, footer }: DenseTableProps) {
  return (
    <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {head.map((h, idx) => (
              <TableCell key={idx} sx={{ fontWeight: 900, bgcolor: "rgba(0,0,0,0.02)" }}>
                {h}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r, i) => (
            <TableRow key={i} hover>
              {r.map((c, j) => (
                <TableCell key={j} align={typeof c === "number" ? "right" : "left"}>
                  {typeof c === "number" ? formatKRW(c) : c}
                </TableCell>
              ))}
            </TableRow>
          ))}

          {footer && (
            <TableRow sx={{ bgcolor: "rgba(76,175,80,0.10)" }}>
              {footer.map((c, j) => (
                <TableCell key={j} sx={{ fontWeight: 900 }} align={typeof c === "number" ? "right" : "left"}>
                  {typeof c === "number" ? formatKRW(c) : c}
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
