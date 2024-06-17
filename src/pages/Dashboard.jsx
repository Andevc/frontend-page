// En Dashboard.jsx
import React from 'react';
import CrearProducto from '../components/CrearProducto'
import Home from '../components/Home';
import SideBar from '../components/SideBar';
import { Routes, Route } from 'react-router-dom';
import Collection from '../components/Collection';
import Settings from '../components/Settings';

const Dashboard = () => {

  return (
    <section className='flex gap-6 min-w-full'>
      <section>
        <SideBar />
      </section>
      <main className='w-full p-10'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collection/:id' element={<Collection />} />
            <Route path='/collection/:id/create-new' element={<CrearProducto />} />
            <Route path='/settings/:id' element={<Settings />} />
          </Routes>
      </main>
    </section>

  );
};

export default Dashboard;