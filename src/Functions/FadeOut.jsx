export default function FadeOut(element) {
    // Fading In
    document.getElementById(element).animate(
        [
            {opacity: "1"},
            {opacity: "0"}
        ],
        {
            duration: 300,
            fill: "forwards"
        }
    );

    setTimeout(() => {
        document.getElementById(element).style.display = "none";
    }, 300)
}