import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'; // 버튼 스타일
    size?: 'small' | 'medium' | 'large'; // 버튼 크기
    fullWidth?: boolean; // 버튼 사이즈
    disabled?: boolean; // 비활성화
}