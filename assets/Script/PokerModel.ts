export default class Poker {
  public point: number
  public suit: Esuit

  constructor(point: number, suit: Esuit) {
      this.point = point
      this.suit = suit
  }
}