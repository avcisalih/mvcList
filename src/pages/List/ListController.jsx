import { useEffect, useState } from "react";
import ListView from "./ListView";
import ListModel from "./ListModel";

const ListController = () => {
  //stateler
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  //class dan bir örnek oluşturduk
  const model = new ListModel();
  //useEffect ile kullanıcı etkileşimi izlediğimiz controller dosyasından  tanımları
  useEffect(() => {
    model.getPost().then((data) => setPosts(data));
  }, []);
  // kullanıcı etkileşimiyle tetiklenecek olan fonksiyon

  return (
    <ListView
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
      posts={posts}
    />
  );
};

export default ListController;
