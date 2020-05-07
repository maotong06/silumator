import PokerModel from "./PokerModel";
import PokerVM from './PokerVM';

export default class GameCtrl {
    private pokers: PokerModel[] = []
    private pokerContainer: cc.Node = null
    private pokerPrefab: cc.Prefab = null

    public init(pokerContainer: cc.Node, pokerPrefab: cc.Prefab) {
        this.pokerContainer = pokerContainer
        this.pokerPrefab = pokerPrefab
    }

    public start() {
        for (let index = 1; index <= 13; index++) {
            for (let j = 0; j < 4; j++) {
                this.pokers.push(new PokerModel(index, j))
            }
        }
        this.pokers.forEach((pokerModel: PokerModel) => {
            let pokerUIVM = this.createrUIPoker(pokerModel)
            this.pokerContainer.addChild(pokerUIVM.node)
        })
        console.log('Game start', this.pokers)
    }

    createrUIPoker(pokerModel: PokerModel) {
        let pokerUINode = cc.instantiate(this.pokerPrefab)
        let pokerUIVM: PokerVM = pokerUINode.getComponent(PokerVM)
        pokerUIVM.init(pokerModel)
        pokerUIVM.node.setPosition(pokerModel.point * (900 / 15) - 450, pokerModel.suit * (600 / 5) - 300)
        return pokerUIVM
    }
}