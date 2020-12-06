function toggleWarmCool() {
    var homeContent = document.getElementById("home-content");
    var currentClass = homeContent.className;
    homeContent.className = currentClass == "warm-mode" ? "cool-mode" : "warm-mode";

    var header = document.getElementById("header");
    var currentClass = header.className;
    header.className = currentClass == "warm-mode" ? "cool-mode" : "warm-mode";

    var selfie = document.getElementById("selfie");
    var currentClass = selfie.className;
    selfie.className = currentClass == "warm-mode-border" ? "cool-mode-border" : "warm-mode-border";

    var toggleCircle = document.getElementById("toggle-circle");
    var currentClass = toggleCircle.className;
    toggleCircle.className = currentClass == "warm-mode" ? "cool-mode" : "warm-mode";

    var circles = document.getElementsByClassName("filled-circle");
    for (let i = 0; i < circles.length; i++) {
        var currentClass = circles[i].className;
        circles[i].className = currentClass == "filled-circle warm-mode" ? "filled-circle cool-mode" : "filled-circle warm-mode";
    }

    var exps = document.getElementsByClassName("exp-item");
    for (let i = 0; i < exps.length; i++) {
        var currentClass = exps[i].className;
        exps[i].className = currentClass == "exp-item warm-mode" ? "exp-item cool-mode" : "exp-item warm-mode";
    }

    var toggleContainer = document.getElementById("toggle");
    var currentClass = toggleContainer.className;
    toggleContainer.className = currentClass == "left" ? "right" : "left";

}