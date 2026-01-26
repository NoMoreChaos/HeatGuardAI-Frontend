import { TextField } from '@mui/material';

export function NoticeTitleField() {
	return (
		<TextField
			label="제목"
			placeholder="공지사항 제목을 입력하세요"
			fullWidth
			size="small"
			sx={{
				'& .MuiOutlinedInput-root': {
					backgroundColor: '#fff',
					borderRadius: 1,
					'& fieldset': {
						borderColor: '#e5e7eb',
					},
					'&:hover fieldset': {
						borderColor: '#e5e8e8',
					},
					'&.Mui-focused fieldset': {
						borderColor: '#e5e8e8',
					},
				},
			}}
		/>
	);
}
