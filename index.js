import aboutMembersJson from "./assets/data/about-members.json" assert { type: "json" };
import clubWebsitesJson from "./assets/data/club-websites.json" assert { type: "json" };
import imagesJson from "./assets/data/news-images.json" assert { type: "json" };
import aboutMembers from "./utils/aboutMembers.js";
import carousel from "./utils/carousel.js";
import clubWebsites from "./utils/clubWebsites.js";
import colorTheme from "./utils/colorTheme.js";
import mobileNav from "./utils/mobileNav.js";

colorTheme();
mobileNav();
carousel(imagesJson);
aboutMembers(aboutMembersJson);
clubWebsites(clubWebsitesJson);
