import { NextApiRequest, NextApiResponse } from "next";

// == Types ================================================================

export interface IResponse {}

// == Constants ============================================================

// == Functions ============================================================

// == Request ==============================================================

export default (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json("");
  } catch (error) {
    console.error(error);
    res.status(500).end();
  } finally {
    // Do something
  }
};
