import dropdown from "../components/dropdown/dropdown.js";
import password from "../components/password/password.js";
import themes from "../components/theme/theme.js";
import modal from "../components/modal/modal.js";

const modals = modal();


const theme = themes();
document.addEventListener("DOMContentLoaded", theme);
const drop = dropdown();
const pass = password();
console.log(1)