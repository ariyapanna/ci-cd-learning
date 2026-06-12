const { add, subtract } = require('./math');

test('Fungsi tambah: 2 + 3 harus menghasilkan 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('Fungsi kurang: 10 - 4 harus menghasilkan 6', () => {
    expect(subtract(10, 4)).toBe(6);
});