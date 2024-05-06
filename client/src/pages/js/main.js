
document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);


function dropDownFunc(dropDown) {
    console.log(dropDown.classList.contains('click-dropdown'));

    if(dropDown.classList.contains('click-dropdown') === true){
        dropDown.addEventListener('click', function (e) {
            e.preventDefault();        
    
            if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
                this.parentElement.classList.remove('dropdown-open');
                this.nextElementSibling.classList.remove('dropdown-active');
    
            } else {

                closeDropdown();
    
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        });
    }
};


window.addEventListener('click', function (e) {

    if (e.target.closest('.dropdown-container') === null) {
        closeDropdown();
    }

});

function closeDropdown() { 
    console.log('run');
    
    document.querySelectorAll('.dropdown-container').forEach(function (container) { 
        container.classList.remove('dropdown-open')
    });

    document.querySelectorAll('.dropdown-menu').forEach(function (menu) { 
        menu.classList.remove('dropdown-active');
    });
}

document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) { 
    dropDownList.onmouseleave = closeDropdown;
});

/* ============================== navbar ============================== */
/* ============================== support ============================== */

const enabledBox = document.support__main_form_flag.enabled;
const printBlock = document.getElementById("printBlock");

enabledBox.addEventListener("click", (e)=> printBlock.textContent = e.target.checked);

/* ============================== support ============================== */
/* ============================== GLOBAL ============================== */