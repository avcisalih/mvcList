import axios from "axios";
import { toast } from "react-toastify";

export default class CreateModel {
    async createPost(newPost){
        try{
            await axios.post('http://localhost:3000/posts', newPost)
            toast.success("Gönderi başarıyla oluşturuldu")
        } catch(err){
            toast.error("Gönderi Kaydelirken bir Hata oluştu.")
            console.log(err)
        }
    }

}