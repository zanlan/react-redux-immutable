



// commonJS 规范  ES6 module
// export default
// export const  




import url from "url";

export function getQuery(search){
    return url.parse(search,true).query;
}



export {axios} from "./axios";