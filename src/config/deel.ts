interface DeelConfig {
  baseUrl: string;
  apiKey?: string;
}

export const deel: Readonly<DeelConfig> = Object.freeze({
  baseUrl: process.env.API_BASE_URL || "http://localhost:3001",
  apiKey: process.env.API_KEY,
});

export default { deel };
