import http from "node:http";

// CommonJS => require
// ESModules => import/export

const users = [];

const server = http.createServer((req, res) => {
	const { method, url } = req;

	if (method === "GET" && url === "/users") {
		return res
			.setHeader("Content-type", "application/json")
			.end(JSON.stringify(users));
	}

	if (method === "POST" && url === "/users") {
		users.push({
			id: 1,
			name: "Fulano Silva",
			email: "fulano@example.com",
		});
		return res.writeHead(201).end("Usuário criado");
	}

	return res.writeHead(404).end("Rota não existe");
});

server.listen(3333);
