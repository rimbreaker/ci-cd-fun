import { Request, Response } from "express";
import namer from "color-namer";

const getColorName = async (req: Request, res: Response) => {
  const id = req.params.id;
  res.send({ name: namer(id).pantone[0].name });
};

export { getColorName };
