import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home.jsx';
import {navigation} from '@/constants/index.jsx';
import ScrollToTop from '../src/components/ScrollToTop.jsx';
import ProjectsDetailed from '../src/pages/ProjectsDetailed.jsx';

const App = ()  => {
  return (
      <>
          <ScrollToTop/>
          <Routes>
              <Route path="/" element={<Home />} />
              {navigation.map((item) => (
                  <Route key={item.id} path={item.url} element={item.element}/>
              ))}
              <Route path="/projects/:slug" element={<ProjectsDetailed />} />
          </Routes>
      </>
  )
}

export default App
