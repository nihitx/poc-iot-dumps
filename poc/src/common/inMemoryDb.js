let inMemoryDeviceProfiler = {
    "abc": [
        {
            "type": "load",
            "thresholds": {
                "upper": 80,
                "lower": 20
            },
            "window": 10
        }
    ],
    "xyz": [
        {
            "type": "load",
            "thresholds": {
                "upper": 50,
                "lower": 30
            },
            "window": 10
        }
    ],

}

let inMemoryErrorWindowCounter = {
    "abc": { "err_count": 0, "event_count": 0 },
    "xyz": { "err_count": 0, "event_count": 0 }
}

module.exports = {
    inMemoryDeviceProfiler,
    inMemoryErrorWindowCounter
}