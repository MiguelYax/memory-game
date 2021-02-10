import React from 'react';
import Layout from './layout'
import Card from './card';

import items from './context';

const cards = items.map(c => <Card key={c.id} > {c.value}</Card>)

const App = () => {
  return (
      <Layout>
        {cards}
      </Layout>
  );
}

export default App;