// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Button)
    startBtn: cc.Button = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.startBtn.node.on(cc.Node.EventType.MOUSE_DOWN, this.onPlayBtnClick.bind(this))
    }

    // update (dt) {}

    onPlayBtnClick(btn) {
        console.log('this', this.startBtn, btn)
        cc.director.loadScene('GameScene')
    }
}
