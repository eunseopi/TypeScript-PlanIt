import { ChipWrapper } from "./styles";

interface ChipProps {
  label: string;
  emoji: string;
  size?: "small" | "medium";
  state?: "selected" | "unselected";
  [key: string]: any;
}

const Chip = ({
  label,
  emoji,
  size = "medium",
  state = "unselected",
  ...props
}: ChipProps) => {
  return (
    <ChipWrapper size={size} state={state} {...props}>
      <span>{emoji}</span>
      <span>{label}</span>
    </ChipWrapper>
  );
};

export default Chip;
