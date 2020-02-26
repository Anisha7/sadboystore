// Returns all items in store in the database
export async function fetchItems() {
    let items;
    // fetch items
    await fetch("/item/")
        .then(res => res.json())
        .then(json => {
            items = json.data
        })
        .catch(err => {
            console.log(err)
        })
    
    return items;
  }


// Takes the name of the item and returns all instances of it
export async function fetchItemInstances(name) {
    let items;
    await fetch(`/item/name/${name}`)
      .then(res => res.json())
      .then(json => {
        items = json.data;
      })
      .catch(err => {
        console.log(err);
      });
      
    return items;
  }