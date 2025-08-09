import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { initializeTheme } from './store/slices/themeSlice';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import AllFiles from './pages/AllFiles';
import UpdateFile from './pages/UpdateFile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ViewFile from './pages/ViewFile';

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/all-files" 
              element={
                <ProtectedRoute>
                  <AllFiles />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/update-file/:id" 
              element={
                <ProtectedRoute>
                  <UpdateFile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/file/:id" 
              element={
                <ProtectedRoute>
                  <ViewFile />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;