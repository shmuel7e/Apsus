import utils from '../../services/utils.js'

export default class TxtNote{
    constructor(txt,type){
        this.id = utils.getRandomID();
        this.type = type;
        this.isPinned = false;
        this.info = {title:txt,txt:''};
        this.style={backgroundColor: "note-defualt-color"}
    }
}
