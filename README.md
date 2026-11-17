# GST Invoice Calculator Demo

This small Node.js project calculates and displays an Indian GST invoice using the published [`@ved_0091/rupee-format`](https://www.npmjs.com/package/@ved_0091/rupee-format) npm package.

## Package used

This project installs the public npm package, not a local folder copy:

```json
"@ved_0091/rupee-format": "^0.1.0"
```

The code imports it directly:

```js
import { addGST, formatINR, formatPercentage, numberToIndianWords, splitGST } from '@ved_0091/rupee-format';
```

The package provides INR formatting, GST calculation, CGST/SGST splitting, percentage formatting, and Indian number words.

## Run the project

From this folder, run:

```bash
npm install
npm start
```

`npm install` downloads `@ved_0091/rupee-format` from npm. The output shows a GST invoice with Indian currency formatting and amount-in-words support.
