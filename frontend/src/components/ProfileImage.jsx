import axios from "axios";
import { useState } from "react";

export default function ProfileImage () {
  const uploadImage = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', document.getElementById("profileImage").files[0]);
    axios
      .post("/uploadProfileImage", data, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      })
      .then((response) => {
        console.log("Image Uploaded Successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  const [image, setImage] = useState(null);
  const viewProfileImage = () => {
    axios
      .get("/profileImage", { responseType: "blob" })
      .then((response) => {
        const imageBlob = new Blob([response.data], { type: response.headers["content-type"] });
        const imageUrl = URL.createObjectURL(imageBlob);
        setImage(imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }

    return (
    <div className="imageForm"> <br />
      <hr /><br />
      <h1 className="text-5xl">Image Upload</h1> <br />
        <h1>Profile Image Upload</h1>
        <form action="/uploadProfileImage" method="POST" encType="multipart/form-data">
            <input type="file" id="profileImage" name="profileImage" />
            <button type="submit" className="btn btn-dark" onClick={uploadImage}>Upload</button>
        </form>

        <br></br><hr /><br />
        <h1 className="text-5xl">Image View</h1>
        <br />
        <button className="btn btn-dark" onClick={viewProfileImage}>View Image</button>
        <img src={image} alt="No Image Found" />
    </div>
  );
};
