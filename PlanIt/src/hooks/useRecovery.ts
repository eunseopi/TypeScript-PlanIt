import { useReducer } from "react";

interface RecoveryState {
  step: number;
  email: string;
}

type RecoveryAction =
  | { type: "NEXT_STEP" }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "RESET" };

interface UseRecoveryReturn {
  state: RecoveryState;
  handleNextStep: (data?: { email: string }) => void;
}

const initialState: RecoveryState = {
  step: 1,
  email: "",
};

const reducer = (
  state: RecoveryState,
  action: RecoveryAction
): RecoveryState => {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const useRecovery = (): UseRecoveryReturn => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNextStep = (data?: { email: string }): void => {
    if (state.step === 1 && data?.email) {
      dispatch({ type: "SET_EMAIL", payload: data.email });
    }
    dispatch({ type: "NEXT_STEP" });
  };

  return { state, handleNextStep };
};
