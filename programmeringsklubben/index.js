import clubMembersList from "../assets/data/club-members.json" assert { type: "json" };
import clubProjectsJson from "../assets/data/club-projects.json" assert { type: "json" };
import questions from "../assets/data/club-quiz.json" assert { type: "json" };
import clubMembers from "../utils/clubMembers.js";
import clubProjects from "../utils/clubProjects.js";
import colorTheme from "../utils/colorTheme.js";
import dailyJoke from "../utils/dailyJoke.js";
import mobileNav from "../utils/mobileNav.js";
import quiz from "../utils/quiz.js";

colorTheme();
mobileNav();
clubMembers(clubMembersList);
clubProjects(clubProjectsJson);
await dailyJoke();
quiz(questions);
