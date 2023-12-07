import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/usuario", (req: Request, res: Response) => {
    res.status(200).send({
        ok: true,
        message: "Api rodando com sucesso",
    });
});

app.listen(3333, () => {
    console.log("A API está rodando!");
});
