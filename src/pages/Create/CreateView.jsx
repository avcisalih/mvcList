import React from "react";

const CreateView = ({ handleSubmit }) => {
  return (
    <div className="h-[90vh] grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 w-3/4 max-w-[700px] bg-black p-10 md:p-20 rounded-lg"
      >
        <h1>Yeni Gönderi Oluştur</h1>
        {/* kullanıcı adı */}
        <div className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-medium">Kullanıcı Adı</label>
          <input
            name="user"
            placeholder="ör: Ahmet"
            required
            type="text"
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
          />
        </div>
        {/* gönderi adı */}
        <div className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-medium">Gönderi Başlığı</label>
          <input
            name="title"
            placeholder="ör: Js Çalış"
            required
            type="text"
            className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
          />
        </div>
        {/* açıklama alanı */}
        <div className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-medium">Açıklama</label>
          <textarea
            name="text"
            placeholder="..."
            required
            type="text"
            className="max-h-[300px] min-h-[150px] bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 p-2 rounded-lg transition hover:bg-yellow-600"
        >
          Oluştur
        </button>
      </form>
    </div>
  );
};

export default CreateView;
