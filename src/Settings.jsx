import "./CSS/Settings.css"
import ChangeColor from "./Color";


let CurrentWallpaper = ""

export default function Settings() {

    function Change_LiveWallpapers(name) {
        // Disabling Picture
        document.getElementById("StillWallpaper").style.display = "none";

        // Enabling Live Wallpapers
        document.getElementById("BackgroundImage").style.display = ""

        if (CurrentWallpaper != name) {
            document.getElementById("BackgroundImage").src = `./BackgroundWallpaper/Live/${name}.mp4`
            CurrentWallpaper = name
        } else {

        }

        // Setting it into Local Storage
        localStorage.setItem("LiveWallpaper", name);
        localStorage.setItem("WallpaperCurrently", "Live");
    }


    function Change_StillWallpaper(name) {
        // Disabling Picture
        document.getElementById("BackgroundImage").style.display = "none";

        // Enabling Live Wallpapers
        document.getElementById("StillWallpaper").style.display = "flex"

        if (CurrentWallpaper != name) {
            document.getElementById("StillWallpaper").src = `./BackgroundWallpaper/Still/${name}.png`
            CurrentWallpaper = name
        } else {

        }
        
        // Setting it into Local Storage
        localStorage.setItem("StillWallpaper", name);
        localStorage.setItem("WallpaperCurrently", "Still");
    }

    return (
        <>
            <div id="SettingBlock">
                <h1 id="SettingsTitle">Settings</h1>
                <div id="Wallpapers">
                    <h2 id="LiveWallpapers">Live Wallpapers:</h2>
                    <div id="LiveWallpaperBlock">
                        <img src="./BackgroundWallpaper/Images/LiveWallpaper1.png" id="ImageBlock1" onClick={() => {Change_LiveWallpapers("FiringRange1")}}></img>
                        <img src="./BackgroundWallpaper/Images/LiveWallpaper2.png" id="ImageBlock1" onClick={() => {Change_LiveWallpapers("Video1")}}></img>
                        <img src="./BackgroundWallpaper/Images/LiveWallpaper3.png" id="ImageBlock1" onClick={() => {Change_LiveWallpapers("Video2")}}></img>
                        <img src="./BackgroundWallpaper/Images/LiveWallpaper4.png" id="ImageBlock1" onClick={() => {Change_LiveWallpapers("Video3")}}></img>
                        <img src="./BackgroundWallpaper/Images/LiveWallpaper5.png" id="ImageBlock1" onClick={() => {Change_LiveWallpapers("Video4")}}></img>
                        <img src="./BackgroundWallpaper/Images/LiveWallpaper6.png" id="ImageBlock1" onClick={() => {Change_LiveWallpapers("Video5")}}></img>
                        <img src="./BackgroundWallpaper/Images/LiveWallpaper7.png" id="ImageBlock1" onClick={() => {Change_LiveWallpapers("Video6")}}></img>
                        <img src="./BackgroundWallpaper/Images/LiveWallpaper8.png" id="ImageBlock1" onClick={() => {Change_LiveWallpapers("Video7")}}></img>
                        <img src="./BackgroundWallpaper/Images/LiveWallpaper9.png" id="ImageBlock1" onClick={() => {Change_LiveWallpapers("Video8")}}></img>
                        <img src="./BackgroundWallpaper/Images/LiveWallpaper10.png" id="ImageBlock1" onClick={() => {Change_LiveWallpapers("Video9")}}></img>
                    </div>


                    <h2 id="StillWallpaprTitle">Still Wallpapers: </h2>
                    <div id="StillWallpapersBlock">
                        <img src="./BackgroundWallpaper/Still/Wallpaper1.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper1")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper2.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper2")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper3.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper3")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper4.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper4")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper5.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper5")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper6.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper6")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper7.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper7")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper8.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper8")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper9.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper9")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper10.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper10")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper11.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper11")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper12.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper12")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper13.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper13")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper14.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper14")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper15.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper15")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper16.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper16")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper17.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper17")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper18.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper18")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper19.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper19")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper20.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper20")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper21.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper21")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper22.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper22")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper23.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper23")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper24.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper24")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper25.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper25")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper26.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper26")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper27.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper27")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper28.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper28")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper29.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper29")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper30.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper30")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper31.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper31")}}></img>
                        <img src="./BackgroundWallpaper/Still/Wallpaper32.png" id="ImageBlock1" onClick={() => {Change_StillWallpaper("Wallpaper32")}}></img>
                    </div>

                    
                </div>

                <div id="Colors">
                    <h2 id="ColorTheme">Color Theme:</h2>
                    <div id="ColorButtons">
                        <button className="select-all-btn" onClick={() => {ChangeColor("rgb(255, 0, 0)")}}>Red</button>
                        <button className="select-all-btn" onClick={() => {ChangeColor("rgb(0, 255, 0)")}} >Green</button>
                        <button className="select-all-btn" onClick={() => {ChangeColor("rgb(0, 0, 255)")}}>Blue</button>
                        <button className="select-all-btn" onClick={() => {ChangeColor("Purple")}}>Purple</button>
                        <button className="select-all-btn" onClick={() => {ChangeColor("Orange")}}>Orange</button>
                        <button className="select-all-btn" onClick={() => {ChangeColor("Brown")}}>Brown</button>
                        <button className="select-all-btn" onClick={() => {ChangeColor("Pink")}}>Pink</button>
                        <button className="select-all-btn" onClick={() => {ChangeColor("Yellow")}}>Yellow</button>
                    </div>

                </div>
            </div>
        </>
    )
}