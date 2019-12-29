import utils from '../../services/utils.js'

export default class ImgNote{
    constructor(info,type){
        this.id = utils.getRandomID();
        this.type = type;
        this.isPinned = false;
        this.info = {url:info,title:'',txt:''};
        this.style={backgroundColor: "note-defualt-color"}
    }
}