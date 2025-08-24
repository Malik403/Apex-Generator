import "./CSS/EditNames.css"
import FadeIn from "./Functions/FadeIn";
import FadeOut from "./Functions/FadeOut";
import { PlayerContext } from "./PlayerContext";
import { useContext } from "react";
import { useState } from "react";

export var HowManyPlayer = 0;

export default function EditNames() {

    const { updatePlayer1, updatePlayer2, updatePlayer3 } = useContext(PlayerContext);


    const [p1Input, setP1Input] = useState("Player 1");
    const [p2Input, setP2Input] = useState("Player 2");
    const [p3Input, setP3Input] = useState("Player 3");

    function show_1Player() {

        // Enabling the Player Selected Box
        FadeIn("OnePlayerSelected")

        // Moving the thing


        HowManyPlayer = 1;

        // Disabling All the other ones
        FadeOut("TwoPlayersSelected")
        FadeOut("ThreePlayersSelected")

        console.log(HowManyPlayer)
    }

    function Show_2Player() {

        // Enabling the Player Selected Box
        FadeIn("OnePlayerSelected")

        FadeIn("TwoPlayersSelected")

        HowManyPlayer = 2;

        FadeOut("ThreePlayersSelected")
    }

    function Show_3Player() {

        // Enabling the Player Selected Box
        FadeIn("OnePlayerSelected")

        FadeIn("TwoPlayersSelected")

        // Showing the Third One
        FadeIn("ThreePlayersSelected")

        HowManyPlayer = 3;
    }

    function Chosen_Option() {
        const ChosenOption = document.getElementById("PlayerSelection").value

        if (ChosenOption == "player1") {
            show_1Player()
        } else if (ChosenOption == "player2") {
            Show_2Player()
        } else if (ChosenOption == "player3") {
            Show_3Player()
        } else if (ChosenOption == "none") {
            NoPlayerSelectedd()
           HowManyPlayer = 0;
        }
    }

    function Player1Submit() {
        const Entry_Button = document.getElementById("EntryPlayer1").value

        setP1Input(Entry_Button)

        updatePlayer1(Entry_Button)
    }

    function Player2Submit() {
        const Entry_Button = document.getElementById("EntryPlayer2").value

        setP2Input(Entry_Button)

        updatePlayer2(Entry_Button)
    }

    function Player3Submit() {
        const Entry_Button = document.getElementById("EntryPlayer3").value

        setP3Input(Entry_Button)

        updatePlayer3(Entry_Button)
    }

    function NoPlayerSelectedd() {
        FadeOut("OnePlayerSelected")
        FadeOut("TwoPlayersSelected")
        FadeOut("ThreePlayersSelected")
    }

    return (
        <>
            <div id="EditNamesLegendsBlock">
    
                <h1 id="Title">Players</h1>

                <label id="HowMPlayers">How Many People  Are Playing?</label>

                <div className="StyleDIVNames">
                    <select id="PlayerSelection" className="EditNamesSelection" onChange={Chosen_Option}>
                        <option value="none" id="NoPlayerSelected">Choose Players:</option>
                        <option value="player1">1 Player</option>
                        <option value="player2">2 Players</option>
                        <option value="player3">3 Players</option>
                    </select>
                </div>
            </div>


            <div id="OnePlayerSelected">
            
                <h3 id="TitlePlayer">{p1Input}</h3>

                <input id="EntryPlayer1" type="entry" maxLength={15} />
                <button id="SubmitButton" onClick={Player1Submit}>Submit</button>
            </div>

            <div id="TwoPlayersSelected">

                <h3 id="TitlePlayer">{p2Input}</h3>

                <input id="EntryPlayer2" type="entry"  maxLength={15} />
                <button id="SubmitButton" onClick={Player2Submit}>Submit</button>
            </div>

            <div id="ThreePlayersSelected">

                <h3 id="TitlePlayer">{p3Input}</h3>

                <input id="EntryPlayer3" type="entry"  maxLength={15} />
                <button id="SubmitButton" onClick={Player3Submit}>Submit</button>
            </div>
        </>
    )
}