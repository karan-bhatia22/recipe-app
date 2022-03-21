import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Button from "../button/Button";
import React, { useState } from "react";

function ImageUploadModal(props: {
  setRecipeImage: React.Dispatch<React.SetStateAction<string>>;
  isUploadImageOpen: boolean;
  setIsUploadImageOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [Img, setImg] = useState<File | null>(null);
  const [dialogTitle, setDialogTitle] = useState("Change Recipe Image");
  const [greaterThan2, setGreaterThan2] = useState(false);
  const handleImageChange = (e: any) => {
    if (Math.floor(e.target.files[0].size / 1024) > 2048) {
      setDialogTitle("Please choose image with size less than 2MB!");
      setGreaterThan2(true);
    } else {
      setDialogTitle("Upload Image");
      setGreaterThan2(false);
      setImg(e.target.files[0]);
    }
  };
  const handleOnClose = () => {
    props.setIsUploadImageOpen(false);
  };
  const handleUploadImage = () => {
    const formData = new FormData();
    if (Img !== null) {
      formData.append("img", Img, Img.name);
      fetch("/image/upload", {
        method: "POST",
        body: formData,
      }).then((res) => {
        res.json().then((data) => {
          props.setRecipeImage(data.url);
          props.setIsUploadImageOpen(false);
        });
      });
    } else if (Img === null && !greaterThan2) {
      setDialogTitle("Choose an image before uploading!!");
    } else if (greaterThan2) {
      setDialogTitle("Please choose image with size less than 2MB!");
    }
  };
  return (
    <Dialog open={props.isUploadImageOpen} onClose={handleOnClose}>
      <DialogTitle id="simple-dialog-title">{dialogTitle}</DialogTitle>
      <DialogContent
        dividers={true}
        className="flex justify-between items-center"
      >
        <input
          type="file"
          name="img"
          accept="image/*"
          onChange={handleImageChange}
        ></input>

        <div onClick={handleUploadImage} className="flex">
          <Button value="Upload" />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ImageUploadModal;
