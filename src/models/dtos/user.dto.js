class UserDTO {
    constructor(userItem, id){
        Object.assign(this, userItem);
        this.createdAt = userItem.createdAt || new Date().toISOString(); 
        this.updatedAt = new Date().toISOString();
        this.user = null;
        if(_id) {
            this._id = _id;
        }
    }
}
module.exports = UserDTO;
