// app/dashboard/AIBestLocation/types/reco.ts

// -----------------------------
// Request (서버로 보내는 값)
// -----------------------------
export type RecoLocTypeCd = 0 | 1 | 2;

export type RegionMap = Record<string, string[]>;

export type RecoRequestBody = {
  target_count: number;          // 1~5 (전송 전 clamp는 프론트에서)
  target_region_gu: string;      // 예: "성북구" (미선택이면 "")
  target_region_dong: string;    // 예: "돈암동" (미선택이면 "")
  reco_loc_type_cd: RecoLocTypeCd; // 0: 전체 / 1: 고온핵심 / 2: 녹지부족
};

// -----------------------------
// Response Item (result[] 원소)
// -----------------------------
export type RecoLocItem = {
  lat: number;                              // 위도
  lng: number;                              // 경도
  reco_loc_rank: number;                    // 1,2,3...
  gee_address_full: string;                 // 주소(서버 키 그대로 사용)
  reco_loc_popu_level: string;              // 유동인구
  reco_loc_vulnerable_level: string;        // 취약계층 수준(적음/보통/많음)
  reco_loc_feel_temp: number;               // 체감온도
  reco_loc_lst_level: string;               // 지표면 온도 수준(낮음/보통/높음)
  reco_loc_ndvi_level: string;              // 자연공간 수준(낮음/보통/높음)
  reco_loc_total_score: number;             // 종합점수
  reco_loc_desc?: string[];                 // 추천 사유 리스트
};

// -----------------------------
// Response (서버 응답 전체)
// -----------------------------
export type RecoApiResponse = {
  success: boolean;
  data?: {
    result_address: string;   // 선택한 주소
    result_count: number;     // 결과 수
    result: RecoLocItem[];    // 추천 리스트(순위 오름차순)
  };
  error?: string | null;
};
