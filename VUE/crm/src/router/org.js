import department from "@/components/department";
import addDepartment from "@/components/department/add";
import job from "@/components/job";
import addJob from "@/components/job/add";
import user from '@/components/user'
import addUser from '@/components/user/add'
// userhandle|departhandle|jobhandle|departcustomer|allcustomer|resetpassword
export default [
    {
        path: '/org/department',
        name: 'department',
        component: department,
        meta: {
            type: 'department',
            icon: 'el-icon-user',
            rootTil: '部门管理',
            til: '部门列表',
            power:'departhandle'
        }
    },
    {
        path: '/org/addDepartment',
        name: 'addDepartment',
        component: addDepartment,
        meta: {
            type: 'department',
            rootTil: '部门管理',
            til: '新增部门',
            icon: 'el-icon-user',
            power:'departhandle'
        }
    },
    {
        path: '/org/job',
        name: 'job',
        component: job,
        meta: {
            type: 'job',
            icon: 'el-icon-edit-outline',
            rootTil: '职务管理',
            til: '职务列表',
            power:'jobhandle'
        }
    },
    {
        path: '/org/addJob',
        name: 'addJob',
        component: addJob,
        meta: {
            type: 'job',
            rootTil: '职务管理',
            til: '新增职务',
            power:'jobhandle',
            icon: 'el-icon-edit-outline',
        }
    },
    {
        path: '/org/user',
        name: 'user',
        component: user,
        meta: {
            type: 'user',
            icon: 'el-icon-suitcase-1',
            rootTil: '员工管理',
            til: '员工列表',
            power:'userhandle',
        }
    },
    {
        path: '/org/addUser',
        name: 'addUser',
        component: addUser,
        meta: {
            type: 'user',
            rootTil: '员工管理',
            til: '新增员工',
            power:'userhandle',
            icon: 'el-icon-suitcase-1',
        }
    }
]
