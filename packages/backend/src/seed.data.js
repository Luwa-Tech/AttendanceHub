export const roles = [
    {
        "name": "worker",
        "permissions": [
            "view_own_attendance",
            "update_own_attendance"
        ]
    },
    {
        "name": "admin",
        "permissions": [
            "manage_users",
            "view_all_attendance",
            "update_all_attendance"
        ]
    },
    {
        "name": "time-keeper",
        "permissions": [
            "view_all_attendance",
            "update_all_attendance"
        ]
    }
]

export const status = [
    {
        "name": "Present"
    },
    {
        "name": "Late"
    },
    {
        "name": "Absent"
    }
]

export const employees = [
    {
        "firstname": "john",
        "lastname": "doe",
        "email": "johndoe@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "Manager",
        "roleId": "",
        "employeeId": 182870
    }
]

export const counter = [
    {
        id: "employeeId",
        sequence_value: 182870
    }
]