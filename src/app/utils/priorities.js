export const PRIORITY_TOP = [295, 294, 182, 2, 4, 193, 171, 183, 191, 1];
export const PRIORITY_NEW = [249, 4, 171, 183, 196, 220, 158, 161]; 

export const PRIORITY_NEW_YEAR = [101, 205, 333]; 



export const prioritizeByIds = (list, ids) => {
  const getId = (p) => Number(p?.id ?? p?._id ?? p?.productId);
  const set = new Set(ids.map(Number));
  const order = new Map(ids.map((id, i) => [Number(id), i]));

  const wanted = [];
  const rest = [];

  for (const item of list) (set.has(getId(item)) ? wanted : rest).push(item);

  wanted.sort((a, b) => order.get(getId(a)) - order.get(getId(b)));

  return [...wanted, ...rest];
};