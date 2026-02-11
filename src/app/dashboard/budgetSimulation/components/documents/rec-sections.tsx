import * as React from "react";
import { Box, Typography } from "@mui/material";

import DenseTable from "@/app/dashboard/budgetSimulation/components/documents/dense-table";
import type { RecommendationText } from "@/types/budgetSimulation/documents";

type RecItem = {
  name: string;
  matchedTypesText: string;
  qty: number;
  initCostTotal: number;
  annualCostTotal: number;
};

type RecPlan = {
  items: RecItem[];
  totalQty: number;
  sumInit: number;
  sumAnnual: number;
};

type RecSectionsProps = {
  recText: RecommendationText;
  recPlan: RecPlan;
};

export default function RecSections({ recText, recPlan }: RecSectionsProps) {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography fontWeight={900} sx={{ mb: 0.75 }}>
          1. 추천 산정 개요
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.75 }}>
          {recText.intro}
        </Typography>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography fontWeight={900} sx={{ mb: 0.75 }}>
          2. 추천 산정 기준
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.75 }}>
          {recText.basis}
        </Typography>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography fontWeight={900} sx={{ mb: 1 }}>
          3. 추천 구성 내역
        </Typography>

        {recPlan.items.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            추천 구성을 산정할 수 없습니다. (예산 또는 설치 유형 조건을 확인하세요)
          </Typography>
        ) : (
          <DenseTable
            head={["구분", "품목명", "권장/매칭 설치", "수량", "초기 설치비(A)", "연간 운영비(B)"]}
            rows={recPlan.items.map((it, idx) => [
              String(idx + 1),
              it.name,
              it.matchedTypesText,
              `${it.qty}대`,
              it.initCostTotal,
              it.annualCostTotal,
            ])}
            footer={["", "합계", "", `${recPlan.totalQty}대`, recPlan.sumInit, recPlan.sumAnnual]}
          />
        )}
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography fontWeight={900} sx={{ mb: 0.75 }}>
          4. 예산 반영 결과
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.75 }}>
          {recText.result}
        </Typography>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography fontWeight={900} sx={{ mb: 0.75 }}>
          5. 전문가 인사이트(3개)
        </Typography>
        <Box component="ul" sx={{ m: 0, pl: 2.25 }}>
          {recText.insights.map((t, i) => (
            <Typography key={i} component="li" variant="body2" sx={{ lineHeight: 1.75, mb: 0.25 }}>
              {t}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography fontWeight={900} sx={{ mb: 0.75 }}>
          6. 더 나은 방안(검토 방향)
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.75 }}>
          {recText.betterPlan}
        </Typography>
      </Box>

      <Box>
        <Typography fontWeight={900} sx={{ mb: 0.75 }}>
          7. 구성 특징 및 유의사항
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.75 }}>
          {recText.note}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.75, lineHeight: 1.6 }}>
          본 문서는 예산 운용 검토를 위한 참고 자료이며, 실제 설치 및 예산 집행 시에는 내부 검토 절차를 우선합니다.
        </Typography>
      </Box>
    </Box>
  );
}
