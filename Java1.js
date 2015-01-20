alert("Welcome to an adventure game about life on the open sea!");

alert("Ahoy, you are going to embark on this voyage as a British Navy ship Captain! You have 30 fine seamen...try and keep them alive");


// first scenario //
alert("You wake up to the quarter master shaking you saying 'Cap'n a storm came out of nowhere, the sail master got knocked out by a loose riggin'. We need you at the wheel!' '");
var pantscolor= prompt("You jump out of bed and open your drawer to grab some pants. Which pants do you choose? The brown or red pair?");
    if(pantscolor === "brown") {
    alert("When you come up on the deck, your first mate is so stunned by your pants that he falls overboard. Lose 1 crew member");
    }
    else if (pantscolor === "red") {
    alert("How patriotic of you!");
    }

//second scenario //
alert("With your pants on, you run up to the deck, water splashes you in the face as lightening strikes all around your ship. You glance around at all the faces of your crew, standing about the deck. The quarter master whispers in your ear, 'they waitin' for your command, sir' ");
var command =prompt( "Do you: A. Give the order to 'Abandon Ship!' B. Rally the men with your charisma, 'For the Queen!' C. Throw the wimpiest looking mate overboard, 'The next man not at his post will join him'");
    if(command === "A") {
    alert("All crew abandon ship and are swallowed up by the storm, being the captain you stay aboard as a giant wave engulfs your ship and you sink to the bottom of the sea.");
    alert("You lose.");
    }
    else if (command === "B") {
    alert("Your crew is inspired by you. Manning thier post, the ship makes it out of the worst part of the storm.");
    }
    else if (command === "C") {
    alert("Your crew fear your resolve...for now. You make it out of the storm, only losing 5 crew members.");
    }
//third scenario //

alert("A spotter up on the mast yells out 'A pirate ship in the fog ahead!' Your crew, fresh out of the storm are eager for a fight.");
var fight= prompt("Do you: A. Wait for the night as you stalk the pirate ship to take it down when they least expect it? B. Command the attack at full speed, risking an open battle and several casualties, also possibly damaging your ship? or C. Let the pirate ship go, against royal decree.");
    if(fight === "A") {
    alert("Your crew sneaks aboard the pirate ship, once aboard it turns out to be a trap. You lose the entire boarding party. Lose 20");
    }
    else if(fight === "B") {
    alert("Your ship broadsides the pirate ship, all cannons firing. The pirates do not fight back and sink into the depths of the ocean.");
    }
    else if(fight === "C"){
    alert("The royal navy declares you a traitor to the crown and hunts you down til the last of your days.");
    alert("You lose.");
    }

//fourth scenario //

alert("A day passes on the sea, with no wind or rain. All of a sudden your ship starts to moan and loud noises can be heard coming from below deck...");
alert("Before you can send someone to check on whats going on, large tenticles come sprawling out of the water, wrapping themselves around your ship. The quarter master yells 'ALL HANDS TO BATTLE!' For a moment you watch as your ship errupts into chaos, sending ripples through the ocean. A tenticle slams on deck, just a few feet away from where you stand.");
var final= prompt("you prepare yourself to: A. Fight alongside your crew for your very life. B. Cower in the decks below, hoping this will pass over. C. Run around the ship giving orders to overcome the beast with strategy.");
    if(final === "A") {
    alert("You are a noble Captian and stand by your crew fighting off the giant beast.");
    alert("if you lost more than 5 crew members during your voyage...you lose the battle");
    }
    else if(final === "B") {
    alert("Unfortunatly the giant tenticles destroyed the lower decks. You lose")
    }
    else if(final === "C") {
    alert("You and your crew are able to come up with a plan to destroy the beast, using every last one of your cannons. You saved the ship and your remaining crew members!");
    alert("Congratulations, you won the game!");
    }
