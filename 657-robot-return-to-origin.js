/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let len = moves.length;

    if (len === 0)
        return true;

    let x = 0;
    let y = 0;

    for (let i = 0; i < len; i++) {
        switch (moves[i]) {
            case 'U':
                y += 1;
                break;
            case 'D':
                y -= 1;
                break;
            case 'R':
                x += 1;
                break;
            case 'L':
                x -= 1;
                break;
            default:
                break;
        }

    }

    return x === 0 && y === 0;

};