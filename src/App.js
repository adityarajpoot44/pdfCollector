
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { SearchProvider } from './component/small_component/globaldata/SearchContext';
function App() {
  return (
    <>
    <SearchProvider>
     <Header/>
     <Home/>
     </SearchProvider>
    </>
  );
}

export default App;
