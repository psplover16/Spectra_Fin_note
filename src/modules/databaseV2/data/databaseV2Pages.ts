export interface DatabaseV2Page {
  id: string;
  sourceFilename: string;
  title: string;
  href: string;
}

export function createDatabaseV2PageHref(sourceFilename: string, baseUrl = import.meta.env.BASE_URL): string {
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  return `${normalizedBaseUrl}database-v2/${sourceFilename}`;
}

function createDatabaseV2Page(id: string, sourceFilename: string, title: string): DatabaseV2Page {
  return {
    id,
    sourceFilename,
    title,
    href: createDatabaseV2PageHref(sourceFilename)
  };
}

export const databaseV2Pages = [
  createDatabaseV2Page('database-v2-ansi-sparc', '國考資料庫_01_ANSI-SPARC三層架構.html', 'ANSI-SPARC三層架構'),
  createDatabaseV2Page('database-v2-advantages-types', '國考資料庫_02_資料庫優缺點與種類.html', '資料庫優缺點與種類'),
  createDatabaseV2Page('database-v2-keys', '國考資料庫_03_Key鍵.html', 'Key鍵'),
  createDatabaseV2Page('database-v2-erd', '國考資料庫_04_ERD實體關係圖.html', 'ERD實體關係圖'),
  createDatabaseV2Page('database-v2-normalization', '國考資料庫_05_正規化.html', '正規化'),
  createDatabaseV2Page(
    'database-v2-functional-dependency-armstrong',
    '國考資料庫_05B_函數相依與阿姆斯壯公理.html',
    '函數相依與阿姆斯壯公理'
  ),
  createDatabaseV2Page('database-v2-normalization-practice', '國考資料庫_05C_正規化逐步練習.html', '正規化逐步練習'),
  createDatabaseV2Page('database-v2-sql-command-types', '國考資料庫_06_SQL三大指令分類.html', 'SQL三大指令分類'),
  createDatabaseV2Page('database-v2-ddl-objects', '國考資料庫_07_資料定義與資料庫物件.html', '資料定義與資料庫物件'),
  createDatabaseV2Page('database-v2-sql-crud', '國考資料庫_08_SQL_CRUD語法.html', 'SQL_CRUD語法'),
  createDatabaseV2Page('database-v2-sql-query', '國考資料庫_09_SQL查詢功能.html', 'SQL查詢功能'),
  createDatabaseV2Page('database-v2-acid', '國考資料庫_10_ACID交易特性.html', 'ACID交易特性'),
  createDatabaseV2Page('database-v2-nosql', '國考資料庫_11_NoSQL.html', 'NoSQL')
] as const satisfies readonly DatabaseV2Page[];
