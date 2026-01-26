import { Box, Button } from '@mui/material';

export function NoticeFormActions() {
	return (
		<Box display="flex" justifyContent="space-between">
			<Button variant="outlined" color="secondary">취소</Button>
			<Button
				variant="contained"
				sx={{
					background: 'linear-gradient(90deg, #27C1C3 0%, #4ED6B8 100%)',
					px: 4,
					borderRadius: '999px',
				}}
			>
				등록하기
			</Button>
		</Box>
	);
}
