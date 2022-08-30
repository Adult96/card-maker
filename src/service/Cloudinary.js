const url = process.env.REACT_APP_CLOUDINARY_URL;

class Cloudinary {
  async upload(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'hbkvpiyi');

    const result = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    return await result.json();
  }
}

export default Cloudinary;
