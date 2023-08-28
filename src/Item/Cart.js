
module.exports = class Cart{

    Items = []
    
    constructor( cartId ){
        this.initialize(cartId)       
    }

    initialize(cartId){
        let { restaurantId , userId , branchId } = cartId
        this.restaurantsLines = {}
        this.restaurantsLines[`${restaurantId}`]={}
        this.restaurantsLines[`${restaurantId}`][`${branchId}`] ={}
        this.restaurantsLines[`${restaurantId}`][`${branchId}`][`${userId}`] = []
    }

    initializeRestaurantLines({ restaurantId , userId , branchId } =cartId ) {
        console.log('this.restaurantsLines[`${restaurantId}`] :>> ', this.restaurantsLines);

        this.restaurantsLines[`${restaurantId}`]={}
        this.initializeBranch({ restaurantId , userId , branchId })

    }
    
    initializeBranch({restaurantId , branchId ,userId} =cartId){
        this.restaurantsLines[`${restaurantId}`][`${branchId}`] ={}
        this.restaurantsLines[`${restaurantId}`][`${branchId}`][`${userId}`] = []

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
        const restLine = Object.entries(restaurantLine)
        for (const [ branchId , BranchLine] of restLine) {
            let itemsOfBranchLine = Object.values(BranchLine)
            
            for (const item of itemsOfBranchLine[0]) {
                Items.push(item) 
                total+=parseInt(item.item_price)  
     
            }           
        }
        return {Items, total}
    }
}