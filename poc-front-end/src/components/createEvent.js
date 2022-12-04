import { useState } from "react";

const CreateEvent = () => {
    const [count, setCount] = useState(0);
    // eslint-disable-next-line
    const [window, setWindow] = useState(10);
    // eslint-disable-next-line
    const [upper, setUpperLimit] = useState(80);
    // eslint-disable-next-line
    const [lower, setLowerLimit] = useState(20);

    const postEventUnhealthy = async () => {
        postEvent(100);
        setCount(count+1);
    }
    const postEventHealthy = async () => {
        postEvent(50)
        setCount(0);
    }
    const postEvent = async (value) => {
        const postBody = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "deviceId": "abc",
                "data": {
                    "type": "load",
                    "value": value
                }
            })
        }
        await fetch('http://localhost:3005/', postBody);
        
    }
    return (
        <div>
            <div className="text-xs font-semibold p-5">
            <ul className="list-disc">
                <li>WINDOW is set to {window} for device ABC.</li>
                <li>UPPERLIMIT is set to {upper} for the device ABC </li>
                <li>LOWERLIMIT is set to {lower} for the device ABC</li>
            </ul>
                
            </div>
            <div className="inline-flex rounded-md shadow-sm">
                <button type="button" onClick={() => postEventUnhealthy()}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Generate 1 Unhealthy Data Item For ABC
                    <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                    {count} 
                    </span>
                </button>
            </div>
            <div className="inline-flex rounded-md shadow-sm">
                <button type="button" onClick={() => postEventHealthy()}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Generate 1 Healthy Data Item For ABC
                </button>
            </div>
        </div>
        
    )
}

export default CreateEvent;