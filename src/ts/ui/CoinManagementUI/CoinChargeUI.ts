import { $ } from '../../utils/dom';
import { viewPainter } from '../ViewPainter';
import { validateCash } from './validator';

export default class CoinChargeUI {
  private coinDomain;

  constructor(coinDomain) {
    this.coinDomain = coinDomain;
    this.addSubmitEvent();
  }

  addSubmitEvent() {
    $('.coin-charge__form').addEventListener('submit', this.submitHandler);
  }

  submitHandler = (e: Event) => {
    e.preventDefault();

    if (!(e.target instanceof HTMLFormElement)) return;

    const cashInput = e.target.elements.namedItem(
      'cashInput',
    ) as HTMLInputElement;
    const cash = cashInput.valueAsNumber;

    try {
      validateCash(cash);
    } catch ({ message }) {
      alert(message);
      return;
    }

    this.coinDomain.addCash(cash);

    $('.coin-charge__total-cash').textContent = this.coinDomain.totalCash;
    viewPainter.renderCoins();
  };
}