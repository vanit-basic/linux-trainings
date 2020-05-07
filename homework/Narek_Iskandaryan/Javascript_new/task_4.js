//task_3 before
/*
let text = 'a cdc          cdc aa        b cdc d    aa  ii f aa cdc   cdc g k aa   a ';
let new_text = text.split(' ');
let words = [];
for(i=0; i<new_text.length; i++){
    if(new_text[i]!==''){
       words.push(new_text[i]);
    }
};
let result=0;
for(i=0; i<words.length; i++){
    let count=0;
    for(j=0; j<words.length; j++){
        if(words[i] == words[j]){
            count++
            if(count > result){
                result = count;
                word = words[i];
            }
        }
    }
}
console.log(words)
console.log(new_text)
console.log(result+word)
*/
//task_4 after
function countword(text){
    let new_text = text.split(' ');
    let words = [];
    for(i=0; i<new_text.length; i++){
        if(new_text[i]!==''){
           words.push(new_text[i]);
        }
    };
    let result=0;
    for(i=0; i<words.length; i++){
        let count=0;
        for(j=0; j<words.length; j++){
            if(words[i] == words[j]){
                count++
                if(count > result){
                    result = count;
                    word = words[i];
                }
            }
        }
    }
    return word
};

let some_text = "JavaScript est un langage  programmation  scripts principalement employé dans les pages web interactives mais ausspour outre les serveurs2 avec l'utilisation (par exemple) de Node.js3. C'est un langage orienté objet à prototype, c'est-à-dire que les outre outre bases du langage et outre ses principales interfaces sont fournies par des objets qui ne sont pas des instances classes, mais qui sont chacun équipés  constructeurs permettant  créer leurs propriétés, et notamment une propriété de prototypage qui permet de créer des objets héritiers personnalisés. En outre, les fonctions sont des objets de première classe. Le langage supporte le paradigme objet, impératif et fonctionnel.outre JavaScript est le langage possédant le plus large écosystème grâce à son gestionnaire de dépendances npm, avec environ 500 000 outre paquets en août 20174."
let res = countword(some_text);
console.log(res)