import React from 'react';

// ROUTER
import { HashRouter, Routes, Route } from 'react-router-dom';

// PUBLIC VIEWS
import Body from '../layouts/Body';

import MainLayout from '../layouts/Main';
import InventoryCreateView from '../views/inventory/FormItemCreate';
import InventoryUpdateView from '../views/inventory/FormItemUpdate';
import InventoryView from '../views/inventory';

const Routing = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='' element={<Body><InventoryCreateView /></Body>} />
          <Route path='enterprise/add' element={<Body><InventoryCreateView /></Body>} />
          <Route path='enterprise/update/:id' element={<Body><InventoryUpdateView /></Body>} />
          <Route path='enterprise' element={<InventoryView />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Routing;
