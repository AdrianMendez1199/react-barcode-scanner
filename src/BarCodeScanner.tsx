import React, { useEffect } from 'react';
import { BrowserBarcodeReader, Result } from '@zxing/library';

const BarCodeScanner = (
  { onUpdate }: { onUpdate(err: unknown, result: Result | undefined): void  }
): JSX.Element => {
  const codeReader = new BrowserBarcodeReader();

  useEffect(() => {

    codeReader.decodeOnceFromVideoDevice(undefined, 'video')
      .then((result) => {
        /* istanbul ignore next */ 
        onUpdate(null, result)
      }).catch((e) => {
        onUpdate(e, undefined)
      })

    return (): void => {
      codeReader.reset()
    }

  }, [codeReader])

  return (
    <div id="scanner-container">
      <video id="video" className="dbrScanner-video" playsInline />
    </div>
  )
};

export default BarCodeScanner;