const theme = sessionStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
document.body.classList.toggle("dark-mode", theme === "dark");
["on", "off"].forEach(mode => {
    document.getElementById(`dark-mode-${mode}`).addEventListener("click", () => {
        document.body.classList.toggle("dark-mode", mode === "on");
        sessionStorage.setItem("theme", mode === "on" ? "dark" : "light");
    });
});