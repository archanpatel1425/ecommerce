import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config()

const s3Client = new S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_ACCESS_SECRET_KEY
    },
});

export async function getPresignedUrl(bucketName = "testing545454", objectKey, expiresIn = 30) {
    try {
        const command = new GetObjectCommand({
            Bucket: bucketName,
            Key: objectKey,
        });

        const url = await getSignedUrl(s3Client, command, { expiresIn });
        return url;
    } catch (error) {
        console.error("Error generating presigned URL:", error);
        throw error;
    }
}

export async function uploadImageToS3(bucketName, file) {
    try {
        const fileBuffer = fs.readFileSync(file.path);
        const command = new PutObjectCommand({
            Bucket: bucketName,
            Key: file.originalname,
            Body: fileBuffer,
            ContentType: file.mimetype,
        });

        await s3Client.send(command);
        return file.originalname;
    } catch (error) {
        console.error("Error uploading image to S3:", error);
        throw error;
    }
}