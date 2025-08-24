import ".//CSS/Navigation.css"
import RemoveElements from "./Functions/RemoveAllElements";
import FadeIn from "./Functions/FadeIn";
import FadeOut from "./Functions/FadeOut";
import { HowManyPlayer } from "./EditNames";

export const BackButton = 0;

export default function Nav() {

    // Variables for each section (this is used to disable the fadeout if the section is already chosen)
    let EditUserNames = 0;
    let EditLegends_Weapons = 0;
    let Generator = 0;
    let Settings = 0;
    let BugReportVar = 0;

    function disableSections() {
        // This function is used to disable al of the variables (Need this to disable each section first, then enable the one the user is on)
        EditUserNames = 0;
        EditLegends_Weapons = 0;
        Generator = 0;
        Settings = 0;
        BugReportVar = 0
    }

    function Dimming_Brightening(brightness) {
        document.getElementById("BackgroundImage").style.filter = `Brightness(${brightness}%)`
        document.getElementById("StillWallpaper").style.filter = `Brightness(${brightness}%)`
    }

    function Test() {
        alert("Test Function Ran")
    }

    function EditNames() {
        if (EditUserNames == 0) {

        RemoveElements()

        // Disabling all of the shit instead of EditNames
        disableSections()


        // Showing Edit Names
        setTimeout(FadeIn, 300, "EditNamesLegendsBlock")
        EditUserNames = 1;

        Dimming_Brightening(25)
        }
    }

    function EditLegends() {
        if (EditLegends_Weapons == 0) {

        RemoveElements()

        // Disabling all of the shit instead of EditNames
        disableSections()

        Dimming_Brightening(25)

         // Adding this inside of here because I think it's a good palce
        if (HowManyPlayer == 1) {
            // Showing One
            document.getElementById("OnePlayerSelect").style.display = ""

            // Removing Two and Three

            document.getElementById("TwoPlayerSelect").style.display = "none"
            document.getElementById("ThreePlayerSelect").style.display = "none"
        } else if (HowManyPlayer == 2) {
            // Showing Second one and First one
            document.getElementById("TwoPlayerSelect").style.display = ""
            document.getElementById("OnePlayerSelect").style.display = ""

            // Removing Third One
            document.getElementById("ThreePlayerSelect").style.display = "none"
        } else if (HowManyPlayer == 3) {
            // Showing All
            document.getElementById("TwoPlayerSelect").style.display = ""
            document.getElementById("ThreePlayerSelect").style.display = ""
             document.getElementById("OnePlayerSelect").style.display = ""
        } else if (HowManyPlayer == 0) {
            // Removing Everything
            document.getElementById("TwoPlayerSelect").style.display = "none"
            document.getElementById("ThreePlayerSelect").style.display = "none"
            document.getElementById("OnePlayerSelect").style.display = "none"
        }


        // Showing Edit Names
        setTimeout(FadeIn, 300, "LegendsWeapo")
        EditLegends_Weapons = 1;
        }
    }

    function Admire_Wallpaper() {
        RemoveElements();
        disableSections();

        // Changing Brightness to 100%
        Dimming_Brightening(100)
    }

    function SettingsNavigation() {
        if (Settings == 0) {
            RemoveElements()

            // Disabling all of the shit instead of EditNames
            disableSections()

            // Showing Element
            setTimeout(FadeIn, 300, "SettingBlock")
            Settings = 1;

            Dimming_Brightening(25)
        }
    }

    function GeneratorFunction() {
        if (Generator == 0) {
            RemoveElements()

            // Disabling all of the shit instead of EditNames
            disableSections()

            // Adding this inside of here because I think it's a good palce
            if (HowManyPlayer == 1) {
            // Showing One
            document.getElementById("OnePlayerSelect1").style.display = ""

            // Removing Two and Three

            document.getElementById("TwoPlayerSelect1").style.display = "none"
            document.getElementById("ThreePlayerSelect1").style.display = "none"
            } else if (HowManyPlayer == 2) {
            // Showing Second one and First one
            document.getElementById("TwoPlayerSelect1").style.display = ""
            document.getElementById("OnePlayerSelect1").style.display = ""

            // Removing Third One
            document.getElementById("ThreePlayerSelect1").style.display = "none"
            } else if (HowManyPlayer == 3) {
            // Showing All
            document.getElementById("TwoPlayerSelect1").style.display = ""
            document.getElementById("ThreePlayerSelect1").style.display = ""
             document.getElementById("OnePlayerSelect1").style.display = ""
            } else if (HowManyPlayer == 0) {
            // Removing Everything
            document.getElementById("TwoPlayerSelect1").style.display = "none"
            document.getElementById("ThreePlayerSelect1").style.display = "none"
            document.getElementById("OnePlayerSelect1").style.display = "none"
            }

            // Showing Element
            setTimeout(FadeIn, 300, "GeneratorBlock")
            Generator = 1;

            Dimming_Brightening(25)


        }
    }

    function BugReport() {
        if (BugReportVar == 0) {
            RemoveElements()

            // Disabling all of the shit instead of EditNames
            disableSections()

            // Showing Element
            setTimeout(FadeIn, 300, "BugReport")
            Settings = 1;

            Dimming_Brightening(25)

            BugReportVar = 1;
        }
    }

    return (
        <>
            {/* Navigation Block */}
            <div id="NavBlock">
                <button className="ButtonsIndividual" onClick={EditNames}>Players</button>
                <button className="ButtonsIndividual" onClick={EditLegends}>Edit Legends/Weapons</button>
                <button className="ButtonsIndividual" onClick={GeneratorFunction}>Generator</button>
                <button className="ButtonsIndividual" onClick={SettingsNavigation}>Settings</button>
                <button className="ButtonsIndividual" onClick={Admire_Wallpaper}>Admire Wallpaper</button>
                <button className="ButtonsIndividual" onClick={BugReport}>Bug Report</button>
            </div>
        </>
    )
}