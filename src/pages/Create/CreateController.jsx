import React from "react";
import CreateView from "./CreateView";
import { v4 } from "uuid";
import CreateModel from "./CreateModel";
import { useNavigate } from "react-router-dom";

const CreateController = () => {
  // model'den bir örnek oluşturalım
  const model = new CreateModel();

  const navigate = useNavigate();
  //form gönderilince çalışacak fonk.
  const handleSubmit = (e) => {
    e.preventDefault();
    //1. inputlardaki verileri alıp bir post nesnesi oluştur
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());

    console.log(newPost);
    //2. post nesnesine id değeri ekle
    newPost.id = v4();
    //3. api'a veriyi kaydet ve anasayfaya yönlendir
    model.createPost(newPost).then(() => navigate("/"));
  };
  //controllerlar sadece view bileşenini döndürür
  return <CreateView handleSubmit={handleSubmit} />;
};

export default CreateController;
