import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function () {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
    });
  }, []);
}
