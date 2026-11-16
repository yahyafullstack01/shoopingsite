// Nova Poshta's city search only matches Ukrainian/Russian spellings.
// Map common English/transliterated city names to their Ukrainian spelling
// so customers who type "Odessa", "Kyiv", "Lviv", etc. still get results.
const EN_TO_UA_CITY = {
  'kyiv': 'Київ',
  'kiev': 'Київ',
  'odessa': 'Одеса',
  'odesa': 'Одеса',
  'lviv': 'Львів',
  'kharkiv': 'Харків',
  'kharkov': 'Харків',
  'dnipro': 'Дніпро',
  'dnepr': 'Дніпро',
  'dnipropetrovsk': 'Дніпро',
  'zaporizhzhia': 'Запоріжжя',
  'zaporizhzhya': 'Запоріжжя',
  'vinnytsia': 'Вінниця',
  'vinnitsa': 'Вінниця',
  'ivano-frankivsk': 'Івано-Франківськ',
  'ivano frankivsk': 'Івано-Франківськ',
  'chernihiv': 'Чернігів',
  'chernigov': 'Чернігів',
  'poltava': 'Полтава',
  'sumy': 'Суми',
  'kherson': 'Херсон',
  'mykolaiv': 'Миколаїв',
  'nikolaev': 'Миколаїв',
  'ternopil': 'Тернопіль',
  'rivne': 'Рівне',
  'lutsk': 'Луцьк',
  'uzhhorod': 'Ужгород',
  'uzhgorod': 'Ужгород',
  'chernivtsi': 'Чернівці',
  'cherkasy': 'Черкаси',
  'zhytomyr': 'Житомир',
  'kropyvnytskyi': 'Кропивницький',
  'kremenchuk': 'Кременчук',
  'kryvyi rih': 'Кривий Ріг',
  'krivoy rog': 'Кривий Ріг',
  'mariupol': 'Маріуполь',
  'bila tserkva': 'Біла Церква',
};

/**
 * Translates a Latin-script city query into its Ukrainian spelling when
 * recognized, so it can be sent to Nova Poshta's search API. Falls back to
 * the original query untouched when there's no known match.
 */
export function resolveCityQueryForNovaPoshta(query) {
  const normalized = String(query || '').trim().toLowerCase();
  if (!normalized) return query;

  if (EN_TO_UA_CITY[normalized]) {
    return EN_TO_UA_CITY[normalized];
  }

  const matchedKey = Object.keys(EN_TO_UA_CITY).find((key) => key.startsWith(normalized));
  if (matchedKey) {
    return EN_TO_UA_CITY[matchedKey];
  }

  return query;
}
