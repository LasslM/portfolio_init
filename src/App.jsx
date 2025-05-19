import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home.jsx';
import {navigation} from '@/constants/index.jsx';

const App = ()  => {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          {navigation.map((item) => (
              <Route path={item.url} element={item.element}/>
          ))}
      </Routes>
  )
}

export default App
