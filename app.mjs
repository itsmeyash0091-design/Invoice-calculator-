import {
  addGST,
  formatINR,
  formatPercentage,
  numberToIndianWords,
  splitGST
} from '@ved_0091/rupee-format';

const product = 'Wireless Headphones';
const unitPrice = 2499;
const quantity = 2;
const gstRate = 18;

const subtotal = unitPrice * quantity;
const invoice = addGST(subtotal, gstRate);
const { cgstAmount, sgstAmount } = splitGST(invoice.gstAmount, gstRate);
const wholeRupees = Math.floor(invoice.totalAmount);
const paise = Math.round((invoice.totalAmount - wholeRupees) * 100);

console.log('='.repeat(42));
console.log('              TAX INVOICE');
console.log('='.repeat(42));
console.log(`Product:    ${product}`);
console.log(`Quantity:   ${quantity}`);
console.log(`Unit price: ${formatINR(unitPrice)}`);
console.log('-'.repeat(42));
console.log(`Subtotal:   ${formatINR(subtotal)}`);
console.log(`GST (${formatPercentage(gstRate)}):  ${formatINR(invoice.gstAmount)}`);
console.log(`  CGST:     ${formatINR(cgstAmount)}`);
console.log(`  SGST:     ${formatINR(sgstAmount)}`);
console.log('='.repeat(42));
console.log(`Total:      ${formatINR(invoice.totalAmount)}`);
console.log(`In words:   ${numberToIndianWords(wholeRupees)} Rupees and ${numberToIndianWords(paise)} Paise Only`);
console.log('='.repeat(42));
