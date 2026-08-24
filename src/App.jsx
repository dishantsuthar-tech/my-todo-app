import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen min-h-screen bg-gray-800 p-4 sm:p-6 md:p-10 gap-6 md:gap-4 overflow-x-hidden">
      <Create />
      <Read />
    </div>
  );
};

export default App;
