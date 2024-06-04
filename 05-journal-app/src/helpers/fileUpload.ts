

export const fileUpload = async (file: File) => {
    if (!file) throw new Error("No file provided");
    const cloudUrl = "https://api.cloudinary.com/v1_1/react-journal/upload";
    
    const formData = new FormData();
    formData.append("upload_preset", "react-journal");
    formData.append("file", file);
    
    try {
        const response = await fetch(cloudUrl, {
        method: "POST",
        body: formData,
        });
    
        if (response.ok) {
        const cloudResponse = await response.json();
        return cloudResponse.secure_url;
        } else {
        throw await response.json();
        }
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
    }