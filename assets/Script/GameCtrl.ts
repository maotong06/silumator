import Poker from "./Poker";

export default class GameCtrl {
    private pokers: Poker[] = []
    private pokerContainer: cc.Node = null
    private UIPoker: cc.Prefab = null

    public init(pokerContainer: cc.Node, UIPoker: cc.Prefab) {
        this.pokerContainer = pokerContainer
        this.UIPoker = UIPoker
    }

    public start() {
        for (let index = 1; index <= 13; index++) {
            for (let j = 0; j < 4; j++) {
                this.pokers.push(new Poker(index, j))
            }
            
        }
        console.log('Game start', this.pokers)
    }

    createrUIPoker(poker: Poker) {

    }
}