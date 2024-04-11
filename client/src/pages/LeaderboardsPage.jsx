import React, { useState, useEffect } from 'react';
import { useGetAllUsersQuery } from '../redux/services/UserService';
import { Spinner } from "flowbite-react";

const LeaderboardsPage = () => {

  const {data, isLoading} = useGetAllUsersQuery("User");

  return (
    <div className="container mx-auto py-8">
      {isLoading ? (
        <Spinner aria-label="Default status example" />
      ) : data.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Leaderboards</h1>
          <div className="grid grid-cols-3 gap-4">
            {data.map((user) => (
              <div
                key={user.user_id}
                className="border border-gray-200 p-4 rounded shadow-md"
              >
                <img
                  src={user.profileurl}
                  alt={user.name}
                  className="w-16 h-16 rounded-full mb-2"
                />
                <div className="font-semibold">{user.name}</div>
                <div className="text-gray-500">{user.email}</div>
                <div className="text-gray-500">
                  Height: {user.height} cm, Weight: {user.weight} kg
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default LeaderboardsPage;
