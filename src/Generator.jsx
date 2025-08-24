import "./CSS/Generator.css"
import { PlayerChoose1 } from "./LegendsWeapons"
import { PlayerChoose2 } from "./LegendsWeapons"
import { PlayerChoose3 } from "./LegendsWeapons"

import { WeaponChoose1 } from "./LegendsWeapons"
import { WeaponChoose2 } from "./LegendsWeapons"
import { WeaponChoose3 } from "./LegendsWeapons"
import { useContext } from "react"
import { PlayerContext } from "./PlayerContext"


let RandomPlayer1 = ""
let RandomPlayer2 = ""
let RandomPlayer3 = ""

let RandomWeapons = []

export default function Generator() {


    const { player1, player2, player3 } = useContext(PlayerContext);


    function Show_Name() {
        const CurrentPlayer = document.getElementById("PlayerSelection23").value
        if (CurrentPlayer == "player1") {
            document.getElementById("NameElement").textContent = RandomPlayer1;
        }else if (CurrentPlayer == "player2") {

            document.getElementById("NameElement").textContent = RandomPlayer2;
        } else if (CurrentPlayer == "player3") {

            document.getElementById("NameElement").textContent = RandomPlayer3;
        }
    }

    function Show_Continue() {
        document.getElementById("ContinueElement").style.display = "flex"

        // Changing onClick function
        document.getElementById("IndividualVideoPlay").onclick = function() {
            document.getElementById("GeneratingVideo").style.display = "none";

            // Resetting Video Functions
            document.getElementById("IndividualVideoPlay").onclick = "";
            document.getElementById("ContinueElement").style.display = "none";

            // Resetting Text
            document.getElementById("NameElement").textContent = "";

            // Resetting GunOne + Two
            document.getElementById("FirstGun").style.display = "none";
            document.getElementById("SecondGun").style.display = "none" // Enabling the DIV

            // Resetting One Gun + Text Element
            Reset_OneGun()
            document.getElementById("OneGunElement").textContent = ""

            // Resetting Two Gun + Text Element
            Reset_TwoGun()
            document.getElementById("SecondGunElement").textContent = ""       
        };
    }

    function Reset_OneGun() {
        document.getElementById("FirstGun").style.top = "30%" // Enabling the DIV
        document.getElementById("FirstGun").style.width = "20%" // Enabling the DIV
        document.getElementById("FirstGun").style.left = "12.5%" // Enabling the DIV
    }

    function Reset_TwoGun() {
        document.getElementById("SecondGun").style.top = "30%" // Enabling the DIV
        document.getElementById("SecondGun").style.width = "20%" // Enabling the DIV
        document.getElementById("SecondGun").style.right = "15%" // Enabling the DIV
    }

    function getRandomItem(arr) {
        // Generate a random floating-point number between 0 (inclusive) and 1 (exclusive)
        // Multiply it by the array's length to scale it to the array's index range
        const randomIndex = Math.floor(Math.random() * arr.length);

        // Use the random index to access and return a random item from the array
        return arr[randomIndex];
    }

    function PlaySound() {
        const CurrentPlayer = document.getElementById("PlayerSelection23").value

        if (CurrentPlayer == "player1") {
            var audio = new Audio(`./PackOpening/Sounds/${RandomPlayer1}.mp3`);
            audio.play();
        } else if (CurrentPlayer == "player2") {
            var audio = new Audio(`./PackOpening/Sounds/${RandomPlayer2}.mp3`);
            audio.play();
        }else if (CurrentPlayer == "player3") {
            var audio = new Audio(`./PackOpening/Sounds/${RandomPlayer3}.mp3`);
            audio.play();
        }
    }

    function Generate_SecondGun() {
        document.getElementById("SecondGun").style.display = "flex" // Enabling the DIV
        document.getElementById("SecondGun").src = `./PackOpening/Weapons/${RandomWeapons[1]}.png`

        // If statements for changing size of each weapon

        if (RandomWeapons[1] == "Alternator") {
            document.getElementById("SecondGun").style.width = "15%" // Enabling the DIV
            document.getElementById("SecondGun").style.right = "15%" // Enabling the DIV
        }

        if (RandomWeapons[1] == "Bow") {
            document.getElementById("SecondGun").style.top = "15%" // Enabling the DIV
        }

        if (RandomWeapons[1] == "P2020") {
            document.getElementById("SecondGun").style.width = "15%" // Enabling the DIV
            document.getElementById("SecondGun").style.right = "15%" // Enabling the DIV
        }

        if (RandomWeapons[1] == "RE45") {
            document.getElementById("SecondGun").style.width = "15%" // Enabling the DIV
            document.getElementById("SecondGun").style.right = "15%" // Enabling the DIV
            document.getElementById("SecondGun").style.top = "25%" // Enabling the DIV
        }

        document.getElementById("SecondGun").animate(
        [
            { transform: "rotateY(0deg)" },
            { transform: "rotateY(360deg)" }
        ],
        {
            duration: 20000,
            iterations: Infinity,
            easing: "linear"
        }
        );

        // Moving Text Around If Needed
        document.getElementById("SecondGunElement").textContent = RandomWeapons[1]       
    }

    function Generate_OneGun() {
        document.getElementById("FirstGun").style.display = "flex" // Enabling the DIV
        document.getElementById("FirstGun").src = `./PackOpening/Weapons/${RandomWeapons[0]}.png`

        // If statements for changing size of each weapon

        if (RandomWeapons[0] == "Alternator") {
            document.getElementById("FirstGun").style.width = "15%" // Enabling the DIV
            document.getElementById("FirstGun").style.left = "15%" // Enabling the DIV
        }

        if (RandomWeapons[0] == "Bow") {
            document.getElementById("FirstGun").style.top = "15%" // Enabling the DIV
        }

        if (RandomWeapons[0] == "P2020") {
            document.getElementById("FirstGun").style.width = "15%" // Enabling the DIV
            document.getElementById("FirstGun").style.left = "15%" // Enabling the DIV
        }

        if (RandomWeapons[0] == "RE45") {
            document.getElementById("FirstGun").style.width = "15%" // Enabling the DIV
            document.getElementById("FirstGun").style.left = "15%" // Enabling the DIV
            document.getElementById("FirstGun").style.top = "25%" // Enabling the DIV
        }

        document.getElementById("FirstGun").animate(
        [
            { transform: "rotateY(0deg)" },
            { transform: "rotateY(360deg)" }
        ],
        {
            duration: 20000,
            iterations: Infinity,
            easing: "linear"
        }
        );

        // Moving Text Around If Needed
        document.getElementById("OneGunElement").textContent = RandomWeapons[0]

    }

    function Generate_Video() {
        const CurrentPlayer = document.getElementById("PlayerSelection23").value

        if (CurrentPlayer == "player1") {
            document.getElementById("GeneratingVideo").style.display = "flex" // Enabling the DIV
            document.getElementById("IndividualVideoPlay").src = `./PackOpening/Legends/${RandomPlayer1}.mp4`

            // Generating Weapons
            setTimeout(Generate_OneGun, 6700)

            setTimeout(Generate_SecondGun, 7700)

            setTimeout(Show_Name, 7000)

            setTimeout(PlaySound, 8500)


            // Showing Continue Button
            setTimeout(Show_Continue, 7000)

        } else if (CurrentPlayer == "player2") {
            document.getElementById("GeneratingVideo").style.display = "flex" // Enabling the DIV
            document.getElementById("IndividualVideoPlay").src = `./PackOpening/Legends/${RandomPlayer2}.mp4`

            // Generating Weapons
            setTimeout(Generate_OneGun, 6700)

            setTimeout(Generate_SecondGun, 7700)

            setTimeout(Show_Name, 7000)

            setTimeout(PlaySound, 8500)


            // Showing Continue Button
            setTimeout(Show_Continue, 7000)
        } else if (CurrentPlayer == "player3") {
            document.getElementById("GeneratingVideo").style.display = "flex" // Enabling the DIV
            document.getElementById("IndividualVideoPlay").src = `./PackOpening/Legends/${RandomPlayer3}.mp4` 

            // Generating Weapons
            setTimeout(Generate_OneGun, 6700)

            setTimeout(Generate_SecondGun, 7700)

            setTimeout(Show_Name, 7000)

            setTimeout(PlaySound, 8500)


            // Showing Continue Button
            setTimeout(Show_Continue, 7000)
        }
    }

    function Random_Player() {
        const CurrentPlayer = document.getElementById("PlayerSelection23").value
        let safe_exit = 0; // This is a safe exit. It will go up to 50. If it hits 50 with no character, it will have an error

        if (CurrentPlayer == "player1") {
            let CharValue = getRandomItem(PlayerChoose1)

            while (true) {
            if (PlayerChoose1.length == 0) {
                alert("No Legends Selected")
                break
            }
            if (CharValue != RandomPlayer2 && CharValue != RandomPlayer3) {
                RandomPlayer1 = CharValue // Setting the character for RandomPlayer1

                if (WeaponChoose1.length == 0) {
                    alert("Please Choose Weapons")
                    break
                }

                Random_Weapon()
                Generate_Video()
                break
            } else {
                    CharValue = getRandomItem(PlayerChoose1)

                    safe_exit += 1;

                    if (safe_exit == 50) {
                        alert("Safe Exit Ran")
                        break
                    }
                }
            }
        } else if (CurrentPlayer == "player2") {
            let CharValue = getRandomItem(PlayerChoose2)

            while (true) {
            if (PlayerChoose2.length == 0) {
                alert("No Legends Selected")
                break
            }
            if (CharValue != RandomPlayer1 && CharValue != RandomPlayer3) {
                RandomPlayer2 = CharValue // Setting the character for RandomPlayer1

                if (WeaponChoose2.length == 0) {
                    alert("Please Choose Weapons")
                    break
                }
                Random_Weapon()
                Generate_Video()
                break
            } else {
                    CharValue = getRandomItem(PlayerChoose2)

                    safe_exit += 1;

                    if (safe_exit == 50) {
                        alert("Safe Exit Ran")
                        break
                    }
                }
            }         
        } else if (CurrentPlayer == "player3") {
            let CharValue = getRandomItem(PlayerChoose3)

            while (true) {
            if (PlayerChoose3.length == 0) {
                alert("No Legends Selected")
                break
            }
            if (CharValue != RandomPlayer2 && CharValue != RandomPlayer1) {
                RandomPlayer3 = CharValue // Setting the character for RandomPlayer1

                if (WeaponChoose3.length == 0) {
                    alert("Please Choose Weapons")
                    break
                }
                
                Random_Weapon()
                Generate_Video()
                break
            } else {
                    CharValue = getRandomItem(PlayerChoose3)

                    safe_exit += 1;

                    if (safe_exit == 50) {
                        alert("Safe Exit Ran")
                        break
                    }
                }
            }
        } else if (CurrentPlayer == "none") {
            alert("No Player Selected")
        }
    }

    function Random_Weapon() {
        const CurrentPlayer = document.getElementById("PlayerSelection23").value

        RandomWeapons = [] // Resetting Weapons


        if (CurrentPlayer == "none") {
            alert("No Players Selected for Weapons")
        } else if (CurrentPlayer == "player1") {
            const random1 = getRandomItem(WeaponChoose1)
            const random2 = getRandomItem(WeaponChoose1)

            RandomWeapons.push(random1, random2)
        } else if (CurrentPlayer == "player2") {
            const random1 = getRandomItem(WeaponChoose2)
            const random2 = getRandomItem(WeaponChoose2)

            RandomWeapons.push(random1, random2)
        } else if (CurrentPlayer == "player3") {
            const random1 = getRandomItem(WeaponChoose3)
            const random2 = getRandomItem(WeaponChoose3)

            RandomWeapons.push(random1, random2)
        }
    }

    

    return (
        <>
            <div id="GeneratorBlock">
                <h2 style={{position: "absolute", top: "0%", color: "white"}}>Generator</h2>
                <div id="ChoosingPlayer2" className="dropdown-wrapper">
                    <select id="PlayerSelection23" className="apex-select">
                        <option value="none">Player:</option>
                        <option value="player1" id="OnePlayerSelect1">{player1}</option>
                        <option value="player2" id="TwoPlayerSelect1">{player2}</option>
                        <option value="player3" id="ThreePlayerSelect1">{player3}</option>
                    </select>
                </div>
                <button onClick={Random_Player} id="GenerateButton" className="select-all-btn">Generate</button>
            </div>

            <div id="GeneratingVideo">
                <video autoPlay id="IndividualVideoPlay"></video>

                <h3 id="NameElement"></h3>

                <h4 id="ContinueElement" style={{display: "none"}}>Click to Continue</h4>

                <img id="FirstGun"></img>
                <h3 id="OneGunElement"></h3>

                <img id="SecondGun"></img>
                <h3 id="SecondGunElement"></h3>
            </div>
        </>
    )
}