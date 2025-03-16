
export const getTranslatedFromList = (originalValue, originalList, translatedList) => {
    const index = originalList.indexOf(originalValue);
    return index !== -1 ? translatedList[index] : originalValue;
  };
  