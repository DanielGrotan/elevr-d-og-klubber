import imagesJson from "./assets/data/news-images.json" assert { type: "json" };
import carousel from "./utils/carousel.js";
import colorTheme from "./utils/colorTheme.js";
import mobileNav from "./utils/mobileNav.js";

colorTheme();
mobileNav();
carousel(imagesJson);
