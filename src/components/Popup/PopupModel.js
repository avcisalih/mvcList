import axios from "axios";
import { toast } from "react-toastify";

export default class PopupModel{
    //parametre olarak aldığı kullanıcının gönderilerini api den alır
    async getUserPost(username){
        try{
           const res= await axios.get(`http://localhost:3000/posts?user=${username}`);

           return res.data;
        }
        catch (err){
            toast.err('Gönderilere Erişilemedi..');
            console.log(err)
        }
    }
}