function isPalindrome(string) {

    string = string.toLowerCase();
    string = string.replace(/[^a-z0-9]/g, '');
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));