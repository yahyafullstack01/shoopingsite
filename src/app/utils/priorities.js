export const PRIORITY_TOP = [182, 268, 100, 97, 143, 44, 144, 140, 181];
export const PRIORITY_NEW = [268, 182, 171, 295, 131, 294, 123]; 

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