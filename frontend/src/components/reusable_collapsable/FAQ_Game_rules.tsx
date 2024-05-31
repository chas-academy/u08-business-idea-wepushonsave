/* eslint-disable react/react-in-jsx-scope */

import {useState} from 'react';
import Collapsable from './Collapsable';
import CollapsableContent from './CollapsableContent';

const FAQ_Game_rules = () => {
  const [openMainCollapsibleId, setOpenMainCollapsibleId] = useState<
    string | null
  >(null);
  const [openSubCollapsibleId, setOpenSubCollapsibleId] = useState<
    string | null
  >(null);

  const handleMainCollapsibleToggle = (id: string) => {
    setOpenMainCollapsibleId(prevId => (prevId === id ? null : id));
  };

  const handleSubCollapsibleToggle = (id: string) => {
    setOpenSubCollapsibleId(prevId => (prevId === id ? null : id));
  };

  return (
    <>
      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPAabout">
        <Collapsable
          titles="About MTG"
          content={
            <CollapsableContent
              title=""
              items={[
                'Magic: The Gathering is a collectible card game created by mathematician Richard Garfield and published by Wizards of the Coast in 1993. As the first trading card game of its kind, Magic has set the standard for the genre and has developed a massive, dedicated player base worldwide. In the game, players take on the roles of powerful spellcasters known as Planeswalkers, using customized decks of cards to cast spells, summon creatures, and engage in strategic battles against one another. With an ever-expanding library of cards, Magic: The Gathering combines elements of strategy, fantasy, and competitive play, making it a beloved and enduring game in the world of tabletop and digital gaming.',
              ]}
            />
          }
          isOpen={openMainCollapsibleId === 'pAPAhouse-rules'}
          onClick={() => handleMainCollapsibleToggle('pAPAhouse-rules')}
        />
      </div>
      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPACommander-rules">
        <Collapsable
          titles="Commander Rules/Game Guide"
          content={
            <>
              <div id="deck-construction-and-Setup">
                <Collapsable
                  titles="Deck Construction and Setup"
                  content={
                    <CollapsableContent
                      title="1. Deck Construction and Setup"
                      items={[
                        'Deck Size: Each player constructs a 100-card singleton deck around a legendary creature chosen as their Commander.',
                        'Commander: The Commander is placed in the command zone at the start of the game.',
                        'Color Identity: All cards in your deck must match the color identity of your Commander.',
                        'Singleton Rule: You can only include one copy of each card (except basic lands) in your deck.',
                        'Starting Life: Players begin with 40 life points. In Two-Headed Giant format, each team starts with 30 life points.',
                        'Opening Hand: Players draw opening hands of seven cards after shuffling their decks and determining the starting player.',
                        '_',
                      ]}
                    />
                  }
                  isOpen={
                    openSubCollapsibleId === 'deck-construction-and-Setup'
                  }
                  onClick={() =>
                    handleSubCollapsibleToggle('deck-construction-and-Setup')
                  }
                />
              </div>
              <div id="card-types">
                <Collapsable
                  titles="Card Types"
                  content={
                    <CollapsableContent
                      title="2. Card Types"
                      items={[
                        'Lands: Play one land per turn during your main phase. Lands produce mana for casting spells and activating abilities.',
                        'Creatures: Used to attack opponents and defend against attacks. Each creature has power and toughness values.',
                        'Spells: Include instants and sorceries with various effects. Instants can be cast at almost any time, while sorceries are cast during the main phase unless they have flash.',
                        'Artifacts and Enchantments: Provide ongoing effects that modify the game state or give benefits to the player.',
                        '_',
                      ]}
                    />
                  }
                  isOpen={openSubCollapsibleId === 'card-types'}
                  onClick={() => handleSubCollapsibleToggle('card-types')}
                />
              </div>
              <div id="turn-structure">
                <Collapsable
                  titles="Turn Structure"
                  content={
                    <CollapsableContent
                      title="3. Turn Structure"
                      items={[
                        'Each turn is divided into phases:',
                        '_',
                        '-Beginning Phase:',
                        '*Untap: Untap all tapped permanents, including lands, creatures, artifacts, and enchantments.',
                        '*Upkeep: Trigger and resolve any upkeep effects.',
                        '*Draw: Draw one card from your library.',
                        '_',
                        '-Main Phase:',
                        '*Actions: Play lands, cast spells, and activate abilities.',
                        '_',
                        '-Combat Phase (if applicable):',
                        '*Declare Attackers: Choose which creatures will attack.',
                        '*Declare Blockers: Assign defending creatures if attacked.',
                        '*Combat Damage: Resolve damage between attacking and blocking creatures.',
                        '_',
                        '-Second Main Phase:',
                        '*Actions: Play additional lands and cast spells.',
                        '_',
                        '-Ending Phase:',
                        '*End Step: Trigger and resolve any end-of-turn effects.',
                        '*Cleanup Step: Discard down to the hand size limit and end temporary effects.',
                        '_',
                      ]}
                    />
                  }
                  isOpen={openSubCollapsibleId === 'turn-structure'}
                  onClick={() => handleSubCollapsibleToggle('turn-structure')}
                />
              </div>
              <div id="casting-spells">
                <Collapsable
                  titles="Casting Spells"
                  content={
                    <CollapsableContent
                      title="4. Casting Spells"
                      items={[
                        'Mana Cost: Pay the mana cost using combinations of colored and colorless mana.',
                        'Mana Production: Primarily from tapping lands, but also from other cards and abilities.',
                        'Additional Costs: Some spells have extra costs or restrictions, like sacrificing creatures or paying life.',
                        '_',
                      ]}
                    />
                  }
                  isOpen={openSubCollapsibleId === 'casting-spells'}
                  onClick={() => handleSubCollapsibleToggle('casting-spells')}
                />
              </div>
              <div id="combat">
                <Collapsable
                  titles="Combat"
                  content={
                    <CollapsableContent
                      title="5. Combat"
                      items={[
                        'Attack and Defense: Attack opponents or their planeswalkers with creatures.',
                        'Damage Resolution: Attacking creatures deal damage equal to their power, while blocking creatures assign damage to attackers. Damage is dealt simultaneously during the combat damage step.',
                        '_',
                      ]}
                    />
                  }
                  isOpen={openSubCollapsibleId === 'combat'}
                  onClick={() => handleSubCollapsibleToggle('combat')}
                />
              </div>
              <div id="damage-and-life">
                <Collapsable
                  titles="Damage and Life"
                  content={
                    <CollapsableContent
                      title="6. Damage and Life"
                      items={[
                        'Life Total: Damage reduces a player’s life total. Reaching zero life points results in a loss.',
                        'Commander Damage: If a player takes 21 or more combat damage from a single commander over the game, they lose.',
                        '_',
                      ]}
                    />
                  }
                  isOpen={openSubCollapsibleId === 'damage-and-life'}
                  onClick={() => handleSubCollapsibleToggle('damage-and-life')}
                />
              </div>
              <div id="keywords-and-abilities">
                <Collapsable
                  titles="Keywords and Abilities"
                  content={
                    <CollapsableContent
                      title="7. Keywords and Abilities"
                      items={[
                        'Keywords: Examples include flying (can only be blocked by creatures with flying), trample (excess damage goes to the opponent), and lifelink (damage dealt heals the player).',
                        'Commander Abilities: Commanders often have unique, impactful abilities.',
                        '_',
                      ]}
                    />
                  }
                  isOpen={openSubCollapsibleId === 'keywords-and-abilities'}
                  onClick={() =>
                    handleSubCollapsibleToggle('keywords-and-abilities')
                  }
                />
              </div>
              <div id="win-conditions">
                <Collapsable
                  titles="Win Conditions"
                  content={
                    <CollapsableContent
                      title="8. Win Conditions"
                      items={[
                        'Primary Objective: Reduce opponents’ life totals to zero.',
                        'Alternative Methods: Commander damage, decking out opponents (forcing them to draw from an empty library), or specific card effects.',
                        'Deck Strategies: Focus on specific strategies or combos to achieve victory.',
                        '_',
                      ]}
                    />
                  }
                  isOpen={openSubCollapsibleId === 'win-conditions'}
                  onClick={() => handleSubCollapsibleToggle('win-conditions')}
                />
              </div>
              <div id="interaction-and-stack">
                <Collapsable
                  titles="Interaction and Stack"
                  content={
                    <CollapsableContent
                      title="9. Interaction and Stack"
                      items={[
                        'Stack Usage: Spells and abilities resolve using a stack. Players can respond to actions with instants, activated abilities, or other effects.',
                        'Timing: Understanding the stack is crucial for effective interaction, especially in multiplayer settings.',
                        '_',
                      ]}
                    />
                  }
                  isOpen={openSubCollapsibleId === 'interaction-and-stack'}
                  onClick={() =>
                    handleSubCollapsibleToggle('interaction-and-stack')
                  }
                />
              </div>
              <div id="mulligans-and-sideboarding">
                <Collapsable
                  titles="Mulligans and Sideboarding"
                  content={
                    <CollapsableContent
                      title="10. Mulligans and Sideboarding"
                      items={[
                        'Mulligans: Players can redraw their starting hand, following specific rules like the Vancouver mulligan.',
                        'Sideboarding: In multiplayer Commander games, players may have sideboards for adjusting decks between games, though typically not used in casual play.',
                        '_',
                        '-Commander Mechanics',
                        '*Command Zone: Your Commander starts in the command zone.',
                        '*Casting Commander: You can cast your Commander from the command zone by paying its mana cost plus an additional 2 mana for each previous cast from the command zone.',
                        '*Returning to Command Zone: If your Commander would go to any other zone (graveyard, exile, etc.), you can choose to return it to the command zone instead.',
                        '_',
                        '-Interaction and Strategy',
                        '*Player Interaction: Politics and alliances play a significant role in multiplayer Commander games.',
                        '*Adaptability: Flexibility and adaptability are essential, as games can evolve unpredictably.',
                        '_',
                        '-Winning the Game',
                        '*Victory: The last player with at least 1 life wins.',
                        '*Alternative Victory Conditions: Based on house rules or specific card effects.',
                        '_',
                        '-Sportsmanship and Enjoyment',
                        '*Emphasis: Commander is a social format focused on fun and interaction.',
                        '*Conduct: Good sportsmanship, communication, and respect for opponents are essential.',
                      ]}
                    />
                  }
                  isOpen={openSubCollapsibleId === 'mulligans-and-sideboarding'}
                  onClick={() =>
                    handleSubCollapsibleToggle('mulligans-and-sideboarding')
                  }
                />
              </div>
            </>
          }
          isOpen={openMainCollapsibleId === 'pAPACommander-rules'}
          onClick={() => handleMainCollapsibleToggle('pAPACommander-rules')}
        />
      </div>
      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPAphilosophy">
        <Collapsable
          titles="philosophy"
          content={
            <CollapsableContent
              title=""
              items={[
                "The Commander format is all about relaxed, social gaming where players can showcase their creativity and have fun with friends. It's less about competition and more about the joy of playing Magic in a multiplayer setting.",
              ]}
            />
          }
          isOpen={openMainCollapsibleId === 'pAPAphilosophy'}
          onClick={() => handleMainCollapsibleToggle('pAPAphilosophy')}
        />
      </div>

      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPAthe-golden-rule">
        <Collapsable
          titles="The Golden Rule"
          content={
            <CollapsableContent
              title=""
              items={[
                'This rule emphasizes the importance of interpreting the rules of Magic in a way that preserves the integrity of the game and ensures everyone has a positive experience. It encourages players to prioritize fun and fair play.',
              ]}
            />
          }
          isOpen={openMainCollapsibleId === 'pAPAthe-golden-rule'}
          onClick={() => handleMainCollapsibleToggle('pAPAthe-golden-rule')}
        />
      </div>

      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPAhouse-rules">
        <Collapsable
          titles="House Rules"
          content={
            <CollapsableContent
              title=""
              items={[
                'Acknowledges that different playgroups may have their own preferences or variations on the standard Commander rules.',
                "It's a reminder that players are free to adopt additional rules or modifications that suit their group's playstyle.",
              ]}
            />
          }
          isOpen={openMainCollapsibleId === 'pAPAhouse-rules'}
          onClick={() => handleMainCollapsibleToggle('pAPAhouse-rules')}
        />
      </div>

      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPArules-sources">
        <Collapsable
          titles="Rules Sources"
          content={
            <CollapsableContent
              title=""
              items={[
                'Points players to official documents and resources where they can find detailed rules information, including the Comprehensive Rules and any Commander-specific rulings or announcements.',
              ]}
            />
          }
          isOpen={openMainCollapsibleId === 'pAPArules-sources'}
          onClick={() => handleMainCollapsibleToggle('pAPArules-sources')}
        />
      </div>

      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPAdeck-construction">
        <Collapsable
          titles="Deck Construction"
          content={
            <CollapsableContent
              title=""
              items={[
                'Outlines the basic requirements for constructing a Commander deck, including deck size, singleton rule (no duplicate cards except basic lands), and adherence to color identity rules.',
              ]}
            />
          }
          isOpen={openMainCollapsibleId === 'pAPAdeck-construction'}
          onClick={() => handleMainCollapsibleToggle('pAPAdeck-construction')}
        />
      </div>

      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPAstarting-the-game">
        <Collapsable
          titles="Starting the Game"
          content={
            <CollapsableContent
              title=""
              items={[
                'Provides guidelines for starting a game of Commander, including determining the first player, resolving mulligans, and setting up the game environment.',
              ]}
            />
          }
          isOpen={openMainCollapsibleId === 'pAPAstarting-the-game'}
          onClick={() => handleMainCollapsibleToggle('pAPAstarting-the-game')}
        />
      </div>

      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPAcommander">
        <Collapsable
          titles="Commander"
          content={
            <CollapsableContent
              title=""
              items={[
                'Explains the significance of the Commander card in the format, including its role as the centerpiece of the deck and how it influences deck construction and gameplay decisions.',
              ]}
            />
          }
          isOpen={openMainCollapsibleId === 'pAPAcommander'}
          onClick={() => handleMainCollapsibleToggle('pAPAcommander')}
        />
      </div>
      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPAcard-legality">
        <Collapsable
          titles="Card Legality"
          content={
            <CollapsableContent
              title=""
              items={[
                'Clarifies which cards are legal for use in Commander decks, including any restrictions on reprints, promotional cards, or cards that are banned from the format.',
              ]}
            />
          }
          isOpen={openMainCollapsibleId === 'pAPAcard-legality'}
          onClick={() => handleMainCollapsibleToggle('pAPAcard-legality')}
        />
      </div>

      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPAbanned-list">
        <Collapsable
          titles="Banned List"
          content={
            <CollapsableContent
              title=""
              items={[
                'Lists cards that are banned in Commander due to their power level, disruptive nature, or potential to create unfun game experiences.',
                'The banned list aims to maintain balance and diversity in the format.',
              ]}
            />
          }
          isOpen={openMainCollapsibleId === 'pAPAbanned-list'}
          onClick={() => handleMainCollapsibleToggle('pAPAbanned-list')}
        />
      </div>

      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPAcolor-identity-and-color-indicator">
        <Collapsable
          titles="Color Identity and Color Indicator"
          content={
            <CollapsableContent
              title=""
              items={[
                'Defines color identity and explains its importance in deck construction.',
                "Players must ensure that all cards in their deck have a color identity that matches their Commander's color identity.",
              ]}
            />
          }
          isOpen={
            openMainCollapsibleId === 'pAPAcolor-identity-and-color-indicator'
          }
          onClick={() =>
            handleMainCollapsibleToggle(
              'pAPAcolor-identity-and-color-indicator'
            )
          }
        />
      </div>

      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPAlimited-range-of-influence">
        <Collapsable
          titles="Limited Range of Influence"
          content={
            <CollapsableContent
              title=""
              items={[
                "Introduces the concept of a player's 'range of influence' in multiplayer games and how it impacts gameplay decisions and interactions in Commander games.",
              ]}
            />
          }
          isOpen={openMainCollapsibleId === 'pAPAlimited-range-of-influence'}
          onClick={() =>
            handleMainCollapsibleToggle('pAPAlimited-range-of-influence')
          }
        />
      </div>

      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPAofficial-announcements-and-rulings">
        <Collapsable
          titles="Official Announcements and Rulings"
          content={
            <CollapsableContent
              title=""
              items={[
                'Directs players to official channels for announcements, updates, and rulings related to the Commander format, ensuring they have access to the most current information.',
              ]}
            />
          }
          isOpen={
            openMainCollapsibleId === 'pAPAofficial-announcements-and-rulings'
          }
          onClick={() =>
            handleMainCollapsibleToggle(
              'pAPAofficial-announcements-and-rulings'
            )
          }
        />
      </div>

      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPAobject-of-commander">
        <Collapsable
          titles="Object of Commander"
          content={
            <CollapsableContent
              title=""
              items={[
                'States the primary objective of playing Commander, which is to have fun and enjoy the game with friends.',
                'It emphasizes the social aspect of the format and encourages players to prioritize enjoyment over competition.',
              ]}
            />
          }
          isOpen={openMainCollapsibleId === 'pAPAobject-of-commander'}
          onClick={() => handleMainCollapsibleToggle('pAPAobject-of-commander')}
        />
      </div>

      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPArule-violations">
        <Collapsable
          titles="Rule Violations"
          content={
            <CollapsableContent
              title=""
              items={[
                'Outlines how rule violations are handled in Commander games, emphasizing communication, sportsmanship, and a spirit of fair play in resolving disputes.',
              ]}
            />
          }
          isOpen={openMainCollapsibleId === 'pAPArule-violations'}
          onClick={() => handleMainCollapsibleToggle('pAPArule-violations')}
        />
      </div>

      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPAadditional-rules-for-commander-games">
        <Collapsable
          titles="Additional Rules Commander"
          content={
            <CollapsableContent
              title=""
              items={[
                'Provides supplementary rules and guidelines specific to playing Commander, including multiplayer dynamics, format-specific interactions, and common scenarios that may arise during gameplay.',
              ]}
            />
          }
          isOpen={
            openMainCollapsibleId === 'pAPAadditional-rules-for-commander-games'
          }
          onClick={() =>
            handleMainCollapsibleToggle(
              'pAPAadditional-rules-for-commander-games'
            )
          }
        />
      </div>

      <div
        className="text-white rounded-lg mt-4 bg-site-gradient"
        id="pAPAfaq-frequently-asked-questions">
        <Collapsable
          titles="FAQ (Frequently Asked Questions)"
          content={
            <CollapsableContent
              title=""
              items={[
                'Addresses common questions and concerns about the Commander format, offering clarification and guidance on various aspects of deck construction, gameplay, and rules interpretation.',
              ]}
            />
          }
          isOpen={
            openMainCollapsibleId === 'pAPAfaq-frequently-asked-questions'
          }
          onClick={() =>
            handleMainCollapsibleToggle('pAPAfaq-frequently-asked-questions')
          }
        />
      </div>
    </>
  );
};
export default FAQ_Game_rules;

//här i vill man fylla ut texten och innehållet. Man skapar inhållet efter den färdiga layouten som collapsable och
