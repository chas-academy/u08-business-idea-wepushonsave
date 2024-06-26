export interface ICardInfo {
    name: string;
    mana_cost: string[];
    cmc: number;
    power: string;
    toughness: string;
    colors: string[]; 
    lang: string;
    released_at: string;
    keywords: string[];
    type_line: string;
    oracle_text: string;
    finishes: string[]; 
    collector_number: string;
    rarity: string;
    artist: string;
    frame: string;
    full_art: boolean;
    promo: boolean;
    booster: boolean;
    reserved: boolean;
    reprint: boolean;
    variation: boolean;
    set: string;
    set_name: string;
    set_type: string;
    edhrec_rank: number;
    tcgplayer_id: number;
    cardmarket_id: number;
  
}

