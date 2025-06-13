export const fetchHendler = async <T>(query: Promise<Response>) => {
  const res = await query;
  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  } else {
    return res.json() as T;
  }
};
