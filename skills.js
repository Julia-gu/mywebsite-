const skillSlider = document.getElementById("skillSlider");
const skills = document.querySelectorAll(".skill");

skillSlider.addEventListener("input", () => {
    const value = parseInt(skillSlider.value);
    skills.forEach(skill => {
        const skillId = parseInt(skill.id.slice(-1));
        if (skillId <= value) {
            skill.classList.add("active");
        } else {
            skill.classList.remove("active");
        }
    });
});
