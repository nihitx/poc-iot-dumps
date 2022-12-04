import { useEffect, useState } from "react";
import TableRow from './tableRow';
import TableHead from './tableHead';

const MainDeviceTable = () => {
    const [eventData, setEventData] = useState({});
    useEffect(() => {
        const interval = setInterval(() => {
            fetchEvent();
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const fetchEvent = async () => {
        const data = await fetch('http://localhost:3005/event');
        const response = await data.json();
        setEventData(response);
    }
    return (
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <TableHead />
                    <tbody>
                        {Object.entries(eventData).map(([key, value]) => {
                            return (<TableRow myKey={key} value={value} />)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MainDeviceTable;