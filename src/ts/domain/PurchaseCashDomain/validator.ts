import { MESSAGE, PURCHASE_CASH_RULE } from '../../constants';
import { isInvalidNumber } from '../../utils/validator';

const validatePurchaseCash = (cash: number) => {
  if (isInvalidNumber(cash, PURCHASE_CASH_RULE)) {
    throw new Error(MESSAGE.ERROR_INVALID_PURCHASE_CASH);
  }
  return true;
};

export { validatePurchaseCash };