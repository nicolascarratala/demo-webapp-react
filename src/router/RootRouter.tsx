
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import VerTodo from '../pages/vertodo';


const RootRouter = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verTodo" element={<VerTodo />} />
    </Routes>
  );
};

export default RootRouter;