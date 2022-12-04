const { 
    inMemoryDeviceProfiler,
    inMemoryErrorWindowCounter } = require('../common/inMemoryDb');
/**
 * 
 * @param {{deviceId: string, data: {type: string, value: number } }} input the input variable to check for analomies
 * @returns {boolean}
 */
const process = async (input) => {
    try {
        const result = inMemoryDeviceProfiler[input.deviceId];
        const load = result.find(x => x.type === input.data.type);

        const upper = load.thresholds.upper;
        const lower = load.thresholds.lower;
        const window = load.window;

        if (input.data.value > upper || input.data.value < lower) {
            inMemoryErrorWindowCounter[input.deviceId].err_count += 1
        } else {
            inMemoryErrorWindowCounter[input.deviceId].err_count = 0;
        }

        if (inMemoryErrorWindowCounter[input.deviceId].err_count >= window) {
            inMemoryErrorWindowCounter[input.deviceId].event_count += 1;
            inMemoryErrorWindowCounter[input.deviceId].err_count = 0;

        }

        return true;
    } catch (err) {
        throw new Error('couldnt process message');
    }
}

module.exports = {
    process
}

