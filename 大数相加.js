// https://lucifer.ren/fe-interview/#/./topics/design/already-read
function addTwoNum (str1, str2) {
    var carry = 0;
    var l1 = str1.length;
    var l2 = str2.length;
    var arr = [];
    var max = Math.max(l1, l2);
    var i = l1 - 1, j = l2 - 1;
    for (var n = max - 1; n >= 0; n--,i--,j-- ) {
        var m = (+str1[i] || 0) + (+str2[j] || 0) + carry;
        if (m >= 10) {
            carry = 1;
            m = m - 10;
        } else {
            carry = 0;
        }
        arr.push(m);
    }
    if (carry > 0) arr.push(carry);
    return arr.reverse().join('');
}

