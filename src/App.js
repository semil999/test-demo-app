import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import FuncBaseComponent from './Component/FuncBaseComponent';
// import ReactCrud from './Component/ReactCrud';
// import FuncCrud from './Component/FuncCrud';
// import ClassBaseComponent from './Component/ClassBaseComponent';
// import ClassLifeCycle from './Component/ClassLifeCycle';
// import Carousal from './Component/Carousal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createContext, useEffect, useState } from 'react';
import ApplyRedux from './Component/ApplyRedux';
import { useDispatch, useSelector } from 'react-redux';
import ReduxCrud from './Component/ReduxCrud/ReduxCrud';
import ApiReducCrud from './Component/ApiReducCrud';
import { getStudentData } from './Redux/Action/apiAction';
// import FunctionBaseLifeCycle from './Component/FunctionBaseLifeCycle';
// import Comp1 from './Component/Childs/Comp1';
// import ChildToParentsData from './Component/ChildToParentsData';
// import CustomHook from './Component/CustomHook';
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import Form from './Component/ClassBaseRouterCrud/Form';
// import Table from './Component/ClassBaseRouterCrud/Table';
// import ClassPureComponent from './Component/ClassPureComponent';
// import Cookies from './Component/Cookies';
// import UseMemoComp from './Component/UseMemoComp';
// import UseCallbackComp from './Component/UseCallbackComp';
// import Form1 from './Component/TwoFormOneTable/Form1';
// import Form2 from './Component/TwoFormOneTable/Form2';
// import Api from './Component/Api';
// import ImageApiCrud from './Component/ImageApiCrud';
// import TokenApiCrud from './Component/TokenApiCrud';
// import FetchApiCrud from './Component/FetchApiCrud';
// import UseReducerCom from './UseReducerCom';
// import ReducerCrud from './Component/ReducerCrud';
// import ValidationOfUseForm from './Component/ValidationOfUseForm';
// import SelectionOfAB from './Component/SelectionOfAB';
// import RoutingPage from './Component/NewPages/RoutingPage';
// import ReactChartComp from './Component/ReactChartComp';
// import Table from './Component/FunctionRouterCrude/Table';
// import Form from './Component/FunctionRouterCrude/Form';

// export const UserContext = createContext("");

function App() {
  const count = useSelector((state) => state?.countData?.count);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudentData());
  }, [])
  
  // const [isOnline, setIsOnline] = useState(navigator.onLine);
  // const [show, setShow] = useState(true);
  // const [value, setvalue] = CustomHook(10);
  // const [userData, setUserData] = useState("");
  // const func = (first,second) => {
  //   console.log(first, second, 'sfdfds')
  // }

  // func("1", "10")

  // let data = "Femil";
  // const getData = (item) => {
  //   setvalue(item);
  // }
  // useEffect(() => {
  //   const handleCheck = () => {
  //     setIsOnline(navigator.onLine)
  //   }

  //   window.addEventListener('online', handleCheck);
  //   window.addEventListener('offline', handleCheck);

  //   return () => {
  //     window.removeEventListener('online', handleCheck);
  //     window.removeEventListener('offline', handleCheck);
  //   }
  // }, [isOnline])
  
  return (
    <>
    {/* <h1 className='text-center'>{count}</h1> */}
      {/* <FuncBaseComponent /> */}
      {/* <h1>{value}</h1> */}
      {/* <ReactCrud /> */}
      {/* <FuncCrud /> */}
      {/* <ClassBaseComponent /> */}
      {/* <div className='text-center'>
        <button className='btn btn-danger' onClick={() => setShow(!show)}>Show</button>
      </div>
      {
        show ? 
        // <ClassLifeCycle data={"Femil"}/>
        <FunctionBaseLifeCycle />
        : 
        <></>
      } */}
      {/* <h3>{userData}</h3> */}
      {/* <FunctionBaseLifeCycle /> */}
      {/* <Carousal /> */}

      {/* <button className='btn btn-success' onClick={() => setvalue(value + 1)}>Save</button> */}
      {/* <UserContext.Provider value={{userData, setUserData}}>
        <Comp1 />
      </UserContext.Provider> */}
      {/* <ChildToParentsData getData={getData}/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={"/form"}/>}/>
          <Route path='/form' element={<Form />}>
            <Route path=':id' element={<Form />}/>
          </Route>
          <Route path='/table' element={<Table />}/>
        </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={"/form"}/>}/>
          <Route path='/form' element={<Form />}>
            <Route path=':id' element={<Form />}/>
          </Route>
          <Route path='/table' element={<Table />}/>
        </Routes>
      </BrowserRouter> */}
      {/* <ClassPureComponent /> */}
      {/* <Cookies /> */}
      {/* <UseMemoComp /> */}
      {/* <UseCallbackComp /> */}

      {/* <div className='container'>
        <div className='row'>
          <div className='col'>
            <Form1 />
          </div>
          <div className='col'>
            <Form2 />
          </div>
        </div>
      </div> */}
      {/* <Api /> */}
      {/* <ImageApiCrud /> */}
      {/* <TokenApiCrud /> */}
      {/* <FetchApiCrud /> */}
      {/* <UseReducerCom /> */}
      {/* <ReducerCrud /> */}
      {/* <ValidationOfUseForm /> */}
      {/* <SelectionOfAB /> */}
      {/* <RoutingPage /> */}
      {/* {
        isOnline ?
        <ReactChartComp />
        :
        <>
          <div className='container d-flex justify-content-center align-items-center' style={{height: "100vh", width: "100%"}}>
            <h1>NO Internet Connection</h1>
          </div>
        </>
      } */}
      {/* <ApplyRedux /> */}
      {/* <ReduxCrud /> */}
      <ApiReducCrud />
    </>
  );
}

export default App;
