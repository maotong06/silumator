export default class Poker {
  private point: number
  private suit: Esuit

  constructor(point: number, suit: Esuit) {
      this.point = point
      this.suit = suit
  }
}