import {
  pathOr,
  when,
  has,
  isNil,
  map,
  reduce,
  find,
  filter,
  whereEq,
  pipe,
  split,
  complement,
  assocPath,
  path,
  omit,
  toPairs,
  head,
  last,
  fromPairs,
} from 'ramda';

import { renameKeys } from 'utils/ramda';

const byLang = (lang: string) => find(whereEq({ lang }));

type NameType = {
  lang: string,
  text: string,
};

export const getNameText = (arr: Array<NameType>, lang: string) => {
  if (!arr || !lang) {
    return null;
  }
  let name = byLang(lang)(arr);
  if (!name || !name.text) name = byLang('EN')(arr);
  return name ? name.text : null;
};

export const flattenFunc = reduce((acc, nextItem) => {
  if (nextItem.children) {
    return [...acc, nextItem, ...flattenFunc(nextItem.children)];
  }
  return [...acc, nextItem];
}, []);

type TreeType = {
  rawId: number,
  children: Array<TreeType>,
};

export const findCategory = (pred: (i: any) => boolean, tree: TreeType) => {
  if (tree.children && tree.children.length > 0) {
    const flatArr = flattenFunc(tree.children);
    const result = find(pred, flatArr);
    return result || null;
  }
  return null;
};

const urlToAttr = item => {
  const left = item.split('=').length === 2 ? item.split('=')[0] : null;
  const right = item.split('=').length === 2 ? item.split('=')[1] : null;
  if (!left || !right) return null;
  const methodName = left.split('.').length === 2 ? left.split('.')[0] : null;
  const id =
    left.split('.').length === 2 ? parseInt(left.split('.')[1], 10) : null;
  if (!methodName || !id) return null;
  return {
    id,
    [methodName]: {
      values: right.split(','),
    },
  };
};

const parseAttrFiltersFromUrl = pipe(
  path(['attrFilters']),
  split(';'),
  map(urlToAttr),
  filter(complement(isNil)),
);

const assocInt = (arr, getterValue) => obj => {
  const value = getterValue(obj);
  const res = assocPath(arr, value ? parseFloat(getterValue(obj)) : null)(obj);
  return res;
};

const assocStr = (arr, getterValue) => obj =>
  assocPath(arr, getterValue(obj))(obj);

export const urlToInput = (queryObj: {}) => {
  const modifQueryObj = fromPairs(
    map(item => [head(item), last(item) || ''], toPairs(queryObj)),
  );
  return pipe(
    renameKeys({ search: 'name' }),
    when(
      has('category'),
      assocInt(['options', 'categoryId'], path(['category'])),
    ),
    when(
      has('maxValue'),
      assocInt(['options', 'priceFilter', 'maxValue'], path(['maxValue'])),
    ),
    when(
      has('minValue'),
      assocInt(['options', 'priceFilter', 'minValue'], path(['minValue'])),
    ),
    when(has('sortBy'), assocStr(['options', 'sortBy'], path(['sortBy']))),
    when(has('country'), assocStr(['options', 'country'], path(['country']))),
    when(
      has('attrFilters'),
      assocStr(['options', 'attrFilters'], parseAttrFiltersFromUrl),
    ),
    omit([
      'category',
      'maxValue',
      'minValue',
      'attrFilters',
      'sortBy',
      'country',
    ]),
  )({ ...modifQueryObj, search: modifQueryObj.search || '' });
};

export const inputToUrl = (obj: {
  name: string,
  options: ?{
    categoryId: number,
    sortBy: ?string,
    priceFilter: ?{
      minValue: number,
      maxValue: number,
    },
    attrFilters: ?Array<{
      id: number,
      equal: {
        values: Array<string>,
      },
    }>,
    country: ?string,
  },
}) => {
  const range = pathOr(null, ['options', 'priceFilter'], obj);
  const attrFilters = pathOr(null, ['options', 'attrFilters'], obj);
  const categoryId = pathOr(null, ['options', 'categoryId'], obj);
  const sortBy = pathOr(null, ['options', 'sortBy'], obj);
  const country = pathOr(null, ['options', 'country'], obj);
  const pushCategory = str => `${str}&category=${categoryId}`;
  const pushCountry = str => `${str}&country=${country}`;
  const pushSort = str => `${str}&sortBy=${sortBy}`;
  const pushRange = str =>
    `${str}&minValue=${range.minValue}&maxValue=${range.maxValue}`;
  const pushFilters = str =>
    reduce(
      (acc, next) => `${acc}equal.${next.id}=${next.equal.values.join(',')};`,
      `${str}&attrFilters=`,
      attrFilters,
    );
  // pipe for result get str
  return pipe(
    str => `${str}search=${obj.name}`,
    when(() => complement(isNil)(categoryId), pushCategory),
    when(() => complement(isNil)(sortBy), pushSort),
    when(() => complement(isNil)(country), pushCountry),
    when(() => complement(isNil)(range), pushRange),
    when(() => complement(isNil)(attrFilters), pushFilters),
  )('?');
};

type ChildrenType = {
  parentId: number,
  rawId: number,
  name: Array<{ text: string, lang: string }>,
};

const searchPathByParent = (
  arr: Array<ChildrenType>,
  rawId: number,
  stack: Array<ChildrenType> = [],
) => {
  const result = find(whereEq({ rawId }), arr);
  if (!result) return stack;
  stack.unshift(result);
  if (result && result.parentId) {
    searchPathByParent(arr, result.parentId, stack);
  }
  return stack;
};

export default searchPathByParent;
