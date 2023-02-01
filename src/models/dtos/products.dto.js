class ProductDTO {
    constructor(productoItem, id){
        Object.assign(this, productoItem);
        this.createdAt = productoItem.createdAt || new Date().toISOString(); 
        this.updatedAt = new Date().toISOString();
        if(_id) {
            this._id = _id;
        }
    }
}
module.exports = ProductDTO;