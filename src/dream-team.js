import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  if(!(Array.isArray(members)))return false;
    if(members.length==0)return false;
    let teamName = '';



for(let i=0;i<members.length;i++){
    if(!members[i]) continue;
    for(let j=0;j<members[i].length;j++){
        if(!members[i][j]) continue;
        if((members[i][j]!=' ')&&typeof(members[i][j]==String)){
                    if(members[i][j].length>1){
                        continue;
                    } 
        teamName+=members[i][j];
        break;
        }
    }
}
    return Array.from(teamName.toUpperCase()).sort().join('');
}
