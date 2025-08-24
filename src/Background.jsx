import "./CSS/BackG.css"

export default function Bg() {
    // This file will be the background. Containing all of the live wallpapers

    return (
        <>
            <img src="./BackgroundWallpaper/Still/BackgroundImage.png" id="StillWallpaper"></img>

            <video id="BackgroundImage" src="./BackgroundWallpaper/Live/Video2.mp4" muted loop autoPlay></video>
        </>
    )
}