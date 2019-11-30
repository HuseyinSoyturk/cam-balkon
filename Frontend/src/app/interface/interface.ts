export interface Hole {
  x: number;
  y: number;
  diameter: number;
}

export interface Glass {
  width: number;
  height: number;
  haveHole: boolean;
  hole: Hole;
}

export interface Face {
  width: number;
  height: number;
  numberOfGlasses: number;
  glasses: Glass[];
}

export interface Draw {
  subDraws: Face[]
}

export interface DrawListItem {
  id: number;
  customer: string;
  faceNumber: number;
  operationDate: Date;
}
