//==============================================================================
// ■ Data-API (data-api.js)
//------------------------------------------------------------------------------
//     Data access and mangement.
//==============================================================================
const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const fileName = "./data.json";

//------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
module.exports = { get, add };

//------------------------------------------------------------------------------
// ● Load-Data
//------------------------------------------------------------------------------
async function load() {
  const json = await readFile(fileName, "UTF-8");
  return JSON.parse(json);
}

//------------------------------------------------------------------------------
// ● Get-Collection
//------------------------------------------------------------------------------
async function get(collectionName) {
  const data = await load();
  const collection = data[collectionName];
  return collection;
}

//------------------------------------------------------------------------------
// ● Add-Item
//------------------------------------------------------------------------------
async function add(collectionName, item) {
  const data = await load();
  data[collectionName].push(item);
  return await writeFile(fileName, JSON.stringify(data, null, 2));
}
