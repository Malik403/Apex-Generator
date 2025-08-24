export default function FadeIn(element) {
    // Enabling the Element and setting it to 0 opacity
    let elem = document.getElementById(element)

    elem.style.display = "flex";
    elem.style.opacity = "0";

    // Fading In
    document.getElementById(element).animate(
        [
            {opacity: "0"},
            {opacity: "1"}
        ],
        {
            duration: 300,
            fill: "forwards"
        }
    );
}