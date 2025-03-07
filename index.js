function anagramCheck(string1, string2) {

    const str1 = string1.toLowerCase();
    const str2 = string2.toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }

    const obj1 = {};
    const obj2 = {};

    for (let i=0; i < str1.length; i++) {
        if(obj1[str1[i]]){
            obj1[str1[i]]++;
        } else {
            obj1[str1[i]] = 1;
        }
    }
    for (let n=0; n < str2.length; n++) {
        if(obj2[str2[n]]){
            obj2[str2[n]]++;
        } else {
            obj2[str2[n]] = 1;
        }
    }
    for (let char in obj1) {
        if (obj1[char] !== obj2[char]) {
            return false;
        }
    }
    return true;
}
console.log(anagramCheck("brake", "BAKER"));
