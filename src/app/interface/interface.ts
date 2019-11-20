export interface Hole {
  diameter: number;
}

export interface Glass {
  width: number;
  height: number;
  haveHole: boolean;
  holeInfo: Hole;
}

export interface Draw {
  width: number;
  height: number;
  numOfGlass: number;
}
