import React from "react";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    
    <div className="min-h-screen bg-red-100 flex flex-col items-center justify-center ">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-red-500 mb-8 text-center">
        Role-Based Access Control (RBAC) Management
      </h1>

      

      {/* Dashboard Grid */}
      <div className="grid grid-cols-2 gap-6 max-w-4xl">
        {/* Users */}
        <Link
          to="/users"
          className="group bg-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 p-6 flex flex-col items-center justify-center"
        >
          <h2 className="text-xl font-bold">Users</h2>
          
        </Link>

        {/* Roles */}
        <Link
          to="/roles"
          className="group bg-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 p-6 flex flex-col items-center justify-center"
        >
          <h2 className="text-xl font-bold">Roles</h2>
          
          
        </Link>

        {/* Permissions */}
        <Link
          to="/permissions"
          className="group bg-yellow-500 text-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 p-6 flex flex-col items-center justify-center"
        >
          <h2 className="text-xl font-bold">Permissions</h2>
          
        </Link>

        {/* User Management */}
        <Link
          to="/user-management"
          className="group bg-red-500 text-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 p-6 flex flex-col items-center justify-center"
        >
          <h2 className="text-xl font-bold">User Management</h2>
          
        </Link>
      </div>
    </div>
  );
};

export default Home;
