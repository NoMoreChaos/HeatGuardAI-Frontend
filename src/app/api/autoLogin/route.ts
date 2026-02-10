import { NextResponse } from 'next/server';
import axios, { isAxiosError } from 'axios';
import { ok, fail } from '@/app/api/api-response';
import type { LoginResult } from '@/types/login/login';

export async function POST() {
	const email = process.env.TEST_EMAIL;
	const password = process.env.TEST_PASSWORD;

	if (!email || !password) {
		return NextResponse.json(fail<LoginResult>('TEST_EMAIL 또는 TEST_PASSWORD가 없습니다.'), { status: 400 });
	}

	try {
		const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
		const response = await axios.post(`${apiUrl}/api/users/signin`, { id: email, password });

		return response.data.success
			? NextResponse.json(ok<LoginResult>(response.data.data))
			: NextResponse.json(fail<LoginResult>(response.data.error ?? '로그인 실패'), { status: 400 });
	} catch (error) {
		if (isAxiosError(error)) {
			const message = error.response?.data?.error ?? '서버와 통신 중 오류가 발생했습니다.';
			const status = error.response?.status ?? 500;
			return NextResponse.json(fail<LoginResult>(message), { status });
		}
		return NextResponse.json(fail<LoginResult>('알 수 없는 오류'), { status: 500 });
	}
}
