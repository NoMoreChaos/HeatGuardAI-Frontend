import { NextRequest, NextResponse } from "next/server";
import axios, { isAxiosError } from "axios";
import { MOCK_RECO_RESPONSE } from "@/app/dashboard/data/AIBestLocation/ai-best-location";
import type { RecoRequestBody } from "@/types/AIBestLocation/reco";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function POST(request: NextRequest) {
  if (!API_BASE_URL) {
    return NextResponse.json(MOCK_RECO_RESPONSE);
  }

  try {
    const body = (await request.json()) as RecoRequestBody;
    const authHeader = request.headers.get("authorization") ?? undefined;
    const response = await axios.post(`${API_BASE_URL}/api/ai-loc`, body, {
      headers: authHeader ? { Authorization: authHeader } : undefined,
    });

    console.log("서버 통신 성공");
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("AILocation API route error:", error);

    if (isAxiosError(error)) {
      return NextResponse.json(MOCK_RECO_RESPONSE);
    }

    return NextResponse.json(MOCK_RECO_RESPONSE);
  }
}
