import aboutMembersJson from "./assets/data/about-members.json" assert { type: "json" };
import imagesJson from "./assets/data/news-images.json" assert { type: "json" };
import carousel from "./utils/carousel.js";
import colorTheme from "./utils/colorTheme.js";
import aboutMembers from "./utils/elevrådet.js";
import mobileNav from "./utils/mobileNav.js";

colorTheme();
mobileNav();
carousel(imagesJson);
aboutMembers(aboutMembersJson);
