/* eslint-disable react/react-in-jsx-scope */

import Collapsable from './Collapsable';
import CollapsableContent from './CollapsableContent';
import getIconApi from './iconApi';

const FAQ_Card_rules = () => {
  const swamp = getIconApi('{B}');
  const mountain = getIconApi('{R}');
  const plains = getIconApi('{W}');
  const forest = getIconApi('{G}');
  const island = getIconApi('{U}');
  const colorLess = getIconApi('{C}');

  return (
    <>
      <div
        className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
        id="pAPAland-types">
        <Collapsable
          titles="Land Types"
          content={
            <>
              <CollapsableContent title="" items={[]} image="" />
              <Collapsable
                titles="Swamp"
                image={<img src={swamp} alt="swamp icon" />}
                content={
                  <CollapsableContent
                    title=""
                    items={[
                      'Swamp is one of the five basic land types in Magic: The Gathering. It taps for black mana and is commonly used in decks that require black mana for casting spells and activating abilities. Black mana is often associated with themes of power, death, and ambition, supporting spells and creatures that emphasize destruction, reanimation, and life manipulation.',
                    ]}
                  />
                }
              />
              <Collapsable
                titles="Mountain"
                image={<img src={mountain} alt="mountain symbol" />}
                content={
                  <CollapsableContent
                    title=""
                    items={[
                      'Mountain is one of the five basic land types in Magic: The Gathering. It taps for red mana and is commonly used in decks that require red mana for casting spells and activating abilities. Red mana is often associated with themes of chaos, passion, and aggression, supporting spells and creatures that emphasize direct damage, haste, and explosive effects.',
                    ]}
                  />
                }
              />
              <Collapsable
                titles="Plains"
                image={<img src={plains} alt="plains symbol" />}
                content={
                  <CollapsableContent
                    title=""
                    items={[
                      'Plains is one of the five basic land types in Magic: The Gathering. It taps for white mana and is commonly used in decks that require white mana for casting spells and activating abilities. White mana is often associated with themes of order, protection, and justice, supporting spells and creatures that emphasize healing, defense, and community.',
                    ]}
                  />
                }
              />
              <Collapsable
                titles="Forest"
                image={<img src={forest} alt="forest symbol" />}
                content={
                  <CollapsableContent
                    title=""
                    items={[
                      'Forest is one of the five basic land types in Magic: The Gathering. It taps for green mana and is commonly used in decks that require green mana for casting spells and activating abilities. Green mana is often associated with themes of growth, nature, and life, supporting spells and creatures that emphasize ramp, large creatures, and natural synergy.',
                    ]}
                  />
                }
              />
              <Collapsable
                titles="Island"
                image={<img src={island} alt="island symbol" />}
                content={
                  <CollapsableContent
                    title=""
                    items={[
                      'Island is one of the five basic land types in Magic: The Gathering. It taps for blue mana and is commonly used in decks that require blue mana for casting spells and activating abilities. Blue mana is often associated with themes of intellect, manipulation, and control, supporting spells and creatures that emphasize drawing cards, countering spells, and altering the flow of the game.',
                    ]}
                  />
                }
              />
              <Collapsable
                titles="Colorless"
                image={<img src={colorLess} alt="color symbol" />}
                content={
                  <CollapsableContent
                    title=""
                    items={[
                      'Colorless lands are a category of lands in Magic: The Gathering that produce colorless mana. Unlike basic lands, colorless lands do not have a specific land type like Plains, Island, Swamp, Mountain, or Forest. Instead, they include a variety of non-basic lands such as Wastes, as well as many artifact lands and special lands that tap for colorless mana. Colorless mana is often associated with themes of neutrality, versatility, and ancient or otherworldly powers, supporting spells and abilities that transcend the traditional color pie.',
                    ]}
                  />
                }
              />
              <Collapsable
                titles="Cave"
                content={
                  <CollapsableContent
                    title=""
                    items={[
                      'Caves are a type of land in Magic: The Gathering that represent underground caverns and subterranean networks. They typically produce colorless mana and do not have a specific land subtype. Caves evoke themes of mystery, exploration, and hidden dangers, often supporting strategies that involve delving into the depths or uncovering ancient secrets.',
                    ]}
                  />
                }
              />

              <Collapsable
                titles="Desert"
                content={
                  <CollapsableContent
                    title=""
                    items={[
                      'Deserts are a category of lands in Magic: The Gathering that evoke arid and barren landscapes. They often produce colorless mana and may have additional abilities or drawbacks. Deserts symbolize harsh environments, relentless sun, and scarcity of resources. They are commonly associated with themes of endurance, survival, and desolation, shaping gameplay around resource management and resilience.',
                    ]}
                  />
                }
              />

              <Collapsable
                titles="Gate"
                content={
                  <CollapsableContent
                    title=""
                    items={[
                      'Gates are a type of land in Magic: The Gathering that represent mystical portals or gateways between worlds. They typically produce colorless mana and may have additional abilities related to their otherworldly nature. Gates symbolize connections between realms, travel across dimensions, and the convergence of different planes. They often support strategies that involve crossing boundaries, accessing hidden knowledge, or harnessing extradimensional energies.',
                    ]}
                  />
                }
              />

              <Collapsable
                titles="Lair"
                content={
                  <CollapsableContent
                    title=""
                    items={[
                      'Lairs are a subtype of land in Magic: The Gathering that represent the lairs of powerful creatures or entities. They often produce colorless mana and may have abilities that reflect the nature of the inhabitant. Lairs embody themes of primal instincts, territorial dominance, and the untamed wilderness. They are commonly associated with strategies that involve creature-based gameplay, tribal synergies, or invoking the primal forces of nature.',
                    ]}
                  />
                }
              />

              <Collapsable
                titles="Locus"
                content={
                  <CollapsableContent
                    title=""
                    items={[
                      'Loci are a type of land in Magic: The Gathering that represent focal points of magical energy or convergence. They typically produce colorless mana and may have abilities related to manipulating mana or casting spells. Loci symbolize concentrations of mystical power, ley lines, or nodes of magical significance. They often support strategies that involve spellcasting, mana acceleration, or tapping into ancient arcane forces.',
                    ]}
                  />
                }
              />

              <Collapsable
                titles="Sphere"
                content={
                  <CollapsableContent
                    title=""
                    items={[
                      'Spheres are a category of lands in Magic: The Gathering that represent crystalline orbs or magical spheres imbued with power. They typically produce colorless mana and may have abilities related to their magical properties. Spheres symbolize containment, protection, or the harnessing of magical energies. They are commonly associated with strategies that involve artifact-based gameplay, spellcasting, or manipulating mana to control the flow of magic.',
                    ]}
                  />
                }
              />

              <Collapsable
                titles="Urza's"
                content={
                  <CollapsableContent
                    title=""
                    items={[
                      "Urza's lands are a set of iconic lands in Magic: The Gathering associated with the legendary planeswalker Urza. They include Urza's Mine, Urza's Power Plant, and Urza's Tower, which together form the Urzatron. These lands produce colorless mana and often have synergistic abilities when all three are on the battlefield. Urza's lands symbolize ancient artifacts, technological innovation, and the legacy of a powerful mage. They are commonly used in strategies that involve ramping mana, casting powerful spells, or assembling artifact-based combos.",
                    ]}
                  />
                }
              />

              <Collapsable
                titles="Cloud"
                content={
                  <CollapsableContent
                    title=""
                    items={[
                      'Clouds are a type of land in Magic: The Gathering that represent ephemeral mist, vaporous mists, or celestial phenomena. They typically produce colorless mana and may have abilities related to obscuring vision, evading threats, or granting ethereal powers. Clouds symbolize ethereality, transience, and the ever-changing nature of the skies. They are often used in strategies that involve evasion, tempo-based gameplay, or accessing the mystical realms beyond the material plane.',
                    ]}
                  />
                }
              />
            </>
          }
        />
      </div>
      <div className="p-4 text-white rounded-lg mt-4 bg-zinc-700" id="pAPAcreature">
        <Collapsable
          titles="Creature"
          content={
            <>
              <CollapsableContent title="" items={[]} image="" />
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="creature-types">
                <Collapsable
                  titles="Creature Types"
                  content={
                    <CollapsableContent
                      title="Creature Types:"
                      items={[
                        'In Magic: The Gathering, creatures are a fundamental card type representing characters, monsters, and other entities that can attack, defend, and interact with other cards. Here are some key points about creature types:',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="characteristics">
                <Collapsable
                  titles="Characteristics"
                  content={
                    <CollapsableContent
                      title="1. Characteristics:"
                      items={[
                        'Creatures have several characteristics that define their gameplay, including power, toughness, mana cost, creature types, abilities, and flavor text. Power and toughness determine a creature’s combat effectiveness, while abilities and creature types provide additional strategic options and synergies.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="types-and-subtypes">
                <Collapsable
                  titles="Types and Subtypes"
                  content={
                    <CollapsableContent
                      title="2. Types and Subtypes:"
                      items={[
                        '-Creature Types:',
                        '*Creature types categorize creatures into various tribes or species, such as Human, Goblin, or Elf. These types often interact with other cards and mechanics that care about specific creature types, enabling tribal synergies and strategies.',
                        '-Subtypes:',
                        '*Some creatures have additional subtypes that further define their characteristics or abilities, such as Zombie, Warrior, or Wizard. Subtypes can impact gameplay by triggering abilities or interactions with other cards that care about specific subtypes.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="summoning-sickness">
                <Collapsable
                  titles="Summoning Sickness"
                  content={
                    <CollapsableContent
                      title="3. Summoning Sickness:"
                      items={[
                        'When a creature enters the battlefield under a player’s control, it is affected by summoning sickness until the beginning of its controller’s next turn. A creature with summoning sickness cannot attack, activate abilities requiring the tap symbol, or pay costs that include tapping the creature.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="creature-abilities">
                <Collapsable
                  titles="Creature Abilities"
                  content={
                    <CollapsableContent
                      title="4. Creature Abilities:"
                      items={[
                        'Many creatures have abilities that enhance their effectiveness, provide utility, or interact with other cards and game mechanics. These abilities can be activated, triggered, or static, and they often define a creature’s role within a deck or strategy.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="combat">
                <Collapsable
                  titles="Combat"
                  content={
                    <CollapsableContent
                      title="5. Combat:"
                      items={[
                        'Creatures play a central role in combat, attacking and blocking to deal damage to opponents or defend against attacks. Understanding combat mechanics, including blocking, attacking, damage assignment, and combat tricks, is essential for mastering Magic: The Gathering gameplay.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="creature-token">
                <Collapsable
                  titles="Creature Tokens"
                  content={
                    <CollapsableContent
                      title="6. Creature Tokens:"
                      items={[
                        'Creature tokens are temporary creatures created by spells, abilities, or other game effects. Tokens enter the battlefield with the characteristics defined by the effect that created them, such as power, toughness, creature types, and abilities. Tokens are commonly used to represent summoned creatures, summoned creatures, and other ephemeral entities.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
            </>
          }
        />
      </div>

      <div
        className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
        id="pAPAenchantment">
        <Collapsable
          titles="Enchantment"
          content={
            <>
              <CollapsableContent title="" items={[]} image="" />
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="enchantments">
                <Collapsable
                  titles="Enchantments"
                  content={
                    <CollapsableContent
                      title="Enchantments:"
                      items={[
                        'In Magic: The Gathering, enchantments are a type of permanent card that represents lasting magical effects or conditions. Enchantments provide continuous benefits, impose persistent drawbacks, or alter the game state in various ways. Here are some key points about enchantments:',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="flavor-and-identity">
                <Collapsable
                  titles="Flavor and Identity"
                  content={
                    <CollapsableContent
                      title="1. Flavor and Identity:"
                      items={[
                        'Enchantments convey ongoing magical influences, curses, blessings, or ambient effects. They often represent spells that have a lasting impact on the game world, such as a protective barrier, a lingering curse, or a divine blessing.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="types-of-enchantments">
                <Collapsable
                  titles="Types of Enchantments"
                  content={
                    <CollapsableContent
                      title="2. Types of Enchantments:"
                      items={[
                        '-Global Enchantments:',
                        '*These enchantments affect the entire game state or all players, like Dictate of Heliod which boosts the power and toughness of all your creatures.',
                        '-Auras:',
                        '*Auras are a subtype of enchantments that attach to other permanents, usually creatures. They provide benefits or impose disadvantages to the enchanted permanent, like Pacifism, which prevents a creature from attacking or blocking.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="continuous-effects-enchantments">
                <Collapsable
                  titles="Continuous Effects"
                  content={
                    <CollapsableContent
                      title="3. Continuous Effects:"
                      items={[
                        'Enchantments generally provide ongoing effects as long as they remain on the battlefield. This can include boosting the power of creatures, imposing restrictions on players, or altering how the game is played.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="strategic-value-enchantments">
                <Collapsable
                  titles="Strategic Value"
                  content={
                    <CollapsableContent
                      title="4. Strategic Value:"
                      items={[
                        "Enchantments can be powerful tools in a player's strategy, offering persistent advantages that can be difficult for opponents to remove. They can enhance creatures, hinder opponents, or create new win conditions.",
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="interaction-with-other-cards-enchantments">
                <Collapsable
                  titles="Interaction with Other Cards"
                  content={
                    <CollapsableContent
                      title="5. Interaction with Other Cards:"
                      items={[
                        'Enchantments can interact with various other cards and mechanics. For example, some creatures or spells may specifically target enchantments for destruction, while other cards might synergize with them, like Eidolon of Blossoms, which draws you a card whenever an enchantment enters the battlefield under your control.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="enchantress-effects">
                <Collapsable
                  titles="Enchantress Effects"
                  content={
                    <CollapsableContent
                      title="6. Enchantress Effects:"
                      items={[
                        `Certain cards and decks, known as "Enchantress" decks, are built around the synergy of playing multiple enchantments. Cards like Enchantress's Presence draw cards whenever an enchantment is played, creating powerful card advantage and synergy.`,
                        '_',
                      ]}
                    />
                  }
                />
              </div>
            </>
          }
        />
      </div>

      <div
        className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
        id="pAPAartifacts">
        <Collapsable
          titles="Artifacts"
          content={
            <>
              <CollapsableContent title="" items={[]} image="" />
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="artifacts-key-concepts-and-gameplay">
                <Collapsable
                  titles="Artifacts: Key Concepts and Gameplay"
                  content={
                    <CollapsableContent
                      title="Artifacts: Key Concepts and Gameplay"
                      items={[
                        'Artifacts are a type of permanent card in Magic: The Gathering that represents magical items, devices, or constructs.',
                        'Artifacts can provide various benefits, such as producing mana, enhancing creatures, or offering unique abilities that can be activated.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="overview-of-artifacts">
                <Collapsable
                  titles="Overview of Artifacts"
                  content={
                    <CollapsableContent
                      title="1. Overview of Artifacts"
                      items={[
                        'Definition: Artifacts are a type of permanent card in Magic: The Gathering that represents magical items, devices, or constructs.',
                        'Function: Artifacts provide various benefits, such as producing mana, enhancing creatures, or offering unique abilities that can be activated.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="types-of-artifacts">
                <Collapsable
                  titles="Types of Artifacts"
                  content={
                    <CollapsableContent
                      title="2. Types of Artifacts"
                      items={[
                        'Equipment: Equipment artifacts can be attached to creatures to give them bonuses or abilities. For example, Sword of Feast and Famine boosts a creature’s power and toughness and grants additional effects.',
                        'Mana Rocks: These artifacts produce mana, helping you cast spells more easily. Examples include Sol Ring and Mana Crypt.',
                        'Artifact Creatures: These are creatures that are also artifacts, combining the characteristics of both. Myr, Constructs, and Golems are common examples.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="continuous-effects">
                <Collapsable
                  titles="Continuous Effects"
                  content={
                    <CollapsableContent
                      title="3. Continuous Effects"
                      items={[
                        'Ongoing Benefits: Artifacts generally provide ongoing benefits as long as they remain on the battlefield. These effects can include mana production, creature enhancements, or other utility functions.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="strategic-value-artifacts">
                <Collapsable
                  titles="Strategic Value"
                  content={
                    <CollapsableContent
                      title="4. Strategic Value"
                      items={[
                        'Versatility: Artifacts are colorless, meaning they can be used in any deck regardless of color identity. This makes them versatile tools for various strategies.',
                        'Resilience: Artifacts often provide persistent advantages that can be difficult for opponents to remove, adding stability to your game plan.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="interaction-with-other-cards-artifacts">
                <Collapsable
                  titles="Interaction with Other Cards"
                  content={
                    <CollapsableContent
                      title="5. Interaction with Other Cards"
                      items={[
                        'Synergies: Artifacts can interact with various other cards and mechanics. Some creatures or spells may specifically target artifacts for destruction, while others synergize with them, like cards that get stronger for each artifact you control.',
                        'Tutors: Certain spells and abilities allow you to search your library for artifacts, making it easier to find key pieces of your strategy. Examples include Trinket Mage and Fabricate.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="artifact-deck-themes">
                <Collapsable
                  titles="Artifact Deck Themes"
                  content={
                    <CollapsableContent
                      title="6. Artifact Deck Themes"
                      items={[
                        'Affinity: Decks that utilize the affinity mechanic can cast artifacts at reduced costs, creating powerful, fast-paced strategies.',
                        'Combo: Many artifact decks are built around combos, using a combination of artifacts to create powerful or game-ending effects.',
                        "Control: Artifacts can be used in control decks to provide utility and card advantage, often through cards like Sensei's Divining Top and Umezawa’s Jitte.",
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="artifact-creatures-and-animation">
                <Collapsable
                  titles="Artifact Creatures and Animation"
                  content={
                    <CollapsableContent
                      title="7. Artifact Creatures and Animation"
                      items={[
                        'Animation Spells: Some spells and abilities can turn artifacts into creatures, allowing you to attack with them. Examples include Karn, the Great Creator and Ensoul Artifact.',
                        'Utility Creatures: Artifact creatures can serve multiple roles, from aggressive attackers like Lodestone Golem to defensive options like Platinum Angel.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
            </>
          }
        />
      </div>

      <div
        className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
        id="pAPAsorceries">
        <Collapsable
          titles="Sorcery"
          content={
            <>
              <CollapsableContent title="" items={[]} image="" />
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="sorceries-key-concepts-and-gameplay">
                <Collapsable
                  titles="Sorceries: Key Concepts and Gameplay"
                  content={
                    <CollapsableContent
                      title="Sorceries: Key Concepts and Gameplay"
                      items={[
                        'Sorceries are a type of spell card in Magic: The Gathering that represents one-time magical effects or actions.',
                        'Sorceries typically have powerful effects but can only be cast during your main phase and when the stack is empty.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="overview-of-sorceries">
                <Collapsable
                  titles="Overview of Sorceries"
                  content={
                    <CollapsableContent
                      title="1. Overview of Sorceries"
                      items={[
                        'Definition: Sorceries are a type of spell card in Magic: The Gathering that represents one-time magical effects or actions.',
                        'Function: Sorceries typically have powerful effects but can only be cast during your main phase and when the stack is empty.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="types-of-sorceries">
                <Collapsable
                  titles="Types of Sorceries"
                  content={
                    <CollapsableContent
                      title="2. Types of Sorceries"
                      items={[
                        'Utility Sorceries: These sorceries provide various effects, such as card draw, creature removal, or direct damage to opponents.',
                        'Mass Removal: Some sorceries can destroy or exile multiple permanents at once, providing board control or resetting the game state.',
                        'Win Conditions: Certain sorceries can serve as win conditions, instantly winning the game or putting you in a favorable position to win.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="casting-sorceries">
                <Collapsable
                  titles="Casting Sorceries"
                  content={
                    <CollapsableContent
                      title="3. Casting Sorceries"
                      items={[
                        'Main Phase: Sorceries can only be cast during your main phase, when the stack is empty.',
                        'Sorcery Speed: Sorceries can only be cast at sorcery speed, meaning you can’t cast them in response to other spells or abilities.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="strategic-value-sorceries">
                <Collapsable
                  titles="Strategic Value"
                  content={
                    <CollapsableContent
                      title="4. Strategic Value"
                      items={[
                        'Timing: Choosing the right time to cast sorceries can be crucial for maximizing their impact. Planning ahead and understanding the game state is key.',
                        'Synergy: Sorceries can be used in combination with other cards or strategies to create powerful synergies and game-winning plays.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="interaction-with-other-cards-sorceries">
                <Collapsable
                  titles="Interaction with Other Cards"
                  content={
                    <CollapsableContent
                      title="5. Interaction with Other Cards"
                      items={[
                        'Counterspells: Some spells and abilities can counter sorceries, preventing them from resolving and nullifying their effects.',
                        'Protection: Certain creatures or spells may grant protection from sorceries, making them unable to be targeted or affected by sorceries.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="deck-themes-sorceries">
                <Collapsable
                  titles="Deck Themes"
                  content={
                    <CollapsableContent
                      title="6. Deck Themes"
                      items={[
                        'Combo: Sorceries can be central to combo decks, providing key pieces of the combo or facilitating the setup for a game-winning sequence of plays.',
                        'Control: Sorceries can be used in control decks to provide removal, card advantage, or win conditions that help control the pace and outcome of the game.',
                        'Ramp: Some sorceries provide mana acceleration or card advantage, helping ramp decks accelerate their mana production and cast powerful spells ahead of schedule.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
            </>
          }
        />
      </div>

      <div
        className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
        id="pAPAinstants">
        <Collapsable
          titles="Instants"
          content={
            <>
              <CollapsableContent title="" items={[]} image="" />
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="instants-key-concepts-and-gameplay">
                <Collapsable
                  titles="Instants: Key Concepts and Gameplay"
                  content={
                    <CollapsableContent
                      title="Instants: Key Concepts and Gameplay"
                      items={[
                        'Instants are a type of spell card in Magic: The Gathering that represents immediate magical effects or actions.',
                        'Instants can be cast at any time, including during your opponent’s turn or in response to other spells or abilities.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="overview-of-instants">
                <Collapsable
                  titles="Overview of Instants"
                  content={
                    <CollapsableContent
                      title="1. Overview of Instants"
                      items={[
                        'Definition: Instants are a type of spell card in Magic: The Gathering that represents immediate magical effects or actions.',
                        'Function: Instants can be cast at any time, including during your opponent’s turn or in response to other spells or abilities.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="types-of-instants">
                <Collapsable
                  titles="Types of Instants"
                  content={
                    <CollapsableContent
                      title="2. Types of Instants"
                      items={[
                        'Removal: Instant spells that destroy creatures, counter spells, or remove other permanents from the battlefield.',
                        'Combat Tricks: Instants that enhance creatures, change combat outcomes, or provide unexpected interactions during combat phases.',
                        'Card Draw: Instants that allow you to draw cards, refill your hand, or gain card advantage at instant speed.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="casting-instants">
                <Collapsable
                  titles="Casting Instants"
                  content={
                    <CollapsableContent
                      title="3. Casting Instants"
                      items={[
                        'Instant Speed: Instants can be cast at any time, including during your opponent’s turn or in response to other spells or abilities.',
                        'Stack Interactions: Instants are placed on the stack when cast and can be responded to by other spells or abilities before they resolve.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="strategic-value-instants">
                <Collapsable
                  titles="Strategic Value"
                  content={
                    <CollapsableContent
                      title="4. Strategic Value"
                      items={[
                        'Flexibility: Instants provide flexibility in gameplay, allowing you to react to your opponent’s actions or surprise them with unexpected plays.',
                        'Bluffing: Holding up mana for instants can create uncertainty for your opponent, forcing them to play cautiously or walk into potential traps.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="interaction-with-other-cards-instants">
                <Collapsable
                  titles="Interaction with Other Cards"
                  content={
                    <CollapsableContent
                      title="5. Interaction with Other Cards"
                      items={[
                        'Counterspells: Instants can be used to counter other spells, preventing them from resolving and nullifying their effects.',
                        'Combo Pieces: Instants can be key components of combo decks, providing the final piece needed to execute a game-winning sequence of plays.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="deck-themes-instants">
                <Collapsable
                  titles="Deck Themes"
                  content={
                    <CollapsableContent
                      title="6. Deck Themes"
                      items={[
                        'Control: Instants are essential in control decks, providing removal, counterspells, and other reactive tools to control the game state and thwart opponents’ strategies.',
                        'Tempo: In tempo decks, instants can disrupt opponents’ plays and maintain pressure on the battlefield while advancing your own game plan.',
                        'Combo: In combo decks, instants can enable key combos, protect combo pieces, or disrupt opponents’ attempts to interfere with your win conditions.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
            </>
          }
        />
      </div>

      <div
        className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
        id="pAPAplaneswalkers">
        <Collapsable
          titles="Planeswalkers"
          content={
            <>
              <CollapsableContent title="" items={[]} image="" />
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="planeswalkers-key-concepts-and-gameplay">
                <Collapsable
                  titles="Planeswalkers: Key Concepts and Gameplay"
                  content={
                    <CollapsableContent
                      title="Planeswalkers: Key Concepts and Gameplay"
                      items={[
                        'Planeswalkers are a type of card in Magic: The Gathering that represent powerful characters with unique abilities.',
                        'Planeswalkers can activate one of their abilities each turn, adding strategic depth and versatility to your gameplay.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="overview-of-planeswalkers">
                <Collapsable
                  titles="Overview of Planeswalkers"
                  content={
                    <CollapsableContent
                      title="1. Overview of Planeswalkers"
                      items={[
                        'Definition: Planeswalkers are a type of card in Magic: The Gathering that represent powerful characters with unique abilities.',
                        'Function: Planeswalkers can activate one of their abilities each turn, adding strategic depth and versatility to your gameplay.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="types-of-planeswalker-abilities">
                <Collapsable
                  titles="Types of Planeswalker Abilities"
                  content={
                    <CollapsableContent
                      title="2. Types of Planeswalker Abilities"
                      items={[
                        'Loyalty Abilities: Each planeswalker has multiple abilities that affect the game in different ways, and these abilities cost or add loyalty counters.',
                        'Ultimate Abilities: The most powerful abilities, often game-changing, which usually require building up a significant number of loyalty counters.',
                        'Passive Abilities: Some planeswalkers have static or triggered abilities that provide continuous or situational effects.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="activating-planeswalker-abilities">
                <Collapsable
                  titles="Activating Planeswalker Abilities"
                  content={
                    <CollapsableContent
                      title="3. Activating Planeswalker Abilities"
                      items={[
                        'Once per Turn: You can activate one loyalty ability of each planeswalker you control during your turn, either adding or removing loyalty counters.',
                        'Strategic Use: Timing and choosing which ability to use can significantly impact the game, requiring strategic planning and foresight.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="strategic-value">
                <Collapsable
                  titles="Strategic Value"
                  content={
                    <CollapsableContent
                      title="4. Strategic Value"
                      items={[
                        'Versatility: Planeswalkers provide multiple options and can adapt to different game situations, making them versatile tools in your deck.',
                        'Threat Generation: Planeswalkers often become immediate targets for opponents due to their powerful abilities, drawing attention away from other threats.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="interaction-with-other-cards">
                <Collapsable
                  titles="Interaction with Other Cards"
                  content={
                    <CollapsableContent
                      title="5. Interaction with Other Cards"
                      items={[
                        'Protection: Creatures and spells that protect your planeswalkers can ensure they remain on the battlefield longer to maximize their impact.',
                        'Synergies: Planeswalkers often synergize with specific cards and strategies, enhancing their overall effectiveness in your deck.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
              <div
                className="p-4 text-white rounded-lg mt-4 bg-zinc-700"
                id="deck-themes">
                <Collapsable
                  titles="Deck Themes"
                  content={
                    <CollapsableContent
                      title="6. Deck Themes"
                      items={[
                        'Superfriends: Decks built around multiple planeswalkers, leveraging their combined abilities for overwhelming advantage.',
                        'Control: Planeswalkers in control decks provide removal, card advantage, and win conditions, helping to control the game state.',
                        'Midrange: In midrange decks, planeswalkers offer powerful, incremental advantages that can turn the tide of the game.',
                        '_',
                      ]}
                    />
                  }
                />
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default FAQ_Card_rules;
