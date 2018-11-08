module.exports = [
    {
        _id: Math.round(Math.random() * 1000000),
        text: 'Hey, how are you?',
        createdAt: new Date(Date.UTC(2018, 10, 10, 17, 20, 0)),
        user: {
            _id: 2,
            name: 'Contact',
        },
    }
];