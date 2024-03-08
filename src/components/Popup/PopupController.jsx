import React, { useEffect, useState } from "react";
import PopupView from "./PopupView";
import PopupModel from "./PopupModel";

const PopupController = ({ user, close }) => {
  const [userPosts, setUserPosts] = useState([]);

  const model = new PopupModel();
  //pencere açıldığında kullanıcının gönderilerini alır
  useEffect(() => {
    model.getUserPost(user).then((data) => setUserPosts(data));
  }, []);
  return <PopupView userPosts={userPosts} close={close} user={user} />;
};

export default PopupController;
