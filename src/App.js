import logo from './logo.svg';
import './App.css';
import Names from './components/subComp/Names';
// import Button from './components/subComp/Button';
import CardA from './components/Cards/CardA';
import CardB from './components/Cards/CardB';
// import CardC from './components/Cards/CardC';

function App() {
  return (
    <div className="App">
     {/* <Names name ="samsung" occupation ="trader" age ="40" city ="ibadan" /> */}
     {/* <Names name ="tecno" occupation ="teacher" age ="30" city ="lagos" /> */}
     {/* <Names name ="iphone" occupation ="doctor" age ="10" city ="abuja" /> */}
     {/* <Names name ="itel" occupation ="engineer" age ="20" city ="ilorin" /> */}
     {/* <Button /> */}
     <CardA />
     <CardB />
    </div>
  );
}

export default App;
