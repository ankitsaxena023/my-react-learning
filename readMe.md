test
const [bucket, setBucket] = useState({
itemArray: [],
id: Date.now(),
name: '',
checkEdit: false,
addItem: (name) => { },
deleteItem: (id) => { },
updateItem: (id) => { },
toggleCheckbox: (id) => { }
})
console.log("bucket", bucket)

bucket.addItem = (name) => {

    const newArrayItem = {
      id: Date.now(),
      name: name,
      checkEdit: false
    }

    const updatedArrayItem = [...bucket.itemArray, { ...newArrayItem }]

    setBucket({
      itemArray: updatedArrayItem
    })

}
