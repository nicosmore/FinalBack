class CartDTO {
    constructor(){
        Object.assign(this, cartItem);
        this.createdAt = cartItem.createdAt || new Date().toISOString(); 
        this.updatedAt = new Date().toISOString();
        this.user = null;
        if(_id) {
            this._id = _id;
        }
    }
}
module.exports = CartDTO;