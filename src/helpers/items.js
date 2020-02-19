// Returns all items in store in the database
export async function fetchItems() {
    // console.log("Fetching items")
    // hardcoded:
    // const src = "https://via.placeholder.com/250";
    // const cost = 0;
    // const name = "Item name";
    // const colors = ["maroon", "white", "black"];
    // const sizes = ["small", "medium", "large", "extra-large"];
    // const qts = ["1", "2", "3", "4", "5"];
    // const itemId = "01203aerf";
    // const data = [{ src, name, cost, sizes, qts, itemId }];
    // return data

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
    // hardcoded:
    // console.log("HELLO")
    // const src = "https://via.placeholder.com/250";
    // const cost = 0;
    // const colors = ["maroon", "white", "black"];
    // const sizes = ["small", "medium", "large", "extra-large"];
    // const qts = ["1", "2", "3", "4", "5"];
    // const itemId = "01203aerf";
    // const data = [{ src, name, cost, sizes, qts, itemId }];
    // return data

    let items;
    await fetch(`/item/${name}`)
      .then(res => res.json())
      .then(json => {
        items = json.data;
      })
      .catch(err => {
        console.log(err);
      });
    console.log(items);
    return items;
  }