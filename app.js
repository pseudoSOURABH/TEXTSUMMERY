import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import sourabh from "./components/sourabh";

function App() {
  return (
    <>
      {/* <sourabh></sourabh> */}
      <Navbar title="textuttils" aboutText="ABOUT"></Navbar>
      <div className="container my-3">
      <TextForm heading="enter the text to analyze"></TextForm>
      </div>
      {/* <Navbar ></Navbar>    ,it is when we dont pass an argument and it goes away with default argument */}
    </>
  );
}
//THESE ARE MY IMP NOTES ,I MUST READ IT ONES I OPEN IT.
//from line 4-23 ,this is 'jsx'.in simple words,it is html ,who wore a mask of js.

//entire jsx of react must be wraped in one tag.it cannot return multiple tags.suppose if you wanna
//add some new tag ,so what you will do is :
//  <>
//   new tag
//   jsx code
//  </>
//this is the correct approach
//we have to use camal case in react
// html syntax are slightly changed in react:
//  htmlFor=htmlFor,className=className etc.

export default App;
