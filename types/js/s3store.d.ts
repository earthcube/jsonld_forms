export function saveToUser(jsonstring: any, filename: any, itemMetadata: any, toolname: any, bucket: any, s3Credentials: any): void;
export function saveToGroup(jsonstring: any, filename: any, itemMetadata: any, toolname: any, bucket: any, s3Credentials: any, group: any): void;
export function listUserFiles(bucketName: any, toolname: any, s3Credentials: any): Promise<any>;
export function getFroms3(filepath: any, bucket: any, s3Credentials: any): Promise<any>;
export function listRegistryFiles(bucketName: any, pathtopublished: any, s3Credentials: any): Promise<any>;
