/*
    Make one function and just have the color as the parameter!


    This page is for the settings menu. This will have all of the elements and changing the color in one function

*/

export default function ChangeColor(Color) {
    root.style.setProperty('--BorderColor', Color); // Changes a global variable
    root.style.setProperty('--KeyFrameColor1', Color); // Changes a global variable
    root.style.setProperty('--KeyFrameColor2', Color); // Changes a global variable
    root.style.setProperty('--KeyFrameColor3', Color); // Changes a global variable
    root.style.setProperty('--SectionColor', Color); // Changes a global variable
    root.style.setProperty('--ButtonColor', Color); // Changes a global variable
    root.style.setProperty('--HoverColor', Color); // Changes a global variable
    root.style.setProperty('--TitleColor', Color); // Changes a global variable
    root.style.setProperty('--NavButtons', `rgbs(${Color}, .85)`); // Changes a global variable
    root.style.setProperty('--NavButtonsShadow', Color); // Changes a global variable

    


    // Setting it inside of local storage
    localStorage.setItem("PictureColor", Color)
    localStorage.setItem("BorderColor", Color);
    localStorage.setItem("KeyFrameColor1", Color);
    localStorage.setItem("KeyFrameColor2", Color);
    localStorage.setItem("KeyFrameColor3", Color);
    localStorage.setItem("SectionColor", Color);
    localStorage.setItem("ButtonColor", Color);
    localStorage.setItem("HoverColor", Color);
    localStorage.setItem("TitleColor", Color);
    localStorage.setItem("NavButtons", `rgbs(${Color}, .85)`);
    localStorage.setItem("NavButtonsShadow", Color);

    localStorage.setItem("DefaultLegendColor", 0);
}