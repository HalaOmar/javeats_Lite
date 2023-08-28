const branch_dao = require('./branch_dao')

module.exports.addBranchOfRestaurant = (  branch = { }) =>{

    return branch_dao.createBranch(branch)

}

module.exports.deleteBranch = (  branch_id ) =>{
    
}

module.exports.updateBranchInfo = (branch_id ) =>{
    
}
module.exports.getBranchOfRestauarant = ( branch_id ) =>{

}

module.exports.getAllBranchesOfRestaurant = ( rest_id) => {

}