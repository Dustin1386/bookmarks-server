const uuid = require('uuid/v4')

const bookmarks = [{
    id: uuid(),
    title: 'bookmark one',
    url: "http://www.google.com",
    description: 'blah blah',
    rating:3
}]


module.exports = {bookmarks}