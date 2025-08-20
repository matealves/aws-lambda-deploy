import { log } from "./log";
import { S3 } from "@aws-sdk/client-s3";

const s3Client = new S3({
  region: process.env.AWS_REGION || "us-east-1",
});

export const handler = async (event: any): Promise<any> => {
  const record = event.Records ? event.Records[0] : null;
  const Bucket = record?.s3?.bucket?.name;
  const Key = record?.s3?.object?.key;

  const getObjectResult = await s3Client
    .getObject({ Bucket, Key })
    .then((data: any) => data)
    .catch((error: any) => {
      console.error("Erro ao obter objeto do S3:", error);
    });

  const mega_byte = 1024 * 1024;
  let message;

  if (getObjectResult.ContentLength > 1 * mega_byte) {
    message = "O arquivo é maior que 1MB, não será processado.";
    log(message);
    return message;
  }

  message = "Arquivo com tamanho adequado para processamento.";
  log(message);
  return message;
};
