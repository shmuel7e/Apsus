import utils from '../../services/utils.js'

export default class TodoNote{
    constructor(info,type){
        this.id = utils.getRandomID();
        this.type = type;
        this.isPinned = false;
        this.info = {title:info,todos:[{ id: utils.getRandomID(), txt: "", doneAt: Date.now(), isDone: false }]};
        this.style={backgroundColor: "note-defualt-color"}
    }
}
