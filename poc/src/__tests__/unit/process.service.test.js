const { process } = require('../../services/process.service')
const { getEvents } = require('../../services/events.service');
let { inMemoryErrorWindowCounter, inMemoryDeviceProfiler } = require('../../common/inMemoryDb');
const inMem = require('../../common/inMemoryDb');


let input = {
    "deviceId": "abc",
    "data": {
        "type": "load",
        "value": 56
    }
}

const generateAEvent = async () => {
    const result = inMemoryDeviceProfiler[input.deviceId];
    const load = result.find(x => x.type === input.data.type);
    const window = load.window;
    const upper = load.thresholds.upper;

    for (let i = 0; i < window; i++) {
        input.data.value = upper + 1;
        process(input);
    }
}

describe('process service tests', () => {

    beforeEach(() => {
        Object.defineProperty(inMem, 'inMemoryErrorWindowCounter', { value: inMemoryErrorWindowCounter })

    })
    test('process is an object', () => {
        expect(typeof process).toBe('function');
    });

    test('process to throw error when input is missing', async () => {
        try {
            await process();
        } catch (e) {
            expect(e.message).toBe("couldnt process message");
        }

    });

    test('error counter to be 0 if value is between upper and lower threshold', async () => {
        const result = await process(input);
        expect(result).toBeTruthy();
        const events = await getEvents();
        expect(events).toMatchObject({ xyz: 0, abc: 0 });
    });

    test('error counter to be 1 if input has thrshold above window limit', async () => {
        input.data.value = 100
        const result = await process(input);
        expect(result).toBeTruthy();
        abc_device = inMemoryErrorWindowCounter[input.deviceId];
        expect(abc_device.err_count).toBe(1);
    });

    test('error counter to return 0 if 1 above threshold is send and another normal value is sent   ', async () => {
        input.data.value = 100
        const result = await process(input);
        input.data.value = 50;
        const result2 = await process(input);
        expect(result2).toBeTruthy();
        abc_device = inMemoryErrorWindowCounter[input.deviceId];
        expect(abc_device.err_count).toBe(0);
    });

    test('test event counter to be 1 when process is called with anamoly ', async () => {
        generateAEvent();
        abc_device = inMemoryErrorWindowCounter[input.deviceId];
        expect(abc_device.event_count).toBe(1);
        expect(abc_device.err_count).toBe(0);
    });

});