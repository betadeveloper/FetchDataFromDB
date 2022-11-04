import Form from './components/FormApp';
import ListPage from './components/ListPage';
import DetailsPage from './components/DetailsPage'
import {Route, Routes} from 'react-router-dom';

export default function App(){
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<ListPage />}/>
      <Route path="/form" element={<Form />}/>
      <Route path="/details" element={<DetailsPage />}/>
      </Routes>
      </div>
  );
}