import React, { useState } from "react";
import axios from "axios";

const UploadFilesToYandexDisk = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const selectedFilesArray = Array.from(files).slice(0, 100);
    setSelectedFiles(selectedFilesArray);
  };

  const handleUpload = async () => {
    const oauthToken = "ваш_токен";

    selectedFiles.forEach(async (file, index) => {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post("ваш_url", formData, {
          headers: {
            Authorization: `OAuth ${oauthToken}`,
          },
        });

        console.log("Файл загружен на Яндекс.Диск:", file.name);
      } catch (error) {
        console.error("Ошибка при загрузке файла:", error);
      }
    });

    setSelectedFiles([]);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        accept="*/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file-input"
      />
      <label htmlFor="file-input">Выберите файлы (до 100):</label>
      <ul>
        {selectedFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
      <button onClick={handleUpload} disabled={selectedFiles.length === 0}>
        Загрузить на Яндекс.Диск
      </button>
    </div>
  );
};

export default UploadFilesToYandexDisk;
