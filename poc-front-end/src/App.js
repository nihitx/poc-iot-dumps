import CreateEvent from './components/createEvent';
import MainDeviceTable from './components/eventTable/table';

function App() {
  return (
      <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                  <div> <h2 className="text-2xl font-semibold leading-tight">Device Status</h2> </div>
                    <MainDeviceTable />
                    <CreateEvent />
                </div>
            </div>
        </div>
  );
}
export default App;
