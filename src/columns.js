export const columns = [
  {
    dataIndex: 'id',
    title: 'Id',
    sorter: (a, b) => a.id - b.id,
  },
  {
    dataIndex: 'userId',
    title: 'UserId',
    filters: [
      {
        text: 'User 1',
        value: 1,
      },
      {
        text: 'User 2',
        value: 2,
      }
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.userId === value,
    width: '30%',
  },
  {
    dataIndex: 'title',
    title: 'Заголовок',
  },
  {
    dataIndex: 'completed',
    title: 'Завершенный',
  },
];