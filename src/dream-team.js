module.exports = function createDreamTeam(members) {
 let team = [];
 if (!Array.isArray(members)) {
   return false;
 } else {
   for (people of members) {
     if (typeof people === "string"){
       arrTeam  = people.trim().split('');
       team.push(arrTeam[0].toUpperCase());
     }
   }
   return team.sort().join('');
 }
};