import utils from '../../services/utils.js'

export default class VideoNote{
    constructor(info,type){
        this.id = utils.getRandomID();
        this.type = type;
        this.isPinned = false;
        this.info = {url:info,title:'',txt:''};
        this.style={backgroundColor: "note-defualt-color"}
    }
}
