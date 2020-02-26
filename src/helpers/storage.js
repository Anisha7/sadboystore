
// ********** Helper functions ************ //

// Converts array to a string
// that can be added to local storage
const arrayToString = arr => arr.toString();

// Converts the array disguised as
// a string to a javascript array
const arrayStringToArray = s => s ? s.split(",") : [];

// Converts a javascript object to a string
// that can be added to local storage
const objectToString = obj => JSON.stringify(obj);

// Converts the object disguised as
// a string to a javascript object
const objectStringToObject = s => JSON.parse(s);

// Converts the localStorage string array of objects 
// to a usable javascript array of javascript objects
const parseStringData = (s) => {
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
            break
        }
    });
    
};

// Updates given item in storage
export const updateItem = item => {};

// Gets items in storage
export const getItems = () => {};
