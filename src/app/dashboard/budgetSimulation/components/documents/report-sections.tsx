import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";

import DenseTable from "@/app/dashboard/budgetSimulation/components/documents/dense-table";
import type { ReportContent, ReportSnapshot, RiskItem } from "@/types/budgetSimulation/documents";

type ReportSectionsProps = {
  reportText: ReportContent;
  reportView: ReportSnapshot;
  expectedEffectLines: string[];
  riskItems: RiskItem[];
  formatKRW: (value: number) => string;
  calcAnnualPerUnit: (item: { elecMonthly: number; waterMonthly: number }) => number;
  reportUsageColor: string;
  reportUsageBgColor: string;
};

export default function ReportSections({
  reportText,
  reportView,
  expectedEffectLines,
  riskItems,
  formatKRW,
  calcAnnualPerUnit,
  reportUsageColor,
  reportUsageBgColor,
}: ReportSectionsProps) {
  return (
    <Stack spacing={2}>
      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          bgcolor: "rgba(46,125,50,0.06)",
          border: "1px solid rgba(15,23,42,0.08)",
          boxShadow: "0 12px 24px rgba(15,23,42,0.08)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Typography fontWeight={900} sx={{ mb: 1, fontSize: 18 }}>
          1. 사업 개요
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
          {reportText.businessOverview}
        </Typography>
      </Box>

      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          background: "rgba(255,255,255,0.7)",
          border: "1px solid rgba(15,23,42,0.08)",
          boxShadow: "0 12px 24px rgba(15,23,42,0.08)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Typography fontWeight={900} sx={{ mb: 1, fontSize: 18 }}>
          2. 목표 설치 유형 및 품목 구성
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
          본 사업의 설치 품목은 시뮬레이션 결과를 바탕으로 선택된 품목과, 각 품목별 특성을 고려한 추천 설치 위치를
          함께 고려하여 구성하였습니다.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 1.25, flexWrap: "wrap" }}>
          <Box
            sx={{
              p: 1.5,
              borderRadius: 1.5,
              bgcolor: "rgba(25,118,210,0.12)",
              border: "1px solid",
              borderColor: "rgba(25,118,210,0.35)",
              fontWeight: 800,
              textAlign: "center",
              color: "#0b2a4a",
              width: "100%",
            }}
          >
            선택한 설치 위치 유형: {reportView.selectedTypesLabel}
          </Box>
        </Stack>
        <Typography variant="subtitle2" sx={{ mt: 1.75, fontWeight: 900 }}>
          주요 설치 유형 및 구성
        </Typography>
        <Typography variant="body2" sx={{ mt: 0.75, lineHeight: 1.75 }}>
          선택된 설치 품목 수: {reportView.pickedItems.length}개
        </Typography>
        <Box sx={{ mt: 2 }}>
          <DenseTable
            head={["품목명", "추천 설치 위치", "선택 수량"]}
            rows={reportView.pickedItems.map((it) => [it.name, it.loc, `${it.qty}대`])}
            footer={["합계", "", `${reportView.pickedItems.reduce((a, x) => a + x.qty, 0)}대`]}
          />
        </Box>
        <Typography variant="body2" sx={{ mt: 1.25, lineHeight: 1.8 }}>
          본 구성은 공간 특성(보행형·체류형·개방형)을 고려하여 쿨링 효과를 극대화할 수 있도록 설계되었습니다.
        </Typography>
      </Box>

      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          background: "rgba(255,255,255,0.7)",
          border: "1px solid rgba(15,23,42,0.08)",
          boxShadow: "0 12px 24px rgba(15,23,42,0.08)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Typography fontWeight={900} sx={{ mb: 1, fontSize: 18 }}>
          3. 초기 설치비 산정 내역 (A)
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.8 }}>
          초기 설치비는 품목별 단가와 설치 수량을 기준으로 산정하였습니다.
        </Typography>

        {reportView.pickedItems.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            선택된 품목이 없습니다. (품목 선택 후 수량을 입력하세요)
          </Typography>
        ) : (
          <DenseTable
            head={["구분", "품목명", "품목 단가", "수량", "단품 합계"]}
            rows={reportView.pickedItems.map((it, idx) => [
              String(idx + 1),
              it.name,
              it.unitPrice,
              `${it.qty}대`,
              it.unitPrice * it.qty,
            ])}
            footer={[
              "",
              "합계",
              "",
              `${reportView.pickedItems.reduce((a, x) => a + x.qty, 0)}대`,
              reportView.sumInit,
            ]}
          />
        )}
        <Typography variant="subtitle2" fontWeight={900} sx={{ mt: 1.25 }}>
          A. 초기 설치비 합계: {formatKRW(reportView.sumInit)}원
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, lineHeight: 1.8 }}>
          {reportText.initCostAssessment}
        </Typography>
      </Box>

      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          background: "rgba(255,255,255,0.7)",
          border: "1px solid rgba(15,23,42,0.08)",
          boxShadow: "0 12px 24px rgba(15,23,42,0.08)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Typography fontWeight={900} sx={{ mb: 1, fontSize: 18 }}>
          4. 예상 연간 운영비 산정 내역 (B)
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.8 }}>
          연간 운영비는 품목별 단월 전력 사용량 및 단월 용수 사용량을 기준으로 산정하였습니다.
        </Typography>

        {reportView.pickedItems.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            선택된 품목이 없습니다.
          </Typography>
        ) : (
          <DenseTable
            head={["구분", "품목명", "단월 전력 사용량", "단월 용수 사용량", "수량", "연간 합계"]}
            rows={reportView.pickedItems.map((it, idx) => {
              const annual = calcAnnualPerUnit(it) * it.qty;
              return [String(idx + 1), it.name, it.elecMonthly, it.waterMonthly, `${it.qty}대`, annual];
            })}
            footer={[
              "",
              "합계",
              "",
              "",
              `${reportView.pickedItems.reduce((a, x) => a + x.qty, 0)}대`,
              reportView.sumAnnual,
            ]}
          />
        )}
        <Typography variant="subtitle2" fontWeight={900} sx={{ mt: 1.25 }}>
          B. 예상 연간 운영비 합계: {formatKRW(reportView.sumAnnual)}원
        </Typography>
        <Typography variant="body2" sx={{ mt: 0.75, lineHeight: 1.75 }}>
          연간 운영비는 입력된 단월 전력·용수 사용량을 기준으로 산정된 금액으로, 운영기간 동안의 비용 관리 참고값으로
          활용됩니다.
        </Typography>
      </Box>

      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          background: "rgba(255,255,255,0.7)",
          border: "1px solid rgba(15,23,42,0.08)",
          boxShadow: "0 12px 24px rgba(15,23,42,0.08)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Typography fontWeight={900} sx={{ mb: 1, fontSize: 18 }}>
          5. 운영기간 기준 총 소요예산 분석
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5, lineHeight: 1.8 }}>
          총 소요예산은 다음의 산식에 따라 산정하였습니다.
        </Typography>

        <Box
          sx={{
            p: 1.5,
            borderRadius: 1.5,
            bgcolor: "rgba(25,118,210,0.12)",
            border: "1px solid",
            borderColor: "rgba(25,118,210,0.35)",
            fontWeight: 800,
            textAlign: "center",
            color: "#0b2a4a",
          }}
        >
          초기 설치비(A) + 연간 운영비(B) × 운영기간 = 운영기간 총 소요예산
        </Box>

        <Box
          sx={{
            mt: 1.5,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "200px 1fr" },
            gap: 1.5,
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              borderRadius: 2,
              border: "1px solid rgba(25,118,210,0.2)",
              bgcolor: "rgba(25,118,210,0.04)",
              px: 1.5,
              py: 1.25,
              textAlign: "center",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 0.5,
            }}
          >
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              예산 사용률
            </Typography>
            <Box sx={{ mt: 0.75, display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: 120,
                  height: 60,
                  borderTopLeftRadius: 120,
                  borderTopRightRadius: 120,
                  overflow: "hidden",
                  background: `conic-gradient(from 180deg, ${reportUsageColor} 0% ${Math.min(
                    reportView.usagePct,
                    100
                  )}%, ${reportUsageBgColor} ${Math.min(reportView.usagePct, 100)}% 100%)`,
                }}
              />
            </Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 900, mt: 0.5, color: reportView.remain < 0 ? "error.main" : "text.primary" }}
            >
              {reportView.usagePct.toFixed(1)}%
            </Typography>
          </Box>

          <Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" },
                gap: 1,
              }}
            >
              {[
                ["운영기간", `${reportView.years}년`],
                ["가용 예산", `${formatKRW(reportView.budget)}원`],
                [reportView.remain >= 0 ? "잔여 예산" : "부족 금액", `${formatKRW(Math.abs(reportView.remain))}원`],
              ].map(([label, value]) => (
                <Box
                  key={label}
                  sx={{
                    borderRadius: 2,
                    border: "1px solid rgba(25,118,210,0.2)",
                    bgcolor: "rgba(25,118,210,0.04)",
                    px: 1.5,
                    py: 1.25,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    {label}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 900, mt: 0.25 }}>
                    {value}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1} alignItems="stretch" sx={{ mt: 1.25 }}>
              {[
                ["초기 설치비 합계(A)", `${formatKRW(reportView.sumInit)}원`],
                ["예상 연간 운영비 합계(B)", `${formatKRW(reportView.sumAnnual)}원`],
                ["운영기간 총 소요예산", `${formatKRW(reportView.sumTotal)}원`],
              ].map(([label, value], idx) => (
                <React.Fragment key={label}>
                  <Box
                    sx={{
                      flex: 1,
                      borderRadius: 2,
                      border: "1px solid rgba(25,118,210,0.2)",
                      bgcolor: "rgba(25,118,210,0.04)",
                      px: 1.5,
                      py: 1.25,
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                      {label}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 900, mt: 0.25 }}>
                      {value}
                    </Typography>
                  </Box>
                  {idx < 2 && (
                    <Box
                      sx={{
                        px: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "text.secondary",
                        fontWeight: 900,
                      }}
                    >
                      {idx === 0 ? "+" : "="}
                    </Box>
                  )}
                </React.Fragment>
              ))}
            </Stack>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ mt: 1.5, lineHeight: 1.8 }}>
          {reportText.totalCostAnalysis}
        </Typography>
      </Box>

      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          background: "rgba(255,255,255,0.7)",
          border: "1px solid rgba(15,23,42,0.08)",
          boxShadow: "0 12px 24px rgba(15,23,42,0.08)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Typography fontWeight={900} sx={{ mb: 0.75, fontSize: 18 }}>
          6. 설치 유형별 기대 효과
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.75 }}>
          본 사업은 비교적 제한적인 예산 투입으로도 다수 시민이 체감 가능한 폭염 완화 효과를 제공할 수 있는
          사업입니다. 특히 냉방시설 설치 대비 에너지 사용 효율이 높아 비용 대비 효과 측면에서 우수한 사업으로
          판단됩니다.
        </Typography>
        <Box sx={{ mt: 1 }}>
          {expectedEffectLines.length > 0 ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                gap: 1.25,
              }}
            >
              {expectedEffectLines.map((line, idx) => {
                const [type, ...rest] = line.split(":");
                const content = rest.join(":").trim();
                const label = type?.trim();
                return (
                  <Box
                    key={`${line}-${idx}`}
                    sx={{
                      borderRadius: 2,
                      border: "1px solid rgba(76,175,80,0.22)",
                      background: "rgba(76,175,80,0.08)",
                      boxShadow: "0 8px 16px rgba(15,23,42,0.06)",
                      backdropFilter: "blur(4px)",
                      px: 2,
                      py: 1.75,
                      minHeight: 88,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 0.5,
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: 900 }}>
                      {label}
                    </Typography>
                    <Stack direction="row" spacing={0.75} alignItems="flex-start">
                      <Box
                        sx={{
                          mt: "4px",
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          bgcolor: "rgba(76,175,80,0.25)",
                          color: "#2e7d32",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          fontWeight: 900,
                          flex: "0 0 auto",
                        }}
                      >
                        ✓
                      </Box>
                      <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                        {content}
                      </Typography>
                    </Stack>
                  </Box>
                );
              })}
            </Box>
          ) : (
            <Typography variant="body2" sx={{ lineHeight: 1.75 }}>
              {reportText.expectedEffect}
            </Typography>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          background: "rgba(255,255,255,0.7)",
          border: "1px solid rgba(15,23,42,0.08)",
          boxShadow: "0 12px 24px rgba(15,23,42,0.08)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Typography fontWeight={900} sx={{ mb: 0.75, fontSize: 18 }}>
          7. 리스크 요인 및 관리 방안
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.75, mb: 1.25 }}>
          상기 방안을 통해 운영상의 리스크는 충분히 관리 가능한 수준으로 판단됩니다.
        </Typography>
        {riskItems.length > 0 ? (
          <Stack spacing={1}>
            {riskItems.map((item, idx) => (
              <Box
                key={`${item.risk}-${idx}`}
                sx={{
                  borderRadius: 2,
                  border: "1px solid rgba(25,118,210,0.28)",
                  background: "rgba(25,118,210,0.08)",
                  boxShadow: "0 6px 14px rgba(15,23,42,0.08)",
                  backdropFilter: "blur(2px)",
                  p: 2,
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 800, lineHeight: 1.7 }}>
                  {item.risk}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  {item.mitigation}
                </Typography>
              </Box>
            ))}
          </Stack>
        ) : (
          <Typography variant="body2" sx={{ lineHeight: 1.75 }}>
            {String(reportText.riskManagement ?? "")}
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          background: "rgba(255,255,255,0.7)",
          border: "1px solid rgba(15,23,42,0.08)",
          boxShadow: "0 12px 24px rgba(15,23,42,0.08)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Typography fontWeight={900} sx={{ mb: 0.75, fontSize: 18 }}>
          8. 종합 검토 의견
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.75, mb: 1 }}>
          상기 분석 결과를 토대로 예산·운영 측면의 핵심 판단을 종합 정리하였습니다.
        </Typography>
        <Box
          sx={{
            borderRadius: 2,
            border: "1px solid rgba(255,224,130,0.22)",
            background: "rgba(255,249,196,0.45)",
            boxShadow: "0 8px 16px rgba(15,23,42,0.06)",
            backdropFilter: "blur(4px)",
            p: 2,
          }}
        >
          <Typography variant="body2" sx={{ lineHeight: 1.8, whiteSpace: "pre-line", fontWeight: 600 }}>
            {reportText.finalOpinion}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          background: "rgba(255,255,255,0.7)",
          border: "1px solid rgba(15,23,42,0.08)",
          boxShadow: "0 12px 24px rgba(15,23,42,0.08)",
          backdropFilter: "blur(6px)",
        }}
      >
        <Typography fontWeight={900} sx={{ mb: 0.75, fontSize: 18 }}>
          9. 운영비 관리 포인트
        </Typography>
        <Stack direction="row" spacing={1} alignItems="flex-start">
          <Box
            sx={{
              mt: "4px",
              width: 18,
              height: 18,
              borderRadius: "50%",
              bgcolor: "rgba(25,118,210,0.18)",
              color: "#1565c0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: 900,
              flex: "0 0 auto",
            }}
          >
            !
          </Box>
          <Typography variant="body2" sx={{ lineHeight: 1.75 }}>
            {reportText.opexPoint}
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          borderRadius: 2,
          border: "1px dashed rgba(15,23,42,0.2)",
          background: "rgba(15,23,42,0.03)",
          px: 1.5,
          py: 1,
        }}
      >
        <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.6, display: "block" }}>
          {reportText.notice}
        </Typography>
      </Box>
    </Stack>
  );
}
