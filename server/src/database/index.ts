import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async(host = ''): Promise<Connection> => {
  const defaulOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaulOptions, {
      host,
    })
  )
}