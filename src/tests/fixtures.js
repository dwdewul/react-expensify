import moment from "moment";

export default [
    {
        id: '1',
        description: 'Gum',
        note: '',
        amount: 199,
        createdAt: moment(0)
    },
    {
        id: '2',
        description: 'Rent',
        note: '',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Beer',
        note: '',
        amount: 1200,
        createdAt: moment(0).add(4, 'days').valueOf()
    },
    {
        id: '4',
        description: 'Hookers',
        note: '',
        amount: 60000,
        createdAt: moment(0).add(6, 'days').valueOf()
    },
];