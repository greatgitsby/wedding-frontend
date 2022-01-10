import { PhotoCamera } from "@mui/icons-material";
import { Button, CircularProgress, Snackbar } from "@mui/material";
import { ChangeEvent, useState } from "react";



export function UploadPictureButton() {
  const [uploading, setUploading] = useState(false);
  const [open, setOpen] = useState(false);

  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUploading(true);

    if (e.target.files == null) {
      e.target.files = new FileList();
    }

    for (let i = 0; i < e.target.files.length; i++) {
      const f = e.target.files[i];
      const form = new FormData();
      form.append("file", f);

      fetch("https://api.owen2moen.com/images", {
        method: "POST",
        mode: "no-cors",
        body: form
      })
        .then(_ => {
          setOpen(true);
        })
        .catch((err) => console.error(err))
        .finally(() => setUploading(false));
    }
  };

  const closeNotification = () => {
    setOpen(false);
  }

  return (
    <>
      <Button href="#" onClick={() => document.getElementById("upload")?.click()}>
        {uploading ? <CircularProgress color="secondary" size={20} /> : <PhotoCamera />}
        <input type="file" accept=".jpg,.jpeg,.png,.gif,image/*" id="upload" onChange={uploadFile} hidden multiple />
      </Button>

      <Snackbar
        open={open}
        onClose={closeNotification}
        autoHideDuration={6000}
        message="Thanks for the pic! 💖"
      />
    </>
  );
}