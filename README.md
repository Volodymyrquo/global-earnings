# global-earnings

This package includes return the component of Global Earnings page for the Sumra products.

After building the module, in your application you can check that both versions of React are now the same:

// node_modules/mymodule/src/index.js
export { default as ReactFromModule } from 'react'

// src/index.js
import React from 'react'
import { ReactFromModule } from 'mymodule'
console.log(React === ReactFromModule) // true :)

If the application has multiple instances of React it could be resolved by adding alias to the webpack.config.js :

```resolve {
alias {
react: path.resolve("./node_modules/react"),
"react-dom": path.resolve("./node_modules/react-dom"),
}
}
```

If application is created by create-react-app the webpack.config.js could be found at:
./node_modules/react-scripts/config/
