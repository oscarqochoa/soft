export default [
  {
    type: 'datepicker',
    margin: true,
    showLabel: true,
    label: 'From',
    placeholder: 'Date',
    class: 'font-small-3',
    model: null,
    locale: 'en',
    dateFormatOptions: { year: 'numeric', month: 'numeric', day: 'numeric' },
    cols: 6,
  },
  {
    type: 'datepicker',
    margin: true,
    showLabel: true,
    label: 'To',
    placeholder: 'Date',
    class: 'font-small-3',
    model: null,
    locale: 'en',
    dateFormatOptions: { year: 'numeric', month: 'numeric', day: 'numeric' },
    cols: 6,
  },
  {
    type: 'select',
    margin: true,
    showLabel: true,
    label: 'Advisor',
    options: [],
    model: null,
    reduce: 'id',
    selectText: 'user_name',
    cols: 12,
    md: 2,

  },
  {
    type: 'select',
    label: 'Status',
    margin: true,
    showLabel: true,
    options: [
      { value: 0, label: 'All' },
      { value: 1, label: 'Active' },
      { value: 4, label: 'Canceled' },
      { value: 6, label: 'Closed' },
      { value: 2, label: 'Hold' },
      { value: 5, label: 'Loyal' },
      { value: 3, label: 'Transition' },
    ],
    model: '',
    reduce: 'value',
    selectText: 'label',
    cols: 12,
    md: 2,
    visible: true,
  },
  {
    type: 'select',
    label: 'Payment Type',
    margin: true,
    showLabel: true,
    options: [
      { value: 0, label: 'All' },
      { value: 1, label: 'Automatic' },
      { value: 2, label: 'Manual' },
      { value: 3, label: 'Others' },
    ],
    model: '',
    reduce: 'value',
    selectText: 'label',
    cols: 12,
    md: 2,
    visible: true,
  },
  {
    type: 'select',
    label: 'Day Payment',
    margin: true,
    showLabel: true,
    options: [
      { value: 0, label: 'All' },
      { value: 5, label: '5' },
      { value: 10, label: '10' },
      { value: 15, label: '15' },
      { value: 20, label: '20' },
      { value: 25, label: '25' },
      { value: 30, label: '30' },
    ],
    model: '',
    reduce: 'value',
    selectText: 'label',
    cols: 12,
    md: 2,
    visible: false,
  },
]
