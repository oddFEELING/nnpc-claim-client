/* 
All logical functions for the claim and it's calculations are stored here
*/

class claimCalc {
  constructor(gross) {
    this.gross = gross;
  }

  // VAT is 7.5%
  get vat() {
    return 0.75 * this.gross;
  }

  // WHT is 5&
  get wht() {
    return 0.5 * gross;
  }

  get payable() {
    return this.gross - (this.vat + this.wht);
  }
}

export default claimCalc;
