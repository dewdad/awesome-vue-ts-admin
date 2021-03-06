import { tableList, FilterFormList, operate } from '@/interface';

/* -------------------------------------------------------------
| Item list for forms in m-form
|-------------------------------------------------------------*/
export const defaultItemList: FilterFormList[] = [
  {
    key: 'id',
    type: 'input',
    label: 'id',
    placeholder: 'Leave it untouched!',
  },
  {
    key: 'owner',
    type: 'input',
    label: 'owner',
    placeholder: '',
  },
  {
    key: 'title',
    type: 'input',
    label: 'title',
    placeholder: '',
  },
  {
    key: 'description',
    type: 'input',
    label: 'description',
    placeholder: '',
  },
  {
    key: 'content',
    type: 'textarea',
    label: 'content',
    placeholder: '',
  },
  {
    key: 'tags',
    type: 'input',
    label: 'tags',
    placeholder: '',
  },
  {
    key: 'href',
    type: 'input',
    label: 'href',
    placeholder: '',
  },
  {
    key: 'updateAt',
    type: 'date',
    label: 'updateAt',
    placeholder: '',
  },
  {
    key: 'avatar',
    type: 'input',
    label: 'avatar',
    placeholder: '',
  },
];

/* -------------------------------------------------------------
| Field list for tables in filter-table
|-------------------------------------------------------------*/
export const tableFieldsList: tableList[] = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
  },
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
  },
  {
    title: 'Update At',
    dataIndex: 'updateAt',
  },
];

/* -------------------------------------------------------------
| Item list for filter forms in filter-table
|-------------------------------------------------------------*/
export const filterFormItemList: FilterFormList[] = [
  {
    key: 'title',
    type: 'input',
    label: 'title',
  },
  {
    key: 'owner',
    type: 'input',
    label: 'owner',
  },
  {
    key: 'tags',
    type: 'input',
    label: 'tags',
  },
];

/* -------------------------------------------------------------
| Backend params to find path of http response
|-------------------------------------------------------------*/
export const BackParams: any = {
  code: 'data.result.resultCode',
  codeOK: 0,
  message: 'data.result.resultMessage',
  data: 'data.entity',
  columns: 'config.params.columns',
  total: 'config.params.pageParams.total',
};

/* -------------------------------------------------------------
| Buttons for operations in filter-table
|-------------------------------------------------------------*/
export const operateBtn: operate[] = [
  {
    key: 'edit',
    rowKey: 'id',
    color: 'blue',
    text: '编辑',
    roles: true,
  },
  {
    key: 'delete',
    rowKey: 'id',
    color: 'red',
    text: '删除',
    roles: true,
    msg: '确定删除？',
  },
  {
    key: 'export',
    rowKey: 'id',
    color: 'orange',
    text: '导出',
    roles: true,
    msg: '确定导出？',
  },
];
