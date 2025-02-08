// import { inputStyles } from "./styles";
import { Container, Label, StyledInput, ErrorMessage } from './styles'

const Input = ({ 
    label, 
    id, 
    type = 'text', 
    value, 
    onChange, 
    placeholder, 
    error, 
    hasError, 
    required=false
}) => {
    return (
        <Container>
            {label && (
                <Label htmlFor={id}>
                    {label}
                </Label>
            )}
            <StyledInput
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                hasError={hasError}
                required={required}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    )
}

export default Input;