"use client";

import Friends from "@/data/data";
import Friend from "./Friend";
import { useEffect, useState } from "react";

const FriendsList = () => {
  const [friendCount, setFriendCount] = useState<number>(0);

  const sortFriends = () => {
    return Friends.Friends.map((friend) => {
      return (
        <Friend
          key={friend.id}
          FriendName={friend.name}
          Status={friend.status}
        />
      );
    });
  };

  useEffect(() => {
    setFriendCount(Friends.Friends.length);
  }, []);

  return (
    <div className="bg-purple-400 max-h-screen overflow-y-scroll">
      <h2 className="text-center pt-4">Friends ({friendCount})</h2>
      <div className="ml-4 max-h-full  ">
        <div>{sortFriends()}</div>
      </div>
    </div>
  );
};

export default FriendsList;