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
import ThreeDot from "./ThreeDot";
import HocFirst from './HocFirst';
import HocSecond from "./HocSecond";
import RenderProps1 from "./RenderProps1";
import RenderProps2 from "./RenderProps2";
import RenderProp from "./RenderProp";
import PageA from "./PageA";
import { Provider } from './Context';
import Bootstrap from "./Bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from "./Forms";
import Controlled from "./Controlled";
import UnControlled from "./UnControlled";
import ApiAxios from './ApiAxios';
import ApiFetch from './ApiFetch';
import Upload from "./Upload";
import { Route, Link, Switch } from "react-router-dom";
import List from "./Component/List";
import Home from './Component/Home';
import About from './Component/About';
import PageNotFound from "./Component/PageNotFound";
import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  const dataPass = {
    id: '1111',
    name: 'Pranav',
    department: ['A', 'B', 'c']
  }
  const ids = 22;
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
      {/* <ProptypeDemo name="Code Improve" id={12} /> */}
      {/* <ThreeDot /> */}
      {/* <HocFirst name="pranav" />
      <HocSecond name="shalaj" /> */}
      {/* <RenderProps1 /> */}
      {/* <RenderProps2 /> */}
      {/* <RenderProp name={(isUser) => (isUser) ? 'Code Improve' : 'Test'} /> */
      }

      {/* <RenderProp>
        {(count, clickHandler) => (<RenderProps1 count={count} clickHandler={clickHandler} />)}
      </RenderProp>
      <RenderProp>
        {(count, clickHandler) => (<RenderProps2 count={count} clickHandler={clickHandler} />)}
      </RenderProp> */}

      {/* <Provider value={dataPass}>
        <PageA />
      </Provider> */}
      {/* <Bootstrap /> */}
      {/* <Forms /> */}

      {/* <Controlled />
      <UnControlled /> */}

      {/* <ApiAxios /> */}
      {/* <ApiFetch /> */}

      {/* <Upload /> */}


      {/* <Link to="/home">Home</Link><br />
      <Link to="/about">About</Link><br />
      <Link to={'/list/' + ids}>List</Link><br />
      <Link to="/test">Test</Link><br />

      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/list/:id" component={List} />
        <Route path="/test">Test Data</Route>
        <Route path="*" exact={true} component={PageNotFound} />
      </Switch> */}

      <Suspense fallback={<div>Loading.........</div>}>
        <LazyComponent />

      </Suspense>



    </div>
  );
}

export default App;
