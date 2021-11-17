import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import createConnection from '../index'

async function create() {
  const connectin = await createConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connectin.query(
    `INSERT INTO USERADMIN(id, name, email, password, created_at)
      values('${id}', 'admin', 'admin@verzel.com.br', '${password}', 'now()')
    `
  )
  
}

create().then(() => console.log('User admin created!'));