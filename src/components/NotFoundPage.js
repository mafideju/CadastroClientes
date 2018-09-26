import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404 - Página Não Encontrada
    <br />
    <Link to="/">Página Inicial</Link>
  </div>
);
export default NotFoundPage;
