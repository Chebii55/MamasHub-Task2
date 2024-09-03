import express, { Request, Response } from 'express';
import cors from 'cors';

interface Users {
  [key: string]: string;
}

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let users: Users = {
  'Jane': 'jane123',
};

app.post('/authenticate', (req: Request, res: Response) => {
  const { name, password }: { name: string; password: string } = req.body;

  if (users[name] && users[name] === password) {
    console.log('Authentication successful');
    res.json({ success: true });
  } else {
    console.log('Authentication failed');
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
