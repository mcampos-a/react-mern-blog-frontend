import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import NewPostPage from './pages/NewPostPage'
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='posts/new' element={<NewPostPage />} />
      <Route path='posts/:id' element={<PostPage />} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
