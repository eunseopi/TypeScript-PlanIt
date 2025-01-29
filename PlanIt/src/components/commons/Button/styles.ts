import styled from '@emotion/styled'
import {css} from'@emotion/react'
import '../../../styles/variables.css'
import { ButtonProps } from './types'

// 기본 스타일
const baseButtonStyles = css`
    display:flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family-body);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    gap: 0.5rem;

    &:disabled {
    cursor: not-allowed;
    }
`

// 크기별 스타일
const buttonSizes = {
    small: css`
    `,
    medium: css`
    `,
    large: css`
        border-radius: 28px;
        padding: 16px 24px;
        font-size: 16px;
    `
}

// variant별 스타일
const buttonVariants = {
    primary: css`
        background-color: var(--primary-color);
        color: #F5F9FF;
        border: none;
    `,
    secondary: css`
        border: 1px solid #D9D9D9;
        color: var(--text-default);
    `,
    outline: css``,
}


// 컴포넌트
export const StyledButton = styled.button<ButtonProps>`
    ${baseButtonStyles}
    ${props => buttonSizes[props.size || 'medium']}
    ${props => buttonVariants[props.variant || 'primary']}
    ${props => props.fullWidth && css`width: 100%`}
`
