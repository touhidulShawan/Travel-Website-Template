const mobilMenu = document.getElementById("mobile_navbar");
const hamburgerBtn = document.getElementById("mobile_menu_icon");
const mainWrapper = document.getElementById("main_wrapper");

const showMobileNav = () => {
  mobilMenu.style.display = "flex";
  mobilMenu.style.width = "280px";
  mainWrapper.style.marginLeft = "280px";
  hamburgerBtn.style.display = "none";
};

const hideMobileNav = () => {
  mobilMenu.style.display = "none";
  mobilMenu.style.width = "0px";
  mainWrapper.style.marginLeft = "0px";
  hamburgerBtn.style.display = "block";
};
