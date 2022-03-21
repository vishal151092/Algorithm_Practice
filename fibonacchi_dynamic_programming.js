
// recursive solution
/**
 * 
 * this recursive solution is not good as it has time complexity
 * of O(2^N). It is because few fibonacchi calcutations are repreated
 * and tree structure grows really fast with repretition
 */
const fibonacchi = (n) =>{
    if(n <= 2) return 1;
    return fibonacchi(n-1) + fibonacchi(n-2);
}

console.log(fibonacchi(6));


// DYNAMIC PROGRAMMING . (MEMOIZATION)
/**
 * using memoisation we can store already calculated values in memory 
 * and reuse it whenever encountered again. This is based on top-down approach
 * This reduces time compexity to O(N)
 */

const fibo_memo = (n, memo=[]) => {
    if(memo[n] != undefined ) return memo[n];
    if(n <=2) return 1;
    var res = fibo_memo(n-1, memo) + fibo_memo(n-2, memo);
    memo[n] = res;
    return res;
}

console.log(fibo_memo(10));


// // DYNAMIC PROGRAMMING . (TABULATION)

const fibo_table = (n) =>{
    if(n <= 2) return 1;
    var fibNums = [undefined, 1, 1];
    for(let i= 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}
console.log(fibo_table(10));
