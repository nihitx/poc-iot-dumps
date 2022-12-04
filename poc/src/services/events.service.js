const { inMemoryErrorWindowCounter } = require('../common/inMemoryDb');

/**
 * 
 * @returns {Object} {deviceId, event_count}
 */
const getEvents = async () => {
    try {
        let tuple = {};
        for (let elem in inMemoryErrorWindowCounter) {
            tuple[elem] = inMemoryErrorWindowCounter[elem].event_count;
        }
        let result = await desc(tuple);
        Object.freeze(result);

        return result;
    } catch (e) {
        throw new Error('couldnt get events');
    }


}

/**
 * 
 * @param {Object} {deviceId, event_count}
 * @returns {Object}
 */
const desc = async (obj) => {
    return Object
        .entries(obj)
        .sort((a, b) => b[1] - a[1])
        .reduce((_sortedObj, [k, v]) => ({
            ..._sortedObj,
            [k]: v
        }), {})
}

module.exports = {
    getEvents,
    desc
}