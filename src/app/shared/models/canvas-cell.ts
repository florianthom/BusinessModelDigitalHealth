import { BulletPoint } from './bullet-point';

export interface CanvasCell {
    name: string;
    // bulletPointsSystem: BulletPoint[];
    bulletPointsUser: BulletPoint[];
    weights: number[];
  }