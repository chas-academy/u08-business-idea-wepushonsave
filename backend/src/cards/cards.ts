import { Router } from "express";

const cardRouter = Router();

cardRouter.get("/", (req, res) => {
  res.json({
    object: "card",
    id: "55e6c31b-f9e9-4e42-a875-985d99300d9d",
    oracle_id: "4e5e0b22-ee5a-4c19-be95-2f9bd50641bc",
    multiverse_ids: [658282],
    arena_id: 91481,
    tcgplayer_id: 544320,
    name: "Olivia, Opulent Outlaw",
    lang: "en",
    released_at: "2024-04-19",
    uri: "https://api.scryfall.com/cards/55e6c31b-f9e9-4e42-a875-985d99300d9d",
    scryfall_uri:
      "https://scryfall.com/card/otc/2/olivia-opulent-outlaw?utm_source=api",
    layout: "normal",
    highres_image: true,
    image_status: "highres_scan",
    image_uris: {
      small:
        "https://cards.scryfall.io/small/front/5/5/55e6c31b-f9e9-4e42-a875-985d99300d9d.jpg?1714110406",
      normal:
        "https://cards.scryfall.io/normal/front/5/5/55e6c31b-f9e9-4e42-a875-985d99300d9d.jpg?1714110406",
      large:
        "https://cards.scryfall.io/large/front/5/5/55e6c31b-f9e9-4e42-a875-985d99300d9d.jpg?1714110406",
      png: "https://cards.scryfall.io/png/front/5/5/55e6c31b-f9e9-4e42-a875-985d99300d9d.png?1714110406",
      art_crop:
        "https://cards.scryfall.io/art_crop/front/5/5/55e6c31b-f9e9-4e42-a875-985d99300d9d.jpg?1714110406",
      border_crop:
        "https://cards.scryfall.io/border_crop/front/5/5/55e6c31b-f9e9-4e42-a875-985d99300d9d.jpg?1714110406",
    },
    mana_cost: "{1}{R}{W}{B}",
    cmc: 4.0,
    type_line: "Legendary Creature — Vampire Assassin",
    oracle_text:
      "Flying, lifelink\nWhenever one or more outlaws you control deal combat damage to a player, create a Treasure token. (Assassins, Mercenaries, Pirates, Rogues, and Warlocks are outlaws.)\n{3}, Sacrifice two Treasures: Put two +1/+1 counters on each creature you control. Activate only as a sorcery.",
    power: "3",
    toughness: "3",
    colors: ["B", "R", "W"],
    color_identity: ["B", "R", "W"],
    keywords: ["Flying", "Lifelink", "Treasure"],
    all_parts: [
      {
        object: "related_card",
        id: "7ec6f053-96f7-4e57-b2eb-4e7699a40a4f",
        component: "token",
        name: "Treasure",
        type_line: "Token Artifact — Treasure",
        uri: "https://api.scryfall.com/cards/7ec6f053-96f7-4e57-b2eb-4e7699a40a4f",
      },
      {
        object: "related_card",
        id: "55e6c31b-f9e9-4e42-a875-985d99300d9d",
        component: "combo_piece",
        name: "Olivia, Opulent Outlaw",
        type_line: "Legendary Creature — Vampire Assassin",
        uri: "https://api.scryfall.com/cards/55e6c31b-f9e9-4e42-a875-985d99300d9d",
      },
    ],
    legalities: {
      standard: "not_legal",
      future: "not_legal",
      historic: "legal",
      timeless: "legal",
      gladiator: "legal",
      pioneer: "not_legal",
      explorer: "not_legal",
      modern: "not_legal",
      legacy: "legal",
      pauper: "not_legal",
      vintage: "legal",
      penny: "not_legal",
      commander: "legal",
      oathbreaker: "legal",
      standardbrawl: "not_legal",
      brawl: "legal",
      alchemy: "not_legal",
      paupercommander: "not_legal",
      duel: "legal",
      oldschool: "not_legal",
      premodern: "not_legal",
      predh: "not_legal",
    },
    games: ["paper", "arena"],
    reserved: false,
    foil: true,
    nonfoil: true,
    finishes: ["nonfoil", "foil"],
    oversized: false,
    promo: false,
    reprint: false,
    variation: false,
    set_id: "d6548798-0c10-4509-b71a-2d8b1d14665a",
    set: "otc",
    set_name: "Outlaws of Thunder Junction Commander",
    set_type: "commander",
    set_uri:
      "https://api.scryfall.com/sets/d6548798-0c10-4509-b71a-2d8b1d14665a",
    set_search_uri:
      "https://api.scryfall.com/cards/search?order=set&q=e%3Aotc&unique=prints",
    scryfall_set_uri: "https://scryfall.com/sets/otc?utm_source=api",
    rulings_uri:
      "https://api.scryfall.com/cards/55e6c31b-f9e9-4e42-a875-985d99300d9d/rulings",
    prints_search_uri:
      "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A4e5e0b22-ee5a-4c19-be95-2f9bd50641bc&unique=prints",
    collector_number: "2",
    digital: false,
    rarity: "mythic",
    card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    artist: "Anna Steinbauer",
    artist_ids: ["3516496c-c279-4b56-8239-720683d03ae0"],
    illustration_id: "c8f54151-fc2a-4253-bca9-64dacf22b6fa",
    border_color: "borderless",
    frame: "2015",
    frame_effects: ["legendary"],
    security_stamp: "oval",
    full_art: false,
    textless: false,
    booster: false,
    story_spotlight: false,
    edhrec_rank: 11688,
    prices: {
      usd: "0.59",
      usd_foil: "0.64",
      usd_etched: null,
      eur: null,
      eur_foil: null,
      tix: null,
    },
    related_uris: {
      gatherer:
        "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=658282&printed=false",
      tcgplayer_infinite_articles:
        "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DOlivia%252C%2BOpulent%2BOutlaw",
      tcgplayer_infinite_decks:
        "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DOlivia%252C%2BOpulent%2BOutlaw",
      edhrec: "https://edhrec.com/route/?cc=Olivia%2C+Opulent+Outlaw",
    },
    purchase_uris: {
      tcgplayer:
        "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F544320%3Fpage%3D1",
      cardmarket:
        "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Olivia%2C+Opulent+Outlaw&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      cardhoarder:
        "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Olivia%2C+Opulent+Outlaw&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
    },
  });
});

export default cardRouter;
