import GameCtrl from "./GameCtrl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Prefab)
    UIPoker: cc.Prefab = null;

    @property(cc.Node)
    pokerContainer: cc.Node = null;


    private gameCtrl: GameCtrl = null

    start () {
        // init logichis
        this.label.string = '游戏场景';
        this.gameCtrl = new GameCtrl()
        this.gameCtrl.init()
        this.gameCtrl.start()
    }
}
