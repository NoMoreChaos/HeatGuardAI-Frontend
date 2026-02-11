import * as React from "react";
import Box from "@mui/material/Box";

import type { BudgetItem } from "@/types/budgetSimulation/budget";
import ItemCard from "@/app/dashboard/budgetSimulation/components/items/item-card";

type Props = {
  items: BudgetItem[];
  selectedCodes: Set<string>;
  onToggle: (code: string) => void;
  onIncQty: (code: string, delta: number) => void;
  onQtyChange: (code: string, value: string) => void;
  stopClick: React.MouseEventHandler<HTMLElement>;
  stopKeyDown: React.KeyboardEventHandler<HTMLElement>;
  maxQty: number;
};

export default function ItemGrid({
  items,
  selectedCodes,
  onToggle,
  onIncQty,
  onQtyChange,
  stopClick,
  stopKeyDown,
  maxQty,
}: Props) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 1.5,
        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" },
        alignItems: "stretch",
      }}
    >
      {items.map((it) => (
        <ItemCard
          key={it.code}
          item={it}
          isSelected={selectedCodes.has(it.code)}
          onToggle={() => onToggle(it.code)}
          onIncQty={(delta) => onIncQty(it.code, delta)}
          onQtyChange={(value) => onQtyChange(it.code, value)}
          stopClick={stopClick}
          stopKeyDown={stopKeyDown}
          maxQty={maxQty}
        />
      ))}
    </Box>
  );
}
