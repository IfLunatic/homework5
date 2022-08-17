function capsLock(str) {
    let capsString = str.split(` `) ;
    let newString = `` ;

    for (var j = 0; j < capsString.length ; j++ ) {
        let capsWord = Array.from(capsString[j]) ;

        if (capsString[j] === capsString[j].toUpperCase()) {
            newString = newString + capsString[j].toLowerCase() + ` `;

        } else if (capsWord[0].toString() === capsWord[0].toString().toLowerCase() && capsWord.slice(1, capsWord.length).toString() === capsWord.slice(1, capsWord.length).toString().toUpperCase()) {
            for (var i = 0; i < capsWord.length; i++ ) {

                if(capsWord[i] === capsWord[i].toUpperCase()) {
                    capsWord[i] = capsWord[i].toLowerCase() ;
                    newString = newString + capsWord[i] ;  

                } else {
                    capsWord[i] = capsWord[i].toUpperCase() ;
                    newString = newString + capsWord[i] ; 
                }
            }

            newString = newString + ` `;

        } else {
            newString = newString + capsString[j] + ` `;
        }
    }
    
    return console.log(newString)
}

capsLock("FuNkY iS nOt CaPs!");