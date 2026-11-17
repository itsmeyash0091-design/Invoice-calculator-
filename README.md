# Invoice demo

This small Node.js project uses `@ved_0091/rupee-format` to calculate and display an Indian GST invoice.

## Run locally

From this folder, run:

```bash
npm install
npm start
```

The dependency currently uses `file:..`, which means it installs the package from the folder above. After `@ved_0091/rupee-format` is published, replace that dependency value in `package.json` with `"^0.1.0"` and run `npm install` again.
