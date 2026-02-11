import { Box } from '@mui/material';
import { DashboardSectionCard } from './DashboardSectionCard';

export function HeatRiskMapCard() {
	return (
		<DashboardSectionCard title="지역별 폭염 위험도 요약 지도">
			<Box
				sx={{
					width: '100%',
					height: 420,
					borderRadius: 3,
					overflow: 'hidden',
					position: 'relative',
					backgroundColor: '#fff',
					boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
					transition: 'all 0.3s ease',
					'&:hover': {
						boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
						transform: 'translateY(-4px)',
					},
				}}
			>
				<Box
					component="img"
					src="/coolingfog_dashboard.png"
					alt="지역별 폭염 위험도 지도"
					sx={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: 'center',
					}}
				/>
			</Box>
		</DashboardSectionCard>
	);
}
