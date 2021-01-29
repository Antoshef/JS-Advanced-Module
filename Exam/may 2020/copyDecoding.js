function parseInput(input) {
    return input
    //   .trim()
    //   .split('\n')
      .map(line => {
        line = line.split(' = ');
        if (line[0].startsWith("mem")) {
          line[0] = +line[0].substring(4, line[0].indexOf("]"));
          line[1] = BigInt(line[1]);
        } else {
          const mask = line[1];
          let and = 0n, // 111111111111111111111111111111111111
            or = 0n,
            idx = 1n;
          for (let i = mask.length - 1; i >= 0; i--) {
            const char = mask[i];
            if (char === "X") {
              // don't and-mask away if "X"
              and += idx;
            } else if (char === "1") {
              and += idx; // or-mask should be applied after and, but still
              or += idx;
            } else if (char === "0") {
              // and += idx; // and-mask away
            }
            idx *= 2n;
          }
          line[1] = { mask, and, or };
        }
        console.log(line[1]);
      });
  }

  parseInput(
    [
        'mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
        'mem[8] = 11',
        'mem[7] = 101',
        'mem[8] = 0'
    ]
  )