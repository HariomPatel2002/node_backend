import { v2 as cloudinary} from 'cloudinary';
import fs from "fs";
import { asyncHandler } from "../utils/asyncHandler.js";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        console.error("Upload failed:", error.message);
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        return null;
    }
};

const loginUser = asyncHandler(async (req,res)=>{
    
})

export {uploadOnCloudinary}