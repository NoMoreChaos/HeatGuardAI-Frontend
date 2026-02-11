"use client";

import * as React from "react";
import Link from "@mui/material/Link";
import { openPopup } from "@/lib/open-popup"; // 경로는 프로젝트에 맞게 조정
import type { SxProps } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

const PRIVACY_URL = process.env.NEXT_PUBLIC_PRIVACY_URL ?? "";

export interface PrivacyLinkProps {
	sx?: SxProps<Theme>;
}


export function PrivacyLink({ sx }: PrivacyLinkProps): React.JSX.Element {
  const handleOpen = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    openPopup(PRIVACY_URL, "privacy");
  };

  return (
    <Link
      href={PRIVACY_URL || "#"}
      onClick={PRIVACY_URL ? handleOpen : undefined}
      underline="hover"
      color="text.secondary"
      variant="body2"
      sx={{ fontWeight: 600, ...sx}}
      aria-disabled={!PRIVACY_URL}
      tabIndex={PRIVACY_URL ? 0 : -1}
    >
      개인정보 처리방침
    </Link>
  );
}
