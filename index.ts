import { log } from "./log";

export const handler = async (
  event: any
): Promise<{ statusCode: number; body: string; headers: object }> => {
  log("event:" + JSON.stringify(event));

  return {
    statusCode: 200,
    body: JSON.stringify(event),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
