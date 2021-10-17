import "./App.css";
import { Bike } from "./Bike";
import { Car } from "./Car";
import ClsEvent from "./ClsEvent";
import FnEvent from "./FnEvent";
import Parent from "./parent";
import Conditional from "./Conditional";
import Styles from "./Styles";
import Fragment from "./Fragment";
import LifeCycle from "./LifeCycle";
import PureCompo from "./PureCompo";
import SimpleClass from './SimpleClass'
import Ref from './Ref';
import Portal from "./Portal";
import Demo1 from "./Demo1";
import ErrorBoundary from './ErrorBoundary';
import Demo2 from "./Demo2";
import ProptypeDemo from "./ProptypeDemo";


function App() {
  return (
    <div className="App">
      {/* hello */}
      {/* <Bike name="Bajaj" />
      <Bike>this is dummy data for bike</Bike> */}
      {/* <Car name="Maruti" /> */}
      {/* <Car>This is dummy data for car</Car> */}
      {/* <FnEvent />
      <ClsEvent /> */}
      {/* <Parent /> */}
      {/* <Conditional /> */}
      {/* <Styles /> */}
      {/* <Fragment /> */}
      {/* <LifeCycle name="sample data" /> */}
      {/* <PureCompo /> */}
      {/* <SimpleClass /> */}
      {/* <Ref /> */}
      {/* <Portal /> */}

      {/* <ErrorBoundary>
        <Demo1 />
      </ErrorBoundary>
      <ErrorBoundary>
        <Demo2 />
      </ErrorBoundary> */}
      <ProptypeDemo name="Code Improve" id={12} />

    </div>
  );
}

export default App;
