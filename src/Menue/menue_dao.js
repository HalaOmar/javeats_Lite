const models = require('../../models/index')
const Branch = models.branches

exports.createBranch = (branch = { }) =>{

    return Branch.create(branch)
}

exports.deleteBranch = (  branch_id ) =>{
    
}

exports.updateBranchInfo = (branch_id ) =>{
    
}
exports.getBranchOfRestauarant = ( branch_id ) =>{

}

exports.getAllBranchesOfRestaurant = ( rest_id) => {

}