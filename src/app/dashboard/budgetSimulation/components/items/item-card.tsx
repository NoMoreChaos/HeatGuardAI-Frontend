import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import type { BudgetItem } from "@/types/budgetSimulation/budget";
import RowBetween from "@/app/dashboard/budgetSimulation/components/shared/row-between";
import { formatKRW } from "@/app/dashboard/budgetSimulation/lib/budget-utils";
import {
  UI_BG_ITEM_CARD,
  UI_BG_ITEM_CARD_SELECTED,
  UI_BORDER_RADIUS,
  UI_CODE_CHIP_SX,
  UI_CHIP_NOCLICK_SX,
  UI_IMAGE_RADIUS,
} from "@/app/dashboard/budgetSimulation/components/ui-constants";

type Props = {
  item: BudgetItem;
  isSelected: boolean;
  onToggle: () => void;
  onIncQty: (delta: number) => void;
  onQtyChange: (value: string) => void;
  stopClick: React.MouseEventHandler<HTMLElement>;
  stopKeyDown: React.KeyboardEventHandler<HTMLElement>;
  maxQty: number;
};

export default function ItemCard({
  item,
  isSelected,
  onToggle,
  onIncQty,
  onQtyChange,
  stopClick,
  stopKeyDown,
  maxQty,
}: Props) {
  const initCost = item.unitPrice * item.qty;
  const annualUnit = item.elecMonthly * 12 + item.waterMonthly * 12;
  const annualCost = annualUnit * item.qty;

  return (
    <Paper
      elevation={0}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      sx={{
        cursor: "pointer",
        borderRadius: UI_BORDER_RADIUS,
        border: "1px solid",
        borderColor: isSelected ? "primary.main" : "divider",
        bgcolor: isSelected ? UI_BG_ITEM_CARD_SELECTED : UI_BG_ITEM_CARD,
        boxShadow: isSelected ? 2 : 0,
        overflow: "hidden",
        transition: "all 160ms ease",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "&:hover": { boxShadow: 4 },
      }}
    >
      <Box sx={{ px: 2, pt: 2, pb: 1.25 }}>
        <RowBetween>
          <Chip size="small" label={item.code} variant="outlined" sx={{ ...UI_CODE_CHIP_SX, ...UI_CHIP_NOCLICK_SX }} />
          {isSelected ? (
            <Chip size="small" color="primary" label="선택됨" sx={{ height: 24, ...UI_CHIP_NOCLICK_SX }} />
          ) : (
            <Chip size="small" variant="outlined" label="미선택" sx={{ height: 24, ...UI_CHIP_NOCLICK_SX }} />
          )}
        </RowBetween>
      </Box>

      <Box sx={{ px: 2, pb: 1.5 }}>
        <Box
          sx={{
            height: 190,
            width: "100%",
            borderRadius: UI_IMAGE_RADIUS,
            overflow: "hidden",
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
            "&:hover img": {
              transform: "scale(1.06)",
            },
          }}
        >
          <Box
            component="img"
            src={item.imgUrl}
            alt={item.name}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transform: "scale(1)",
              transition: "transform 180ms ease",
              transformOrigin: "center",
            }}
          />
        </Box>
      </Box>

      <Box sx={{ px: 2, pb: 2.25, flex: 1, display: "flex", flexDirection: "column" }}>
        <Stack spacing={1.1} sx={{ flex: 1 }}>
          <RowBetween>
            <Typography fontWeight={900} sx={{ lineHeight: 1.2, minWidth: 0 }}>
              {item.name}
            </Typography>

            <Typography variant="caption" color="text.secondary" sx={{ display: "block", whiteSpace: "nowrap", textAlign: "right" }}>
              추천 설치: {item.loc}
            </Typography>
          </RowBetween>

          <Stack spacing={1}>
            <RowBetween>
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ fontWeight: 900, letterSpacing: "0.08em", lineHeight: 1.1 }}
              >
                A. 초기 설치비
              </Typography>

              <Stack spacing={0} sx={{ minWidth: 0, textAlign: "right" }}>
                <Typography fontWeight={700} sx={{ lineHeight: 1.12, letterSpacing: "-0.02em" }}>
                  {formatKRW(initCost)}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.2, display: "block" }}>
                  단가 {formatKRW(item.unitPrice)}
                </Typography>
              </Stack>
            </RowBetween>

            <RowBetween>
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ fontWeight: 900, letterSpacing: "0.08em", lineHeight: 1.1 }}
              >
                B. 연간 운영비
              </Typography>

              <Stack spacing={0} sx={{ minWidth: 0, textAlign: "right" }}>
                <Typography fontWeight={700} sx={{ lineHeight: 1.12, letterSpacing: "-0.02em" }}>
                  {formatKRW(annualCost)}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.2, display: "block" }}>
                  연간 {formatKRW(annualUnit)}
                </Typography>
              </Stack>
            </RowBetween>
          </Stack>

          <Divider sx={{ mt: 0.5 }} />

          <RowBetween>
            <Stack direction="row" spacing={1} alignItems="center" onClick={stopClick} onKeyDown={stopKeyDown}>
              <IconButton
                size="small"
                onClick={() => onIncQty(-1)}
                disabled={item.qty <= 0}
                aria-label="설치개수 감소"
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1,
                  width: 32,
                  height: 32,
                  bgcolor: "background.paper",
                }}
              >
                <Typography sx={{ fontWeight: 700, lineHeight: 1 }}>-</Typography>
              </IconButton>

              <TextField
                size="small"
                type="text"
                inputMode="numeric"
                value={String(item.qty)}
                onClick={stopClick}
                onChange={(e) => onQtyChange(e.target.value)}
                sx={{ width: 72, bgcolor: "background.paper" }}
                slotProps={{
                  htmlInput: {
                    style: { textAlign: "center", fontWeight: 700, paddingLeft: 4, paddingRight: 4 },
                    "aria-label": "설치개수 입력",
                  },
                }}
              />

              <IconButton
                size="small"
                onClick={() => onIncQty(+1)}
                disabled={item.qty >= maxQty}
                aria-label="설치개수 증가"
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1,
                  width: 32,
                  height: 32,
                  bgcolor: "background.paper",
                }}
              >
                <Typography sx={{ fontWeight: 900, lineHeight: 1 }}>+</Typography>
              </IconButton>
            </Stack>

            {item.link ? (
              <Button
                size="small"
                variant="outlined"
                endIcon={<OpenInNewIcon fontSize="small" />}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                구매 링크
              </Button>
            ) : (
              <Button size="small" variant="outlined" disabled onClick={(e) => e.stopPropagation()}>
                링크 준비중
              </Button>
            )}
          </RowBetween>
        </Stack>
      </Box>
    </Paper>
  );
}
