import index from "../src/index"
import dotenv from 'dotenv';

dotenv.config();


index.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
