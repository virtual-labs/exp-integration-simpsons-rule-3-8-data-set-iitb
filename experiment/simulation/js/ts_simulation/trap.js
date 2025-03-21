function ff(x) {
    return -Math.exp(x / 3) * Math.cos(x / 3) + 3 * Math.sin(x);
}
function generate_data(x_start, x, y) {
    for (let i = 0; i < 7; i++) {
        x[i] = x_start;
        y[i] = ff(x[i]);
        x_start++;
    }
}
function trap(x, y) {
    let h = x[1] - x[0];
    let sum = 0;
    for (let i = 0; i < 6; i++) {
        sum += y[i] + y[i + 1];
    }
    return (h / 2) * sum;
}
function sim1by3(x, y) {
    let h = x[1] - x[0];
    let sum = 0;
    for (let i = 0; i < 6; i += 2) {
        sum += y[i] + 4 * y[i + 1] + y[i + 2];
    }
    return (h / 3.0) * sum;
}
function sim3by8(x, y) {
    let h = x[1] - x[0];
    let sum = 0;
    for (let i = 0; i < 6; i += 3) {
        sum += y[i] + 3 * y[i + 1] + 3 * y[i + 2] + y[i + 3];
    }
    return ((3.0 * h) / 8.0) * sum;
}
//# sourceMappingURL=trap.js.map