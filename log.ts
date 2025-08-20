export function log(message: string): void {
  console.log("AMBIENTE:", process.env.ENVIRONMENT);
  console.log("Adicionando log via função:", message);
}
