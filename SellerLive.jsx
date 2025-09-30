import React, { useState } from 'react';

function SellerLive() {
  const [live, setLive] = useState(false);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Go Live</h1>
      <button
        onClick={() => setLive(!live)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {live ? 'End Live' : 'Start Live'}
      </button>
    </div>
  );
}

export default SellerLive;
