const items = require("../items");
const {getItems, getItem, addItem, deleteItem, updateItem} = require("../controllers/items")
// Item schema
const Item = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        name: {type: 'string'}
    }
}
//Options for get all items
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item
            }
        }
    },
    handler: getItems
}

//Options for get one item by id
const getItemOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item
            }
        }
    },
    handler: getItem
}

//Options for get one item by id
const postItemOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: {type: 'string'}
            }
        },
        response: {
            201: Item
        }
    },
    handler: addItem
}

//Options to delete item by id
const deleteItemOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: {type:'string'}
                }
            }
        }
    },
    handler: deleteItem
}

//Options to update by id
const updateItemOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: updateItem
}

function itemRoutes(fastify, options, done) {
    //get all items
    fastify.get('/items', getItemsOpts)

//get item by id
    fastify.get('/items/:id', getItemOpts)

// Add items
    fastify.post('/items', postItemOpts)

// Delete items
    fastify.delete('/items/:id', deleteItemOpts)

// Put items
    fastify.put('/items/:id', updateItemOpts)

    done()
}

module.exports = itemRoutes;