'use client';

import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

export function NoticeCreateHeader() {
	const router = useRouter();

	return (
		<Box
			sx={{ cursor: 'pointer', color: 'text.secondary', display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
			onClick={() => router.back()}
		>
			<ArrowBackIcon fontSize="small" />
			<Typography variant="body2">목록으로 돌아가기</Typography>
		</Box>
	);
}
