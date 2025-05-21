// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.jsx
// import React from 'react';
// import { Layout, Menu } from 'antd';
// import { BrowserRouter as Router } from 'react-router-dom';
// import AppRouter from './router/AppRouter';
// import './styles/tailwind.css';

// const { Header, Content, Footer } = Layout;

// const App = () => {
// return ( <Router> <Layout className="min-h-screen"> <Header> <div className="text-white text-xl">Multi-Tool App</div> </Header> <Content className="p-4 bg-gray-100"> <AppRouter /> </Content> <Footer className="text-center">© 2025 Samcoder Tools</Footer> </Layout> </Router>
// );
// };

// export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import './styles/tailwind.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-600 p-4 text-white text-xl font-semibold text-center">
          Multi-Tool App
        </header>
        <main className="flex-1 p-4 bg-gray-100">
          <AppRouter />
        </main>
        <footer className="text-center p-4 bg-gray-200">
          © 2025 Samcoder Tools
        </footer>
      </div>
    </Router>
  );  
};

export default App;