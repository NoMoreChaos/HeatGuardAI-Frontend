// app/dashboard/AIBestLocation/data/ai-best-location.ts
import type { RecoApiResponse } from "@/types/AIBestLocation/reco";

/**
 * ✅ AI 최적 위치 추천 더미데이터
 */
export const MOCK_RECO_RESPONSE: RecoApiResponse = {
  "success": true,
  "data": {
    "result_address": "서울특별시 성북구 길음동",
    "result_count": 5,
    "result": [
      {
        "lat": 37.6105,
        "lng": 127.0255,
        "reco_loc_rank": 6,
        "gee_address_full": "서울 성북구 길음동 5",
        "reco_loc_popu_level": "보통",
        "reco_loc_vulnerable_score": 84,
        "reco_loc_feel_temp": 31.9,
        "reco_loc_lst_score": 67.5,
        "reco_loc_ndvi_score": 15,
        "reco_loc_total_score": 88,
        "reco_loc_desc": [
          "열섬 현상은 두드러지지 않지만 체감온도가 매우 높게 나타납니다.",
          "실제 기온보다 더 심한 더위를 인지하게 되어 야외에서 활동하는 주민의 불쾌감이 크게 증가할 수 있습니다.",
          "폭염 시 보행자가 실외를 오랜 시간 이동할 때 쿨링포그 설치가 건강 보호에 도움이 됩니다."
        ]
      },
      {
        "lat": 37.6103,
        "lng": 127.0253,
        "reco_loc_rank": 21,
        "gee_address_full": "서울 성북구 길음동 3",
        "reco_loc_popu_level": "적음",
        "reco_loc_vulnerable_score": 69,
        "reco_loc_feel_temp": 31.6,
        "reco_loc_lst_score": 61.1,
        "reco_loc_ndvi_score": 32,
        "reco_loc_total_score": 77,
        "reco_loc_desc": [
          "열섬 현상은 두드러지지 않지만 체감온도가 매우 높게 나타납니다.",
          "실제 기온보다 더 심한 더위를 인지하게 되어 야외에서 활동하는 주민의 불쾌감이 크게 증가할 수 있습니다.",
          "폭염 시 보행자가 실외를 오랜 시간 이동할 때 쿨링포그 설치가 건강 보호에 도움이 됩니다."
        ]
      },
      {
        "lat": 37.6101,
        "lng": 127.0251,
        "reco_loc_rank": 25,
        "gee_address_full": "서울 성북구 길음동 1",
        "reco_loc_popu_level": "적음",
        "reco_loc_vulnerable_score": 71,
        "reco_loc_feel_temp": 35.9,
        "reco_loc_lst_score": 77.1,
        "reco_loc_ndvi_score": 37,
        "reco_loc_total_score": 76,
        "reco_loc_desc": [
          "열섬 현상은 두드러지지 않지만 체감온도가 매우 높게 나타납니다.",
          "실제 기온보다 더 심한 더위를 인지하게 되어 야외에서 활동하는 주민의 불쾌감이 크게 증가할 수 있습니다.",
          "폭염 시 보행자가 실외를 오랜 시간 이동할 때 쿨링포그 설치가 건강 보호에 도움이 됩니다."
        ]
      },
      {
        "lat": 37.6104,
        "lng": 127.0254,
        "reco_loc_rank": 27,
        "gee_address_full": "서울 성북구 길음동 4",
        "reco_loc_popu_level": "적음",
        "reco_loc_vulnerable_score": 84,
        "reco_loc_feel_temp": 32.6,
        "reco_loc_lst_score": 69.2,
        "reco_loc_ndvi_score": 12,
        "reco_loc_total_score": 75,
        "reco_loc_desc": [
          "열섬 현상은 두드러지지 않지만 체감온도가 매우 높게 나타납니다.",
          "실제 기온보다 더 심한 더위를 인지하게 되어 야외에서 활동하는 주민의 불쾌감이 크게 증가할 수 있습니다.",
          "폭염 시 보행자가 실외를 오랜 시간 이동할 때 쿨링포그 설치가 건강 보호에 도움이 됩니다."
        ]
      },
      {
        "lat": 37.6102,
        "lng": 127.0252,
        "reco_loc_rank": 36,
        "gee_address_full": "서울 성북구 길음동 2",
        "reco_loc_popu_level": "적음",
        "reco_loc_vulnerable_score": 73,
        "reco_loc_feel_temp": 35.1,
        "reco_loc_lst_score": 70.5,
        "reco_loc_ndvi_score": 36,
        "reco_loc_total_score": 72,
        "reco_loc_desc": [
          "열섬 현상은 두드러지지 않지만 체감온도가 매우 높게 나타납니다.",
          "실제 기온보다 더 심한 더위를 인지하게 되어 야외에서 활동하는 주민의 불쾌감이 크게 증가할 수 있습니다.",
          "폭염 시 보행자가 실외를 오랜 시간 이동할 때 쿨링포그 설치가 건강 보호에 도움이 됩니다."
        ]
      }
    ]
  },
  "error": null
};
