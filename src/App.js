import Header from '../src/components/Header/Header';
import Navigation from '../src/components/Header/Navigation';
import Sidebar from '../src/components/Content/Sidebar';
import Content from '../src/components/Content/Content';
import Footer from '../src/components/Footer/Footer';
// TODO - update styling of each component
import './App.scss';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        {/* <Navigation />
        <Sidebar />
        <Content />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
