[![Build Status](https://travis-ci.org/AdrianMendez1199/react-barcode-scanner.svg?branch=master)](https://travis-ci.org/AdrianMendez1199/react-barcode-scanner) 
[![Coverage Status](https://coveralls.io/repos/github/AdrianMendez1199/react-barcode-scanner/badge.svg?branch=master)](https://coveralls.io/github/AdrianMendez1199/react-barcode-scanner?branch=master)


# barcode-react-scanner

Is a simple react component to read barcodes.


## How to use ? 


### Install


Recommended way to install is by using package manager (npm, yarn etc):

``` sh
npm i barcode-react-scanner
```

or

```sh
yarn add barcode-react-scanner
```

### Use

```tsx
import React, { useState } from 'react';
import BarCodeScanner from 'barcode-react-scanner';

const TestingComponent = (): JSX.Element => {

 const [code, setCode] = useState<string>('')

 return (
     <>
     { code && <p> code </p> }
     <BarCodeScanner onUpdate={ (err, resp): void => {
         if(resp) {
             setCode(resp.getText())
         }
      }}
    />
    </>
 );

}

export default TestingComponent;
```