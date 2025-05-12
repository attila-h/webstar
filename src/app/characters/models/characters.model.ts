export interface CharacterData {
  characters: Character[];
}

export interface Character {
  id: string;
  name: string;
  side: 'DARK' | 'LIGHT';
  attributes: {
    power: string;
    midichlorian: number;
  };
  createdTimestamp: number;
  description: string;
}