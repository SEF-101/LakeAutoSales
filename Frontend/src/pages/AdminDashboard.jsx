import React from 'react';
import { Card } from 'flowbite-react';

function AdminDashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
      <div className="grid row-span-9 gap-6">
        <Card>
          <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
            Listed Vehicles
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here is some text within a card body.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default AdminDashboard;