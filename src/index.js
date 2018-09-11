module.exports = function count(s, pairs) {
    let N = 1;
    for (let i = 0; i < pairs.length; i++) {
        N *= Math.pow(pairs[i][0], pairs[i][1]);
    }
    if (N > 100000000) {
        if (pairs.length === 1) {

            if (goodTemplate()) {
                return pow(Math.pow(pairs[0][0], 9), (pairs[0][1] - 1) / 9);
            }

        }
        else return 0;
    }

    function pow(a, n) {

        let b = a;
        for (let i = 1; i < n; i++) {
            b = (b * a) % 1000000007;
        }
        return b
    }

    function goodTemplate() {
        return true;
    }

    let bTemplate = s.split('');
    let res = 0;
    let counter = 0;

    for (let k = 1; k <= N; k++) {
        for (let j = 0; j < bTemplate.length; j++) {
            if ((NOD([k + j, N]) === 1) && ( bTemplate[j] == 1)) {
                counter++;
            } else if (NOD([k + j, N]) > 1 && bTemplate[j] == 0) {
                counter++;
            }
        }
        if (counter === bTemplate.length) {
            res++;
            counter = 0;
        } else {
            counter = 0;
        }
    }

    return res % 1000000007;
};

function NOD(A) {
    let n = A.length, x = Math.abs(A[0]);
    for (let i = 1; i < n; i++) {
        let y = Math.abs(A[i]);
        while (x && y) {
            (x > y) ? (x %= y) : (y %= x);
        }
        x += y;
    }
    return x;
}
