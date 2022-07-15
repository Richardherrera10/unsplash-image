import fs from 'fs'
export default class DataJson {
  constructor () {
    this._dataPath = './store/db.json'
  }

  setTables () {
    const tables = {
      user: [],
      photo: [],
      collection: [],
      collectionPhoto: []
    }

    const items = this.readJsonFile()

    if (items.length === 0) {
      this.writeJsonFile(tables)
    }
  }

  readJsonFile () {
    const contentFile = fs.readFileSync(this._dataPath, 'utf-8')
    if (contentFile) {
      return JSON.parse(contentFile)
    }
    return []
  }

  writeJsonFile (data) {
    const jsonData = JSON.stringify(data, null, '')
    fs.writeFileSync(this._dataPath, jsonData)
  }

  generatePk (table) {
    const lastItem = this.all(table).pop()
    if (lastItem) {
      return ++lastItem._id
    }
    return 1
  }

  save (table, data) {
    const items = this.readJsonFile()
    data._id = this.generatePk(table)
    items[table].push(data)
    this.writeJsonFile(items)
    return 'create new item'
  }

  all (table) {
    const items = this.readJsonFile()
    return items[table] || []
  }

  delete (table, data) {
    const items = this.readJsonFile()
    items[table] = items[table].filter(item => item._id !== data._id)
    this.writeJsonFile(items)
    return 'Delete item'
  }

  update (table, data) {
    const items = this.readJsonFile()
    items[table] = items[table].map((item) => {
      if (item._id !== parseInt(data._id)) {
        return item
      } else {
        return data
      }
    })
    this.writeJsonFile(items)
  }

  getTag (table, tag) {
    const items = this.readJsonFile()
    const photoTag = items[table].filter(element => element._etiqueta === tag)
    return photoTag
  }

  getId (table, id) {
    console.log('id is', typeof (parseInt(id)))

    const items = this.readJsonFile()
    const photoId = items[table].filter(element => element._idUser === parseInt(id))
    console.log(photoId)
    return photoId
  }

  // buscar campos por atributos
  findByAttribute (table, attribute, value) {
    const items = this.readJsonFile()
    const item = items[table].find(item => item[attribute] === value)
    if (item) {
      return item
    }
    return null
  }
}

/* const test = new DataJson()
const result = test.findByAttribute('song', '_title', 'song 95')
console.table(result) */
