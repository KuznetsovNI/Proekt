
/* ============================== navbar ============================== */
/* ============================== support ============================== */

const enabledBox = document.support__main_form_flag.enabled;
const printBlock = document.getElementById("printBlock");

enabledBox.addEventListener("click", (e)=> printBlock.textContent = e.target.checked);

/* ============================== support ============================== */
/* ============================== GLOBAL ============================== */