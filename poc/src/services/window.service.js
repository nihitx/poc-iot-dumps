const { inMemoryDeviceProfiler } = require('../common/inMemoryDb');

/**
 * 
 * @param {number} value the new window value
 * @param {string} deviceId the device id
 * @param {string} type example "load"
 * @returns {boolean}
 */
const updateWindow = async (value, deviceId, type) => {
    try {
        objIndex = inMemoryDeviceProfiler[deviceId].findIndex((obj => obj.type == type));
        inMemoryDeviceProfiler[deviceId][objIndex].window = value;
        return true;
    } catch (e) {
        throw new Error('couldnt update window');
    }
};

module.exports = {
    updateWindow
}