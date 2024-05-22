import React from 'react';
import CollapsableContent from './CollapsableContent';

const generateCollapsableContent = () => {
  return (
    <>
    <div id={overlook}>
    <CollapsableContent
      title="1. setup"
      items={[ 
        ` Each player selects a legendary creature as their Commander.`,
        ` Each player constructs a 100-card singleton deck around their chosen Commander.`,
        ` Players shuffle their decks and determine the starting player.`,
        ` Players draw opening hands, typically with the standard hand size of seven cards.`,
      ]}
    />

    <CollapsableContent
      title="2. Game Structure"
      items={[
        `Players take turns in clockwise order around the table.`,
        `Each turn is divided into phases: Beginning Phase, Main Phase, Combat Phase (if applicable), Second Main Phase, and Ending Phase.`,
        `Within each phase, players have opportunities to cast spells, activate abilities, and respond to their opponents.`,
      ]}
       />

          <CollapsableContent
      title="3. Objectives"
      items={[
        "The primary objective is to eliminate your opponents by reducing their life total to zero.",
        "Secondary objectives may include achieving specific game goals or completing certain strategies based on your Commander and deck theme.",      ]}
       />

          <CollapsableContent
      title="4. Playing Turns"
      items={[
        "-Beginning Phase:",
        "* Untap all permanents you control.",
        "* Triggered abilities may occur during the upkeep step.",
        "* Draw a card during the draw step.",

        "- Main Phase:",
        "* Play land cards from your hand (one per turn).",
        "* Cast spells, including creatures, sorceries, instants, enchantments, artifacts, and planeswalkers.",
        "* Activate abilities of permanents you control.",
        
        "- Combat Phase (if applicable):",
        "Beginning of Combat Step triggers any relevant effects.",
        "*Declare attackers, choosing which creatures will attack.",
        "*Declare blockers, assigning defending creatures if your opponent attacks.",
        "*Combat Damage Step resolves damage between attacking and blocking creatures.",
        "*End of Combat Step resolves any effects triggered by the combat phase",

        "-Second Main Phase:",
        "Similar to the first main phase, players can play additional lands and cast spells.",

        "-Ending Phase:",
        "End step triggers any relevant effects.",
        "*Cleanup step occurs, where players discard down to their maximum hand size, and temporary effects end.",      
    ]}
       />

          <CollapsableContent
      title="5. Commander Mechanics"
      items={[
        "Your Commander starts the game in the command zone.",
        "You can cast your Commander from the command zone by paying its mana cost, plus an additional 2 mana for each time it has been cast from the command zone previously.",
        "If your Commander would go to any zone other than the command zone (such as the graveyard or exile), you can choose to return it to the command zone instead.",      ]}
       />

          <CollapsableContent
      title="6. Deck Construction"
      items={[
        "Decks must contain exactly 100 cards, including your Commander.",
        "All cards in your deck must match the color identity of your Commander.",
        "The singleton rule applies, meaning you can only include one copy of each card (except basic lands) in your deck.",
      ]}
       />

          <CollapsableContent
      title="7. Interaction and Strategy"
      items={[
        "Interaction between players is a key aspect of Commander gameplay, with politics often playing a significant role.",
        "Strategies vary widely based on deck themes, Commander choices, and individual playstyles.",
        "Flexibility and adaptability are important, as games can evolve unpredictably in multiplayer settings.",
      ]}
       />

          <CollapsableContent
      title="8. Winning the Game"
      items={[
        "The last player remaining with at least 1 life wins the game.",
        "Alternative victory conditions or goals may be defined based on house rules or specific card effects.",
      ]}
       />

          <CollapsableContent
      title="9. Sportsmanship and Enjoyment"
      items={[
        "-Sportsmanship and Enjoyment",
        "Commander is a social format, emphasizing fun and interaction.",
        "Good sportsmanship, communication, and respect for your opponents are essential aspects of playing Commander." 
      ]}
       />
       </div>
    </>
  );
};

export default generateCollapsableContent;