function countVowels (string) {
    let count = 0;
    let vowels = "aeiouAEIOU";
for (let char of string) {
    if (vowels.includes(char)) {
        count ++;
    }
}
return count;
}
console.log(countVowels("Hellobrudahudsjkascjhgd"));