import { createTable } from "./Ecmascript" 

let searchById = (id) =>{
    let tab =  createTable()
    return tab.filter(item => item.ID == id)
}
export default searchById