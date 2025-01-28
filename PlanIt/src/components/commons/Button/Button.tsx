import React from "react";
import { ButtonProps } from './types';
import { StyledButton } from './styles';

const Button: React.FC<ButtonProps> =({
    children,
    variant,
    size,
    fullWidth,
    disabled,
    ...props
}) => {
    return(
        <StyledButton
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            disabled={disabled}
            {...props}
        >
            {children}
        </StyledButton>
    )
}

export default Button;