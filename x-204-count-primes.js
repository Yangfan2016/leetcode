/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {

    if (n <= 2)
        return 0;

    let nums = new Array(n).fill(0);
    nums = nums.map((num,i)=>{
        return num + i;
    }
    );

    // 过滤掉 偶数和 1
    nums = nums.filter(num=>{
        return num > 1 && num % 2 !== 0;
    }
    );
    // 把 2 补上
    nums.unshift(2);

    let list = nums.slice(0);

    if (n > 10) {
        // 去掉 3,5,7 的数
        nums = nums.map(num=>{
            [3, 5, 7].filter(l=>num > l).forEach(m=>{
                if (num % m === 0) {
                    num = -1;
                }
            }
            );
            return num;
        }
        );
    }

    // n*m
    nums = nums.map(num=>{
        list.filter(l=>num > l).forEach(m=>{
            if (num % m === 0) {
                num = -1;
            }
        }
        );
        return num;
    }
    );
    // 2 3 5 7 -1

    let res = nums.filter(num=>num > 0);
    return res.length;

};

