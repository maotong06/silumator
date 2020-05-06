const {ccclass, property} = cc._decorator;

@ccclass
export default class SplashScene extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    onLoad () {
        // init logic
        this.label.string = '加载场景';
        this.scheduleOnce(() => {
            cc.director.loadScene('StartScene', () => {
                console.log('进入游戏')
            })
        }, 0)
    }
}
