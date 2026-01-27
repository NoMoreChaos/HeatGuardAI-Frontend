"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import type { CoolingFogData } from '@/dummydata/coolingFogs';

type RealTimeInfoPanelProps = {
	selectedCoolingFog: CoolingFogData | null;
};

type DetailRowProps = {
	label: string;
	value: string;
};

function DetailRow({ label, value }: DetailRowProps): React.JSX.Element {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1 }}>
			<Typography variant="body2" color="text.secondary">
				{label}
			</Typography>
			<Typography variant="body1" sx={{ fontWeight: 600 }}>
				{value}
			</Typography>
		</Box>
	);
}

function PlaceholderState(): React.JSX.Element {
	return (
		<Box
			sx={{
				minHeight: 500,
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				px: 3,
				py: 5,
				textAlign: 'center',
			}}
		>
			<Box>
				<Box
					component="img"
					src="/assets/marker.svg"
					alt="쿨링포그 설치 위치"
					sx={{ width: 80, height: 90, mx: 'auto', mb: 5 }}
				/>
				<Typography variant="h6" sx={{ fontWeight: 700 }}>
					선택된 쿨링포그 위치가 없습니다.
				</Typography>
				<Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
					조회하고 싶은 쿨링포그 위치를 지도에서 선택해주세요
				</Typography>
			</Box>
		</Box>
	);
}

type DetailStateProps = {
	fog: CoolingFogData;
};

function DetailState({ fog }: DetailStateProps): React.JSX.Element {
	const locationName = fog.cf_location.trim() || '-';

	return (
		<Box sx={{ px: 4, py: 1 }}>
			<Box
				sx={{
					borderRadius: 2,
					border: '1px solid',
					borderColor: 'grey.100',
					p: 2,
					bgcolor: 'common.white',
				}}
			>
				<Typography variant="h6" color="text.primary">
					현재 선택 위치
				</Typography>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mt: 2 }}>
					<Box>
						<Typography variant="h5" sx={{ fontWeight: 600 }}>
							{locationName}
						</Typography>
					</Box>
				</Box>
			</Box>

			<Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mt: 3 }}>
				<Box
					sx={{
						flex: '1 1 320px',
						borderRadius: 2,
						border: '1px solid',
						borderColor: 'grey.100',
						p: 2,
						bgcolor: 'common.white',
					}}
				>
					<Typography variant="subtitle2" color="text.primary">
						운영 및 담당자 정보
					</Typography>
					<Box sx={{ mt: 1 }}>
						<Chip label={fog.cf_state ? '운영중' : '중지'} color={fog.cf_state ? 'success' : 'error'} variant="filled" />
					</Box>
					<Box sx={{ mt: 2 }}>
						<DetailRow label="소속" value={fog.cf_manager_dept} />
						<DetailRow label="이름" value={fog.cf_manager_nm} />
						<DetailRow label="전화번호" value={fog.cf_manager_contact} />
					</Box>
				</Box>
				<Box
					sx={{
						flex: '1 1 320px',
						borderRadius: 2,
						border: '1px solid',
						borderColor: 'grey.100',
						p: 2,
						bgcolor: 'common.white',
					}}
				>
					<Typography variant="subtitle2" color="text.primary">
						환경 정보
					</Typography>
					<Box sx={{ mt: 2, display: 'grid', gap: 2 }}>
						<DetailRow label="선택 위치 온도" value={`${(fog.cf_nearby_temp * 0.9).toFixed(1)}°C`} />
						<DetailRow label="주변 온도" value={`${fog.cf_nearby_temp}°C`} />
						<DetailRow label="습도" value={`${fog.cf_hum_per}%`} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export function RealTimeInfoPanel({ selectedCoolingFog }: RealTimeInfoPanelProps): React.JSX.Element {
	if (!selectedCoolingFog) {
		return (
			<Card sx={{ borderRadius: 3, border: '1px solid', borderColor: 'grey.300', boxShadow: 1 }}>
				<PlaceholderState />
			</Card>
		);
	}

	return (
		<Card sx={{ borderRadius: 3, border: '1px solid', borderColor: 'grey.300', boxShadow: 1 }}>
			<DetailState fog={selectedCoolingFog} />
		</Card>
	);
}
