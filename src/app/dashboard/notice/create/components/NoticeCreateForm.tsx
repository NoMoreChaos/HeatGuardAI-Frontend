'use client';

import { Stack } from '@mui/material';
import { NoticeTitleField } from "@/app/dashboard/notice/create/components/NoticeTitleField";
import { NoticeCategorySelect } from "@/app/dashboard/notice/create/components/NoticeCategorySelect";
import { NoticeFogSelect } from "@/app/dashboard/notice/create/components/NoticeFogSelect";
import { NoticeContentField } from "@/app/dashboard/notice/create/components/NoticeContentField";
import { NoticeFileUpload } from "@/app/dashboard/notice/create/components/NoticeFileUpload";
import { NoticePinCheckbox } from "@/app/dashboard/notice/create/components/NoticePinCheckbox";
import { NoticeFormActions } from "@/app/dashboard/notice/create/components/NoticeFormActions";
import Typography from "@mui/material/Typography";

export function NoticeCreateForm() {
	return (
		<Stack
			spacing={4}
			sx={{
				backgroundColor: '#f7f8fa',
				p: '30px',
				borderRadius: 1, // 16px
				mt: 3,
				border: 'none',
				boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
				transition: 'box-shadow 150ms ease, transform 150ms ease',
				'&:hover': {
					boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
				},
			}}
		>
			<Typography variant="h5" fontWeight={700}>
				공지사항 작성
			</Typography>
			<NoticeTitleField />
			<NoticeCategorySelect />
			<NoticeFogSelect />
			<NoticeContentField />
			<NoticeFileUpload />
			<NoticePinCheckbox />
			<NoticeFormActions />
		</Stack>
	);
}
