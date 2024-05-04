import { DeliverySteps } from './DeliverySteps';
import { PaymentStep } from './PaymentStep';
import { PersonalDataStep } from './PersonalDataStep';

export const Steps = {
	PersonalData: PersonalDataStep,
	Delivery: DeliverySteps,
	Payment: PaymentStep,
};
