const { getEvents, desc } = require('../../services/events.service')


test('getEvents is an object', () => {
    expect(typeof getEvents).toBe('function');
});

test('getEvents returns  typle', async () => {
    const result = await getEvents();
    expect(result).toMatchObject({ xyz: 0, abc: 0 });
});

test('desc returns first object to be larger', async () => {
    correctDesendingOrder = { efg: 10, xyz: 5, abc: 0 };
    const result = await desc({ abc: 0, xyz: 5, efg: 10 });
    expect(result).toMatchObject(correctDesendingOrder);

});