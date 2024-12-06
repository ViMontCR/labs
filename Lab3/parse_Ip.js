
function ipToNumber(ip = '127.0.0.1') {
    return ip.split('.')
        .map((byte, index) => parseInt(byte) << (8 * (3 - index)))
        .reduce((acc, curr) => acc + curr, 0);
}
console.log(ipToNumber('127.0.0.1'));
console.log(ipToNumber('10.0.0.1'));
console.log(ipToNumber('191.168.1.10'));
console.log(ipToNumber('165.225.123.150'));
console.log(ipToNumber('0.0.0.0'));
console.log(ipToNumber('8.8.8.9'));
