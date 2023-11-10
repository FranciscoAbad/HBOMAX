import { RegisteForm } from "../components/RegisterForm/RegisterForm";
import { RegisterFormTwo } from "../components/RegisterFormTwo/RegisterFormTwo";
import { RegisterPlanPicker } from "../components/RegisterPlanPicker/RegisterPlanPicker";

export const determineModalContent = (step: number): JSX.Element => {
  switch (step) {
    case 1:
      return <RegisterPlanPicker />;
    case 2:
      return <RegisteForm />;
    case 3:
      return <RegisterFormTwo />;

    default:
      return <span></span>;
  }
};
