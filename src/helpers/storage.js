
// ********** Helper functions ************ //

// Converts array to a string
// that can be added to local storage
const arrayToString = arr => arr.toString();

// Converts the array disguised as
// a string to a javascript array
const arrayStringToArray = s => {
    if (!s) {
        return []
    }
    const arr = s.split('}')
    arr.pop()
    const result = arr.map(item => {
        if (item[0] === ',') {
            item = item.slice(0, 1)
        }
        if (item[item.length - 1] === ',') {
            item = item.slice(item.length - 1, 1)
        }
        return item + "}"
    })
    return result
};

// Converts a javascript object to a string
// that can be added to local storage
const objectToString = obj => JSON.stringify(obj);

// Converts the object disguised as
// a string to a javascript object
const objectStringToObject = s => {
    return JSON.parse(s)
};

// Converts the localStorage string array of objects 
// to a usable javascript array of javascript objects
const parseStringData = (s) => {
    // return JSON.parse(s)
    const arr = arrayStringToArray(s)
    return arr.map(objString => objectStringToObject(objString))
}

// Converts the javascript array of javascript objects
// to a localStorage string array of string objects 
const decodeDataToString = (data) => {
    const arr = data.map(obj => objectToString(obj))
    return arrayToString(arr)
}

// ********** Storage functions ************ //
// store [{name, qty, id}]

// Adds given item to storage if it isn't already there
// otherwise, increments its quantity
export const addItem = item => {
    const items = getItems()
    let found = false
    // check if item already exists
    items.forEach(curr => {
        if (curr.id === item.id) {
            found = true
            curr.qty += 1
        }
    });

    // add item
    if (!found) {
        items.push(item)
    }
    // update storage
    localStorage.setItem('cart', decodeDataToString(items))
};

// Removes given item from storage
export const removeItem = item => {
    const items = getItems()
    
    // remove item
    items.forEach((curr, i) => {
        if (curr.id === item.id) {
            items.splice(i, 1) // deletes item from array
            // update storage
            localStorage.setItem('cart', decodeDataToString(items))
            return
        }
    });
    
};

// Gets items in storage and formats them to usable data
export const getItems = () => {
    const items = localStorage.getItem('cart')
    return parseStringData(items)
};

// TODO: Test this function
// Input: old_id, new_item = {name, qty, id}
export const updateItem = (old_id, new_item) => {
    // Get items from local storage
    const items = getItems()
    const old_index = -1
    // Find index for item with old_id
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === old_id) {
            old_index = i
            break
        }
    }
    if (old_index === -1 ) {
        // should never hit this case though logically
        // item doesn't exist, just append
        items.push(new_item)
    } else {
        // Replace with new_item
        items[old_index] = new_item
    }
    // Push to local storage
    localStorage.setItem('cart', decodeDataToString(items))
}