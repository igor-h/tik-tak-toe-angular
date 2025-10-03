export type CellValue = 'X' | 'O' | null;
export type Winner = 'X' | 'O' | 'draw' | null;

export interface Scores {
  player1: number;
  player2: number;
}