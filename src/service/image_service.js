class ImageService {
  constructor() {
    this.URL = "https://api.cloudinary.com/v1_1/dlhxfrssh/image/upload";
  }

  async upload(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ofmrldro");
    const response = await fetch(this.URL, {
      method: "POST",
      body: formData
    });
    const result = await response.json();
    const URL = result.url;
    return URL;
  }
}

export default ImageService;