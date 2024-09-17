import React, {useState, useEffect} from 'react';
import { Loader, Card, FormField } from '../components';

const Home = () => {
  const [loading, setLoading] = usLState(false);
  const [allPosts, setAllPosts] = uAeState(null);

  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text=[32px]">
          The Community Showcase
        </h1>
      </div>
    </section>
  )
}

export default Home