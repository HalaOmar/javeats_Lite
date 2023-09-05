
module.exports = class Cart{

    owner
    restaurantsLines
    
    constructor( cartId ){
        this.initialize(cartId)       
    }

    initialize(cartId){
        let { restaurantId , userId , branchId } = cartId
        this.restaurantsLines = {}
        this.restaurantsLines[`${restaurantId}`]={}
        this.restaurantsLines[`${restaurantId}`][`${branchId}`] = []
        this.owner = userId
        // this.restaurantsLines[`${restaurantId}`][`${branchId}`][`${userId}`] = []
    }

    initializeRestaurantLines({ restaurantId , userId , branchId } =cartId ) {
        console.log('this.restaurantsLines[`${restaurantId}`] :>> ', this.restaurantsLines);

        this.restaurantsLines[`${restaurantId}`]={}
        this.initializeBranch({ restaurantId , userId , branchId })

    }
    
    initializeBranch({restaurantId , branchId ,userId} =cartId){
        this.restaurantsLines[`${restaurantId}`][`${branchId}`] = []
        // this.restaurantsLines[`${restaurantId}`][`${branchId}`][`${userId}`] = []

    }

    getCartOwner(){
        return this.owner
    }

    getBranchesHaveOrdersFromCart(restId){
        return Object.keys(this.restaurantsLines[`${restId}`]) 
    }

    addItem(itemId , quentity){
        this.Items.push({itemId , quentity})
    }

    deleteItem(itemId){
        this.Items.filter(items => items.itemId != itemId)
    }

    getItemsOfRestaurantLine(restaurantId){
        let Items = []
        let total = 0
        const restaurantLine = this.restaurantsLines[`${restaurantId}`]
        const branches = Object.values(restaurantLine)
        for (const BranchLine of branches) {
            for (const item of BranchLine) {
                Items.push(item) 
                total+=(parseFloat(item.price) * parseInt(item.quantity))  
     
            }           
        }
        return { "items_line":Items,
                 total}
    }
}