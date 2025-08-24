/*
    This file is to remove all of the elements.
    This will make it easier for me to remove the previous box, and add a new one

    document.getElementById("").style.display = "none"
*/

import FadeOut from "./FadeOut";

export default function RemoveElements() {

    // Home Page
    FadeOut("HomeBlock")

    // Edit Names
    FadeOut("EditNamesLegendsBlock")
    FadeOut("OnePlayerSelected")
    FadeOut("TwoPlayersSelected")
    FadeOut("ThreePlayersSelected")

    // Edit Legends/Weapons
    FadeOut("LegendsWeapo")

    FadeOut("SettingBlock")

    FadeOut("GeneratorBlock")

    FadeOut("BugReport")
}