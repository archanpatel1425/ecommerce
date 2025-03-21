import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from 'dotenv';

dotenv.config()

const s3Client = new S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_ACCESS_SECRET_KEY
    },
});

async function getPresignedUrl(bucketName, objectKey, expiresIn = 30) {
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

(async () => {
    const bucketName = "testing545454";
    const objectKey = "Screenshot 2024-04-11 211851.png";
    const url = await getPresignedUrl(bucketName, objectKey);
    console.log("Pre-Signed URL:", url);
})();