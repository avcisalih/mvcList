import axios from "axios";
//veriyle alakalı her türlü yapıyı modelde tanımlarız
//model oluştururken genelde class'ları tercih ederiz


export default class ListModel{
    //apidan post verilerini alıp döndüren bir fonk. tanımlarız

    async getPost(){
        try {

            const res = await axios.get("http://localhost:3000/posts");
            return res.data
        } catch(err){
            alert("Üzgünüz Bir Hata oluştu.");
            console.log(err)
        }
    }
}