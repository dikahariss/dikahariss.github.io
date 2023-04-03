import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

export default function FacebookPixel() {
  useEffect(() => {
    const advancedMatching = {
      ct: "product",
      country: "id",
      db: "01/01/2000",
      em: "email@example.com",
      fn: "John",
      ge: "male",
      ln: "Doe",
      ph: "1234567890",
      st: "Jawa Barat",
      zp: "12345",
    };

    const options = {
      autoConfig: true,
      debug: false,
    };

    ReactPixel.init("482981710599913", advancedMatching, options);
    ReactPixel.pageView();
  }, []);

  return null;
}
