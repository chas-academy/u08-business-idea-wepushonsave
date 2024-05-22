import Collapsable from './Collapsable';
import CollapsableContent from './CollapsableContent';

//här i vill man fylla ut texten och innehållet. Man skapar inhållet efter den färdiga layouten som collapsable och 

const FAQ_Game_rules = () => {
  return (
    <>
      <div className="p-4 bg-gray-200 rounded-lg">
      {/* collapsable creates a new dropdown with collapsable as content  titles is the title on the dropdown while content is everything inside collapsable*/}
        <Collapsable
          titles="overlook"
          content={
            <>
              <CollapsableContent
                title="1. Setup"
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
                  'The primary objective is to eliminate your opponents by reducing their life total to zero.',
                  'Secondary objectives may include achieving specific game goals or completing certain strategies based on your Commander and deck theme.',
                ]}
              />
              <CollapsableContent
                title="3. Objectives"
                items={[
                  'The primary objective is to eliminate your opponents by reducing their life total to zero.',
                  'Secondary objectives may include achieving specific game goals or completing certain strategies based on your Commander and deck theme.',
                ]}
              />

              <CollapsableContent
                title="4. Playing Turns"
                items={[
                  '-Beginning Phase:',
                  '* Untap all permanents you control.',
                  '* Triggered abilities may occur during the upkeep step.',
                  '* Draw a card during the draw step.',

                  '- Main Phase:',
                  '* Play land cards from your hand (one per turn).',
                  '* Cast spells, including creatures, sorceries, instants, enchantments, artifacts, and planeswalkers.',
                  '* Activate abilities of permanents you control.',

                  '- Combat Phase (if applicable):',
                  'Beginning of Combat Step triggers any relevant effects.',
                  '*Declare attackers, choosing which creatures will attack.',
                  '*Declare blockers, assigning defending creatures if your opponent attacks.',
                  '*Combat Damage Step resolves damage between attacking and blocking creatures.',
                  '*End of Combat Step resolves any effects triggered by the combat phase',

                  '-Second Main Phase:',
                  'Similar to the first main phase, players can play additional lands and cast spells.',

                  '-Ending Phase:',
                  'End step triggers any relevant effects.',
                  '*Cleanup step occurs, where players discard down to their maximum hand size, and temporary effects end.',
                ]}
              />
              <CollapsableContent
                title="5. Commander Mechanics"
                items={[
                  'Your Commander starts the game in the command zone.',
                  'You can cast your Commander from the command zone by paying its mana cost, plus an additional 2 mana for each time it has been cast from the command zone previously.',
                  'If your Commander would go to any zone other than the command zone (such as the graveyard or exile), you can choose to return it to the command zone instead.',
                ]}
              />
              <CollapsableContent
                title="6. Deck Construction"
                items={[
                  'Decks must contain exactly 100 cards, including your Commander.',
                  'All cards in your deck must match the color identity of your Commander.',
                  'The singleton rule applies, meaning you can only include one copy of each card (except basic lands) in your deck.',
                ]}
              />
              <CollapsableContent
                title="7. Interaction and Strategy"
                items={[
                  'Interaction between players is a key aspect of Commander gameplay, with politics often playing a significant role.',
                  'Strategies vary widely based on deck themes, Commander choices, and individual playstyles.',
                  'Flexibility and adaptability are important, as games can evolve unpredictably in multiplayer settings.',
                ]}
              />
              <CollapsableContent
                title="8. Winning the Game"
                items={[
                  'The last player remaining with at least 1 life wins the game.',
                  'Alternative victory conditions or goals may be defined based on house rules or specific card effects.',
                ]}
              />
              <CollapsableContent
                title="9. Sportsmanship and Enjoyment"
                items={[
                  '-Sportsmanship and Enjoyment',
                  'Commander is a social format, emphasizing fun and interaction.',
                  'Good sportsmanship, communication, and respect for your opponents are essential aspects of playing Commander.',
                ]}
              />
            </>
          }
        />
        <Collapsable
          titles="philosophy"
          content={
            <CollapsableContent
              title="Philosophy"
              items={[
                "The Commander format is all about relaxed, social gaming where players can showcase their creativity and have fun with friends. It's less about competition and more about the joy of playing Magic in a multiplayer setting.",
              ]}
            />
          }
        />
        <Collapsable
          titles="The Golden Rule"
          content={
            <CollapsableContent
              title="The Golden Rule:"
              items={[
                "This rule emphasizes the importance of interpreting the rules of Magic in a way that preserves the integrity of the game and ensures everyone has a positive experience. It encourages players to prioritize fun and fair play.",
              ]}
            />
          }
        />
        <Collapsable
        titles="House Rules"
        content={
          <CollapsableContent
            title="House Rules:"
            items={[
              "Acknowledges that different playgroups may have their own preferences or variations on the standard Commander rules.",
              "It's a reminder that players are free to adopt additional rules or modifications that suit their group's playstyle."
            ]}
          />
        }
      />

      <Collapsable
        titles="Rules Sources"
        content={
          <CollapsableContent
            title="Rules Sources:"
            items={[
              "Points players to official documents and resources where they can find detailed rules information, including the Comprehensive Rules and any Commander-specific rulings or announcements."
            ]}
          />
        }
      />

      <Collapsable
        titles="Deck Construction"
        content={
          <CollapsableContent
            title="Deck Construction:"
            items={[
              "Outlines the basic requirements for constructing a Commander deck, including deck size, singleton rule (no duplicate cards except basic lands), and adherence to color identity rules."
            ]}
          />
        }
      />

      <Collapsable
        titles="Starting the Game"
        content={
          <CollapsableContent
            title="Starting the Game:"
            items={[
              "Provides guidelines for starting a game of Commander, including determining the first player, resolving mulligans, and setting up the game environment."
            ]}
          />
        }
      />

      <Collapsable
        titles="Commander"
        content={
          <CollapsableContent
            title="Commander:"
            items={[
              "Explains the significance of the Commander card in the format, including its role as the centerpiece of the deck and how it influences deck construction and gameplay decisions."
            ]}
          />
        }
      />

      <Collapsable
        titles="Card Legality"
        content={
          <CollapsableContent
            title="Card Legality:"
            items={[
              "Clarifies which cards are legal for use in Commander decks, including any restrictions on reprints, promotional cards, or cards that are banned from the format."
            ]}
          />
        }
      />

      <Collapsable
        titles="Banned List"
        content={
          <CollapsableContent
            title="Banned List:"
            items={[
              "Lists cards that are banned in Commander due to their power level, disruptive nature, or potential to create unfun game experiences.",
              "The banned list aims to maintain balance and diversity in the format."
            ]}
          />
        }
      />

      <Collapsable
        titles="Color Identity and Color Indicator"
        content={
          <CollapsableContent
            title="Color Identity and Color Indicator:"
            items={[
              "Defines color identity and explains its importance in deck construction.",
              "Players must ensure that all cards in their deck have a color identity that matches their Commander's color identity."
            ]}
          />
        }
      />

      <Collapsable
        titles="Limited Range of Influence"
        content={
          <CollapsableContent
            title="Limited Range of Influence:"
            items={[
              "Introduces the concept of a player's 'range of influence' in multiplayer games and how it impacts gameplay decisions and interactions in Commander games."
            ]}
          />
        }
      />

      <Collapsable
        titles="Official Announcements and Rulings"
        content={
          <CollapsableContent
            title="Official Announcements and Rulings:"
            items={[
              "Directs players to official channels for announcements, updates, and rulings related to the Commander format, ensuring they have access to the most current information."
            ]}
          />
        }
      />

      <Collapsable
        titles="Object of Commander"
        content={
          <CollapsableContent
            title="Object of Commander:"
            items={[
              "States the primary objective of playing Commander, which is to have fun and enjoy the game with friends.",
              "It emphasizes the social aspect of the format and encourages players to prioritize enjoyment over competition."
            ]}
          />
        }
      />

      <Collapsable
        titles="Rule Violations"
        content={
          <CollapsableContent
            title="Rule Violations:"
            items={[
              "Outlines how rule violations are handled in Commander games, emphasizing communication, sportsmanship, and a spirit of fair play in resolving disputes."
            ]}
          />
        }
      />
      <Collapsable
  titles="Additional Rules for Commander Games"
  content={
    <CollapsableContent
      title="Additional Rules for Commander Games:"
      items={[
        "Provides supplementary rules and guidelines specific to playing Commander, including multiplayer dynamics, format-specific interactions, and common scenarios that may arise during gameplay."
      ]}
    />
  }
/>

<Collapsable
  titles="FAQ (Frequently Asked Questions)"
  content={
    <CollapsableContent
      title="FAQ (Frequently Asked Questions):"
      items={[
        "Addresses common questions and concerns about the Commander format, offering clarification and guidance on various aspects of deck construction, gameplay, and rules interpretation."
      ]}
    />
  }
/>
      </div>
    </>
  );
};

export default FAQ_Game_rules;
