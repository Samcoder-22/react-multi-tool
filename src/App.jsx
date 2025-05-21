// src/App.jsx
import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import './styles/tailwind.css';

const { Header, Content, Footer } = Layout;

const App = () => {
return ( <Router> <Layout className="min-h-screen"> <Header> <div className="text-white text-xl">Multi-Tool App</div> </Header> <Content className="p-4 bg-gray-100"> <AppRouter /> </Content> <Footer className="text-center">© 2025 Samcoder Tools</Footer> </Layout> </Router>
);
};

export default App;
