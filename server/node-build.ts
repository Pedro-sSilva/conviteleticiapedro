import express from "express";
import cors from "cors";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Rotas de exemplo
  app.get("/api/ping", (req, res) => {
    res.json({ message: "pong" });
  });

  app.get("/api/demo", (req, res) => {
    res.json({ message: "Demo endpoint funcionando!" });
  });

  return app;
}

// Inicia o servidor se o arquivo for executado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  const app = createServer();
  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}