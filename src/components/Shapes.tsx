import React from 'react';

export function Square() {
  return (
    <div className="block p-6">
      <div>
        <div className="w-24 md:w-56 h-24 md:h-56 bg-gray-700 m-auto" />
      </div>
    </div>
  );
}

export function Plate() {
  return (
    <div className="block p-6">
      <div>
        <div className="w-24 md:w-56 h-4 md:h-4 bg-gray-700 m-auto" />
      </div>
    </div>
  );
}

export function Profile() {
  return (
    <div className="block p-6">
      <div>
        <div className="w-56 md:w-56 h-24 md:h-24 bg-gray-700 m-auto p-4">
          <div className="w-full h-full bg-white m-auto" />
        </div>
      </div>
    </div>
  );
}

export function Pipe() {
  return (
    <div className="block p-6">
      <div>
        <div className="w-24 md:w-56 h-24 md:h-56 bg-gray-700 m-auto p-4 rounded-full">
          <div className="w-full h-full bg-white m-auto rounded-full" />
        </div>
      </div>
    </div>
  );
}
