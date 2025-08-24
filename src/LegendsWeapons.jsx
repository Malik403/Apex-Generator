import { useState } from "react"
import ".//CSS/LegendsWeapons.css"
import { useContext } from "react"
import { PlayerContext } from "./PlayerContext"


// Lists for Player
export let PlayerChoose1 = []
export let PlayerChoose2 = []
export let PlayerChoose3 = []

export let WeaponChoose1 = []
export let WeaponChoose2 = []
export let WeaponChoose3 = []


export default function LegWea() {

    // Grabbing the Username information
    const { player1, player2, player3 } = useContext(PlayerContext);

    // Use State for changing the name onHover
    const [legendName, changeLName] = useState("")
    const [WeaponName, changeWName] = useState("")

    function changeLegendsName(text) {
        changeLName(text);
    }

    function changeWeaponName(text) {
        changeWName(text);
    }

    function ColorElement(Element, weapontoggle) {
        let Test = document.getElementById(Element).style.backgroundColor;


        // Making sure Player is selected
        const CurrentPlayer = document.getElementById("PlayerSelection2").value

        const getPictureColor = localStorage.getItem("PictureColor")

        if (CurrentPlayer == "none") {
            alert("Please select a player")
        } else{

            if (Test == "") {
                console.log(localStorage.getItem("PictureColor"))

                if (localStorage.getItem("PictureColor") == null) {
                    document.getElementById(Element).style.backgroundColor = "green"
                }
                else if (localStorage.getItem("PictureColor") != null) {  
                    document.getElementById(Element).style.backgroundColor = getPictureColor
                }

                // Confirming Selection function
                if (weapontoggle == 0) {
                    // Legend
                    Confirming_Selection(Element, 0)
                } else if (weapontoggle == 1) {
                    Confirming_Selection(Element, 1)
                }
            } else if (Test != "") {
                Test = document.getElementById(Element).style.backgroundColor = "";

                // Confirming Selection function
                if (weapontoggle == 0) {
                    // Legend
                    Deleting_Selection(Element, 0)
                } else if (weapontoggle == 1) {
                    Deleting_Selection(Element, 1)
                }
            }
        }
    }

    function Confirming_Selection(Element, weapontoggle) {
        // This function will add it to their respective lists
        const CurrentPlayer = document.getElementById("PlayerSelection2").value
        
        if (CurrentPlayer == "player1")
        {   
            if (weapontoggle == 0) {
                // Adding Legend into Player 1
                PlayerChoose1.push(Element)

            }else if (weapontoggle == 1) {
                WeaponChoose1.push(Element)
            }
        } else if (CurrentPlayer == "player2") {
            // Adding Values into Player 2
            if (weapontoggle == 0) {
                // Adding Legend into Player 1
                PlayerChoose2.push(Element)

            }else if (weapontoggle == 1) {
                WeaponChoose2.push(Element)
            }
        } else if (CurrentPlayer == "player3") {
            // Adding Values into Player 3
            if (weapontoggle == 0) {
                // Adding Legend into Player 1
                PlayerChoose3.push(Element)

            }else if (weapontoggle == 1) {
                // Moving Weapon Up
                WeaponChoose3.push(Element)

                alert(WeaponChoose3)
            }
        }
    }

    function Deleting_Selection(Element, weapontoggle) {
        // This function will delete the selection in their respective lists
        const CurrentPlayer = document.getElementById("PlayerSelection2").value

        // Find index in list, and splice it from that information

        if (CurrentPlayer == "player1")
        {
            if (weapontoggle == 0) {
                // Finding Index
                PlayerChoose1.indexOf(Element)

                //Deleting Element
                PlayerChoose1.splice(PlayerChoose1.indexOf(Element), 1)

                console.log(PlayerChoose1)
            } else if (weapontoggle == 1) {
                 // Finding Index
                WeaponChoose1.indexOf(Element)

                //Deleting Element
                WeaponChoose1.splice(WeaponChoose1.indexOf(Element), 1)
            }
        } else if (CurrentPlayer == "player2") {
            if (weapontoggle == 0) {
                // Finding Index
                PlayerChoose2.indexOf(Element)

                //Deleting Element
                PlayerChoose2.splice(PlayerChoose2.indexOf(Element), 1)
            } else if (weapontoggle == 1) {
                 // Finding Index
                WeaponChoose2.indexOf(Element)

                //Deleting Element
                WeaponChoose2.splice(WeaponChoose2.indexOf(Element), 1)
            }
        } else if (CurrentPlayer == "player3") {
            if (weapontoggle == 0) {
                // Finding Index
                PlayerChoose3.indexOf(Element)

                //Deleting Element
                PlayerChoose3.splice(PlayerChoose3.indexOf(Element), 1)
            } else if (weapontoggle == 1) {
                 // Finding Index
                WeaponChoose3.indexOf(Element)

                //Deleting Element
                WeaponChoose3.splice(WeaponChoose3.indexOf(Element), 1)
            }
        }
    }
    function getAllIdsInDiv(divId) { // Thanks CHATGPT xD
         const container = document.getElementById(divId);
        if (!container) return [];

        const children = container.querySelectorAll("[id]"); // all elements with an id
        return Array.from(children).map(el => el.id);   
    }

    function SelectAllLegends() {
        const CurrentPlayer = document.getElementById("PlayerSelection2").value

        if (CurrentPlayer == "none") {
            alert("Please Choose a Player")
            return "None"
        }
        const All_Legends = getAllIdsInDiv("LegendPictures") // Has all the ID's in a List

        // Deselecting All and then adding all of them?
        DeselectAllLegends()

        const getPictureColor = localStorage.getItem("PictureColor")

        // Making it all colors
        for (let i=0;i<All_Legends.length;i++) {
            if (localStorage.getItem("PictureColor") == null) {
                document.getElementById(All_Legends[i]).style.backgroundColor = "green"
            }
            else if (localStorage.getItem("PictureColor") != null) {  
                document.getElementById(All_Legends[i]).style.backgroundColor = getPictureColor
            }
        }

        if (CurrentPlayer == "player1") {
            PlayerChoose1.push(...All_Legends)
        } else if (CurrentPlayer == "player2") {
             PlayerChoose2.push(...All_Legends)
        }else if (CurrentPlayer == "player3") {
            PlayerChoose3.push(...All_Legends)
        }
        
    }

    function DeselectAllLegends() {
        // Removing all of the colors on the pictures
        const All_Legends = getAllIdsInDiv("LegendPictures") // Has all the ID's in a List
        const CurrentPlayer = document.getElementById("PlayerSelection2").value

        if (CurrentPlayer == "none") {
            alert("Please Choose a Player")
            return "None"
        }

        for (let i=0;i<All_Legends.length;i++) {
            document.getElementById(All_Legends[i]).style.backgroundColor = "";
        }


        if (CurrentPlayer == "player1") {
            PlayerChoose1 = []
        } else if (CurrentPlayer == "player2") {
            PlayerChoose2 = []
        }else if (CurrentPlayer == "player3") {
            PlayerChoose3 = []
        }
    }

    function SelectAllWeapons() {
        const All_Legends = getAllIdsInDiv("WeaponPictures") // Has all the ID's in a List
        const CurrentPlayer = document.getElementById("PlayerSelection2").value

        if (CurrentPlayer == "none") {
            alert("Please Choose a Player")
            return "None"
        }

        // Deselecting All and then adding all of them?
        DeselectAllWeapons()

        const getPictureColor = localStorage.getItem("PictureColor")

        // Making it all colors
        for (let i=0;i<All_Legends.length;i++) {
            if (localStorage.getItem("PictureColor") == null) {
                document.getElementById(All_Legends[i]).style.backgroundColor = "green"
            }
            else if (localStorage.getItem("PictureColor") != null) {  
                document.getElementById(All_Legends[i]).style.backgroundColor = getPictureColor
            }
        }

        if (CurrentPlayer == "player1") {
            WeaponChoose1.push(...All_Legends)
        } else if (CurrentPlayer == "player2") {
            WeaponChoose2.push(...All_Legends)
        } else if (CurrentPlayer == "player3") {
            WeaponChoose3.push(...All_Legends)
        }
    }

    function DeselectAllWeapons() {
        const All_Legends = getAllIdsInDiv("WeaponPictures") // Has all the ID's in a List
        const CurrentPlayer = document.getElementById("PlayerSelection2").value

        if (CurrentPlayer == "none") {
            alert("Please Choose a Player")
            return "None"
        }

        for (let i=0;i<All_Legends.length;i++) {
            document.getElementById(All_Legends[i]).style.backgroundColor = "";
        }

        if (CurrentPlayer == "player1") {
            WeaponChoose1 = []
        } else if (CurrentPlayer == "player2") {
            WeaponChoose2 = []
        } else if (CurrentPlayer == "player3") {
            WeaponChoose3 = []
        }
    }

    function UncolorThings() {
        const All_Legends = getAllIdsInDiv("LegendPictures") // Has all the ID's in a List
        const All_Weapons = getAllIdsInDiv("WeaponPictures") // Has all the ID's in a List

        for (let i=0;i<All_Legends.length;i++) {
            document.getElementById(All_Legends[i]).style.backgroundColor = "";
        }

        for (let i=0;i<All_Weapons.length;i++) {
            document.getElementById(All_Weapons[i]).style.backgroundColor = "";
        }
    }


    return (
        <>
            <div id="LegendsWeapo">
                <div id="ChoosingPlayer" className="dropdown-wrapper">
                    <select id="PlayerSelection2" className="apex-select" onChange={() => {UncolorThings()}}>
                        <option value="none">Please Choose a Player:</option>
                        <option value="player1" id="OnePlayerSelect">{player1}</option>
                        <option value="player2" id="TwoPlayerSelect">{player2}</option>
                        <option value="player3" id="ThreePlayerSelect">{player3}</option>
                    </select>
                </div>

                <div id="LegendsSelection">
                    <h2 id="LegendsTitle">{legendName}</h2>

                    <div id="LegendPictures">
                        <img src="./Legends/Alter.png" id="Alter" className="PicturesLegends" onClick={() => {ColorElement("Alter", 0)}} onMouseEnter={() => {changeLegendsName("Alter")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Ash.png" id="Ash" className="PicturesLegends" onClick={() => {ColorElement("Ash", 0)}} onMouseEnter={() => {changeLegendsName("Ash")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Balistic.png" id="Balistic" className="PicturesLegends" onClick={() => {ColorElement("Balistic", 0)}}  onMouseEnter={() => {changeLegendsName("Balistic")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Bangalore.png" id="Bangalore" className="PicturesLegends" onClick={() => {ColorElement("Bangalore", 0)}}  onMouseEnter={() => {changeLegendsName("Bangalore")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Bloodhound.png" id="Bloodhound" className="PicturesLegends" onClick={() => {ColorElement("Bloodhound", 0)}}  onMouseEnter={() => {changeLegendsName("Bloodhound")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Catalyst.png" id="Catalyst" className="PicturesLegends" onClick={() => {ColorElement("Catalyst", 0)}} onMouseEnter={() => {changeLegendsName("Catalyst")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Caustic.png" id="Caustic" className="PicturesLegends"  onClick={() => {ColorElement("Caustic", 0)}} onMouseEnter={() => {changeLegendsName("Caustic")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Conduit.png" id="Conduit" className="PicturesLegends" onClick={() => {ColorElement("Conduit", 0)}}  onMouseEnter={() => {changeLegendsName("Conduit")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Crypto.png" id="Crypto" className="PicturesLegends" onClick={() => {ColorElement("Crypto", 0)}}  onMouseEnter={() => {changeLegendsName("Crypto")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Fuse.png" id="Fuse" className="PicturesLegends"  onClick={() => {ColorElement("Fuse", 0)}} onMouseEnter={() => {changeLegendsName("Fuse")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Gibby.png" id="Gibby" className="PicturesLegends"  onClick={() => {ColorElement("Gibby", 0)}} onMouseEnter={() => {changeLegendsName("Gibby")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Horizon.png" id="Horizon" className="PicturesLegends" onClick={() => {ColorElement("Horizon", 0)}}  onMouseEnter={() => {changeLegendsName("Horizon")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Lifeline.png" id="Lifeline" className="PicturesLegends" onClick={() => {ColorElement("Lifeline", 0)}}  onMouseEnter={() => {changeLegendsName("Lifeline")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Loba.png" id="Loba" className="PicturesLegends" onClick={() => {ColorElement("Loba", 0)}}  onMouseEnter={() => {changeLegendsName("Loba")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Madmaggie.png" id="Madmaggie" className="PicturesLegends" onClick={() => {ColorElement("Madmaggie", 0)}}  onMouseEnter={() => {changeLegendsName("Madmaggie")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Mirage.png" id="Mirage" className="PicturesLegends" onClick={() => {ColorElement("Mirage", 0)}}  onMouseEnter={() => {changeLegendsName("Mirage")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Newcastle.png" id="Newcastle" className="PicturesLegends" onClick={() => {ColorElement("Newcastle", 0)}}  onMouseEnter={() => {changeLegendsName("Newcastle")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Octane.png" id="Octane" className="PicturesLegends" onClick={() => {ColorElement("Octane", 0)}}  onMouseEnter={() => {changeLegendsName("Octane")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Pathfinder.png" id="Pathfinder" className="PicturesLegends" onClick={() => {ColorElement("Pathfinder", 0)}}  onMouseEnter={() => {changeLegendsName("Pathfinder")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Rampart.png" id="Rampart" className="PicturesLegends" onClick={() => {ColorElement("Rampart", 0)}}  onMouseEnter={() => {changeLegendsName("Rampart")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Revanant.png" id="Revanant" className="PicturesLegends" onClick={() => {ColorElement("Revanant", 0)}}  onMouseEnter={() => {changeLegendsName("Revanant")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Seer.png" id="Seer" className="PicturesLegends" onClick={() => {ColorElement("Seer", 0)}}  onMouseEnter={() => {changeLegendsName("Seer")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Sparrow.png" id="Sparrow" className="PicturesLegends" onClick={() => {ColorElement("Sparrow", 0)}}  onMouseEnter={() => {changeLegendsName("Sparrow")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Valkyrie.png" id="Valkyrie" className="PicturesLegends" onClick={() => {ColorElement("Valkyrie", 0)}}  onMouseEnter={() => {changeLegendsName("Valkyrie")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Vantage.png" id="Vantage" className="PicturesLegends" onClick={() => {ColorElement("Vantage", 0)}}  onMouseEnter={() => {changeLegendsName("Vantage")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Wattson.png" id="Wattson" className="PicturesLegends" onClick={() => {ColorElement("Wattson", 0)}}  onMouseEnter={() => {changeLegendsName("Wattson")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                        <img src="./Legends/Wraith.png" id="Wraith" className="PicturesLegends" onClick={() => {ColorElement("Wraith", 0)}}  onMouseEnter={() => {changeLegendsName("Wraith")}} onMouseLeave={() => {changeLegendsName("")}}></img>
                    </div>

                    
                    <div id="QuickButtonsLegends">
                        <button onClick={SelectAllLegends} className="select-all-btn">Select All</button>
                        <button onClick={DeselectAllLegends} className="select-all-btn">Deselect All | Reset</button>
                    </div>
                </div>

                

                <div id="WeaponsSelection">
                    <h2 id="WeaponsTitle">{WeaponName}</h2>

                    <div id="WeaponPictures">
                        <img src="./Weapons/3030.png" id="3030" className="PicturesWeapons" onClick={() => {ColorElement("3030", 1)}} onMouseEnter={() => {changeWeaponName("3030");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/Alternator.png" id="Alternator" className="PicturesWeapons" onClick={() => {ColorElement("Alternator", 1)}} onMouseEnter={() => {changeWeaponName("Alternator");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/Bow.png" id="Bow" className="PicturesWeapons" onClick={() => {ColorElement("Bow", 1)}} onMouseEnter={() => {changeWeaponName("Bow");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/CAR.png" id="CAR" className="PicturesWeapons" onClick={() => {ColorElement("CAR", 1)}} onMouseEnter={() => {changeWeaponName("CAR");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/ChargeRifle.png" id="ChargeRifle" className="PicturesWeapons" onClick={() => {ColorElement("ChargeRifle", 1)}} onMouseEnter={() => {changeWeaponName("ChargeRifle");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/Devotion.png" id="Devotion" className="PicturesWeapons" onClick={() => {ColorElement("Devotion", 1)}} onMouseEnter={() => {changeWeaponName("Devotion");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/DMR.png" id="DMR" className="PicturesWeapons" onClick={() => {ColorElement("DMR", 1)}} onMouseEnter={() => {changeWeaponName("DMR");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/EVA.png" id="EVA" className="PicturesWeapons" onClick={() => {ColorElement("EVA", 1)}} onMouseEnter={() => {changeWeaponName("EVA");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/Flatline.png" id="Flatline" className="PicturesWeapons" onClick={() => {ColorElement("Flatline", 1)}} onMouseEnter={() => {changeWeaponName("Flatline");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/G7.png" id="G7" className="PicturesWeapons" onClick={() => {ColorElement("G7", 1)}} onMouseEnter={() => {changeWeaponName("G7");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/Havoc.png" id="Havoc" className="PicturesWeapons" onClick={() => {ColorElement("Havoc", 1)}} onMouseEnter={() => {changeWeaponName("Havoc");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/Hemlok.png" id="Hemlok" className="PicturesWeapons" onClick={() => {ColorElement("Hemlok", 1)}} onMouseEnter={() => {changeWeaponName("Hemlok");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/Kraber.png" id="Kraber" className="PicturesWeapons" onClick={() => {ColorElement("Kraber", 1)}} onMouseEnter={() => {changeWeaponName("Kraber");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/LStar.png" id="LStar" className="PicturesWeapons" onClick={() => {ColorElement("LStar", 1)}} onMouseEnter={() => {changeWeaponName("LStar");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/Mastiff.png" id="Mastiff" className="PicturesWeapons" onClick={() => {ColorElement("Mastiff", 1)}} onMouseEnter={() => {changeWeaponName("Mastiff");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/Mozambique.png" id="Mozambique" className="PicturesWeapons" onClick={() => {ColorElement("Mozambique", 1)}} onMouseEnter={() => {changeWeaponName("Mozambique");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/Nemesis.png" id="Nemesis" className="PicturesWeapons" onClick={() => {ColorElement("Nemesis", 1)}} onMouseEnter={() => {changeWeaponName("Nemesis");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/P2020.png" id="P2020" className="PicturesWeapons" onClick={() => {ColorElement("P2020", 1)}} onMouseEnter={() => {changeWeaponName("P2020");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/PeaceKeeper.png" id="Peacekeeper" className="PicturesWeapons" onClick={() => {ColorElement("Peacekeeper", 1)}} onMouseEnter={() => {changeWeaponName("Peacekeeper");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/Prowler.png" id="Prowler" className="PicturesWeapons" onClick={() => {ColorElement("Prowler", 1)}} onMouseEnter={() => {changeWeaponName("Prowler");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/R99.png" id="R99" className="PicturesWeapons" onClick={() => {ColorElement("R99", 1)}} onMouseEnter={() => {changeWeaponName("R99");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/R301.png" id="R301" className="PicturesWeapons" onClick={() => {ColorElement("R301", 1)}} onMouseEnter={() => {changeWeaponName("R301");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/Rampage.png" id="Rampage" className="PicturesWeapons" onClick={() => {ColorElement("Rampage", 1)}} onMouseEnter={() => {changeWeaponName("Rampage");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/RE45.png" id="RE45" className="PicturesWeapons" onClick={() => {ColorElement("RE45", 1)}} onMouseEnter={() => {changeWeaponName("RE45");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/Sentinel.png" id="Sentinel" className="PicturesWeapons" onClick={() => {ColorElement("Sentinel", 1)}} onMouseEnter={() => {changeWeaponName("Sentinel");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/Spitfire.png" id="Spitfire" className="PicturesWeapons" onClick={() => {ColorElement("Spitfire", 1)}} onMouseEnter={() => {changeWeaponName("Spitfire");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/TripleTake.png" id="TripleTake" className="PicturesWeapons" onClick={() => {ColorElement("TripleTake", 1)}} onMouseEnter={() => {changeWeaponName("TripleTake");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/Volt.png" id="Volt" className="PicturesWeapons" onClick={() => {ColorElement("Volt", 1)}} onMouseEnter={() => {changeWeaponName("Volt");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                        <img src="./Weapons/Wingman.png" id="Wingman" className="PicturesWeapons" onClick={() => {ColorElement("Wingman", 1)}} onMouseEnter={() => {changeWeaponName("Wingman");}} onMouseLeave={() => {changeWeaponName("")}}></img>
                    </div>

                    <div id="QuickButtonsWeapons">
                        <button onClick={SelectAllWeapons} className="select-all-btn">Select All</button>
                        <button onClick={DeselectAllWeapons} className="select-all-btn">Deselect All | Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}