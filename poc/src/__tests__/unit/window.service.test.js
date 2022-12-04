const {updateWindow} = require('../../services/window.service');
const { inMemoryDeviceProfiler } = require('../../common/inMemoryDb');
const { default: expect } = require('expect');

let input = {
    "deviceId": "abc",
    "data": {
        "type": "load",
        "value": 56
    }
}

test('getEvents is an object', () => {
    expect(typeof updateWindow).toBe('function');
});

test('update window sending error when inputs is wron', async () => {
    try {
        await updateWindow();
    } catch (e) {
        expect(e.message).toBe("couldnt update window");
    }

});

test('successfully updated the window', () => {
    const newWindowValue = 11;
    const update = updateWindow(newWindowValue,input.deviceId, input.data.type);
    expect(update).toBeTruthy();

    const updatedResult = inMemoryDeviceProfiler[input.deviceId];
    const updatedLoad = updatedResult.find(x => x.type === input.data.type);
    const updatedWindow = updatedLoad.window;

    expect(updatedWindow).toBe(11);
});


