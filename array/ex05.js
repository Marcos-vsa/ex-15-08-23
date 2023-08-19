
const numbers = [1, 2, 3, 4, 2, 2, 3, 4, 4, 4, 5];

function findMostFrequent(arr) {
    let frequency = {};
    let maxFrequency = 0;
    let mostFrequentValue = null;

    for (let num of arr) {
        if (frequency[num]) {
        frequency[num]++;
        }   else {
        frequency[num] = 1;
        }

        if (frequency[num] > maxFrequency) {
        maxFrequency = frequency[num];
        mostFrequentValue = num;
        }
    }

    return mostFrequentValue;
}
const mostFrequent = findMostFrequent(numbers);
console.log(`O valor mais frequente é: ${mostFrequent}`);
