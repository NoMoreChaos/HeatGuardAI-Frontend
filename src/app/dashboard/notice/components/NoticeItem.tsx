'use client';

import { Box, Chip, Paper, Typography } from "@mui/material";
import type { NoticeType } from "@/types/notice/notice";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from "next/navigation";
import { paths } from "@/paths";

const noticeTypeStyles: Record<NoticeType, { bg: string; fg: string }> = {
	공지: { bg: "#17AACF", fg: "#ffffff" },
	업데이트: { bg: "#318CE8", fg: "#ffffff" },
	점검: { bg: "#EDF1F3", fg: "#1f2933" },
	이벤트: { bg: "#F59F0A", fg: "#ffffff" },
};

interface NoticeItemProps {
	noticeCd: string;
	type: NoticeType;
	date: string;
	title: string;
	pinned?: boolean;
}

export function NoticeItem({ noticeCd, type, date, title, pinned = false}: NoticeItemProps) {
	const router = useRouter();
	return (
		<Paper
			variant="outlined"
			onClick={() => {
				router.push(`${paths.dashboard.noticeDetail}/${noticeCd}`);
			}}
			sx={{
				p: 2,
				borderRadius: 2,
				borderLeft: pinned ? '4px solid #14A9CE' : undefined,
				backgroundColor: pinned ? '#EDF5F8' : undefined,
				cursor: 'pointer',

				transition: `
					background-color 180ms ease,
					box-shadow 180ms ease,
					transform 180ms ease
				`,

				'&:hover': {
					backgroundColor: pinned ? '#d8ebf4' : '#f9fafb',
					boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
					transform: 'translateY(-2px)',
				},
			}}
		>
			<Box display="flex" justifyContent="space-between">
				<Box>
					<Box display="flex" gap={1} alignItems="center">
						<Chip
							size="small"
							label={type}
							sx={{
								bgcolor: noticeTypeStyles[type].bg,
								color: noticeTypeStyles[type].fg,
								'& .MuiChip-label': { fontWeight: 700 },
							}}
						/>
						<Typography variant="caption" color="text.secondary">
							{date}
						</Typography>
					</Box>

					<Typography mt={1.5} ml={0.5} fontWeight={700}>
						{title}
					</Typography>
				</Box>
				<ChevronRightIcon
					sx={{
						color: 'text.secondary',
						opacity: 0.6,
					}}
				/>
			</Box>
		</Paper>
	);
}
