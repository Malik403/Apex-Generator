import ".//CSS/Home.css"
import { useEffect } from "react";

export default function Home() {  
    
    useEffect(() => {
    const savedColor1 = localStorage.getItem("BorderColor");
    const savedColor2 = localStorage.getItem("KeyFrameColor1");
    const savedColor3 = localStorage.getItem("KeyFrameColor2");
    const savedColor4 = localStorage.getItem("KeyFrameColor3");
    const savedColor5 = localStorage.getItem("SectionColor");
    const savedColor6 = localStorage.getItem("ButtonColor");
    const savedColor7 = localStorage.getItem("HoverColor");
    const savedColor8 = localStorage.getItem("TitleColor");
    const savedColor9 = localStorage.getItem("NavButtons");
    const savedColor10 = localStorage.getItem("NavButtonsShadow");
    root.style.setProperty('--BorderColor', savedColor1); // Changes a global variable
    root.style.setProperty('--KeyFrameColor1', savedColor2); // Changes a global variable
    root.style.setProperty('--KeyFrameColor2', savedColor3); // Changes a global variable
    root.style.setProperty('--KeyFrameColor3', savedColor4); // Changes a global variable
    root.style.setProperty('--SectionColor', savedColor5); // Changes a global variable
    root.style.setProperty('--ButtonColor', savedColor6); // Changes a global variable
    root.style.setProperty('--HoverColor', savedColor7); // Changes a global variable
    root.style.setProperty('--TitleColor', savedColor8); // Changes a global variable
    root.style.setProperty('--NavButtons', `rgbs(${savedColor9}, .85)`); // Changes a global variable
    root.style.setProperty('--NavButtonsShadow', savedColor10); // Changes a global variable
    
    const getLiveWallpaper = localStorage.getItem("LiveWallpaper")
    const getStillWallpaper = localStorage.getItem("StillWallpaper")

    // Getting Values
    const CurrentWallpaper = localStorage.getItem("WallpaperCurrently")

    console.log(CurrentWallpaper)

    if (CurrentWallpaper == "Live") {
        document.getElementById("BackgroundImage").style.display = "flex"
        document.getElementById("BackgroundImage").src = `./BackgroundWallpaper/Live/${getLiveWallpaper}.mp4`
        document.getElementById("StillWallpaper").style.display = "none"
    } else if (CurrentWallpaper == "Still") {
        document.getElementById("BackgroundImage").style.display = "none"
        document.getElementById("StillWallpaper").style.display = "flex"
        document.getElementById("StillWallpaper").src = `./BackgroundWallpaper/Still/${getStillWallpaper}.png`
    }
    
    
    
    }, []);

    function fadeIn() {
        document.getElementById("HomeBlock").animate(
            [
                {opacity: "0"},
                {opacity: "1"}
            ],
            {
                duration: 500,
                fill: "forwards"
            }
        );
    }



    // This will be the default location for Windows.OnLoad... Seems reasonable, Home Page! xD
    window.onload = function() {
        fadeIn(); // This function is to FadeIn the home page
    }

    return (
        <>
            <div id="HomeBlock">

                {/* Title */}
                <h1 id="Title">News</h1>

                <h2 id="Date2">August 23rd 2025: </h2>
                <p id="Para2">RELEASE DATE!!!!</p>

                {/* First Section */}
                <h2 id="Date1">August 7th 2025:</h2>
                    <p id="Para1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut nobis eaque animi illo praesentium minus alias sequi maiores molestias commodi quidem iure pariatur, a excepturi possimus repellendus cum ea doloribus!</p>
            </div>

            
            <div id="desktop-only-message">
                THIS WEBSITE IS ONLY FOR RESOLUTIONS HIGHER THAN 1280x800. SUPPORT FOR SMALLER RESOLUTIONS MAY COME!
            </div>
        </>
    )
}

