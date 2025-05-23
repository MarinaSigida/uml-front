import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Login from './pages/Login';
import ModifyPost from './pages/ModifyPost';
import MyPosts from './pages/MyPosts';
import Posts from './pages/Posts';
import Signup from './pages/Signup';

import './sass/main.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="posts" element={<Posts />} />
          <Route path="my-posts" element={<MyPosts />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="modify-post" element={<ModifyPost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
