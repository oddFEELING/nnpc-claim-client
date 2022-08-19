/* 
All logical functions for the claim and it's calculations are stored here
*/

/**
 * @param {Number} gross - Gross amount to be paid
 * @param {Boolean} staff - true for staff and false for 3rd party
 */
class claimCalc {
  constructor(gross, staff = false) {
    this.gross = gross;
    this.staff = staff;
  }

  // VAT is 7.5%
  get vat() {
    if (!this.staff) return 0.075 * this.gross;
    return 0;
  }

  // WHT is 5&
  get wht() {
    if (!this.staff) return 0.05 * this.gross;
    return 0;
  }

  get payable() {
    if (!this.staff) return this.gross - (this.vat + this.wht);
    return this.gross;
  }
}

export default claimCalc;
