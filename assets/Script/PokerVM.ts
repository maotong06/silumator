// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import PokerModel from './PokerModel';
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    point: cc.Label = null;
    @property(cc.Sprite)
    smallSuitSprite: cc.Sprite = null;
    @property(cc.Sprite)
    bigSuitSprite: cc.Sprite = null;

    @property([cc.SpriteFrame])
    smallSuitFrameList: cc.SpriteFrame[] = [];

    @property([cc.SpriteFrame])
    bigSuitFrameList: cc.SpriteFrame[] = [];

    @property([cc.SpriteFrame])
    bigTexSuitFrameList: cc.SpriteFrame[] = [];

    private texLagelList: string[] = ['J', 'Q', 'K']

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    init(pokerModel: PokerModel) {
        this.point.string = `${pokerModel.point}`
        this.smallSuitSprite.spriteFrame = this.smallSuitFrameList[pokerModel.suit]
        if (pokerModel.point <= 10) {
            this.bigSuitSprite.spriteFrame = this.bigSuitFrameList[pokerModel.suit]
            this.point.string = `${pokerModel.point}`
        } else {
            this.bigSuitSprite.spriteFrame = this.bigTexSuitFrameList[pokerModel.point - 11]
            this.point.string = this.texLagelList[pokerModel.point - 11]
        }
    }

    // update (dt) {}
}
