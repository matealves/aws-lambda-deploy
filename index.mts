import { log } from "./log.mts";

export const handler = async (
  event: any
): Promise<{ statusCode: number; body: string }> => {
  log("Log de execução após o GitHub Action. event:" + JSON.stringify(event));

  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };
};
