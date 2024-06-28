import IconFont from '@/components/IconFont';

export const menusList = [
  {
    label: 'DashBoard',
    key: 'dashboard',
    icon: <IconFont type="icon-mobang" size={16} />,
    children: [
      {
        label: '分析页',
        key: 'analysis',
        icon: <IconFont type="icon-mobang" size={16} />,
      },
      {
        label: '工作台',
        key: 'workplace',
        icon: <IconFont type="icon-mobang" size={16} />,
      }
    ]
  },
  {
    label: '系统管理',
    key: 'systemManage',
    icon: <IconFont type="icon-xitongguanli" size={16} />,
    children: [
      {
        label: '用户管理',
        key: 'userManage',
        icon: <IconFont type="icon-yonghu" size={16} />,
      },
      {
        label: '角色管理',
        key: 'roleManage',
        icon: <IconFont type="icon-jiaoseliebiao" size={16} />,
      },
      {
        label: '菜单管理',
        key: 'menuManage',
        icon: <IconFont type="icon-caidan" size={16} />,
      }
    ]
  },
  {
    label: '公共组件',
    key: 'commonManage',
    icon: <IconFont type="icon-gonggongzujian" size={16} />,
  },
  {
    label: '统计报表',
    key: 'statisticManage',
    icon: <IconFont type="icon-tongji" size={16} />,
  }
]