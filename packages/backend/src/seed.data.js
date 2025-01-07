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
        "roleId": "admin",
        "employeeId": 182870
    },
    {
        "firstname": "jane",
        "lastname": "smith",
        "email": "janesmith@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "Supervisor",
        "roleId": "time-keeper",
        "employeeId": 182871
    },
    {
        "firstname": "alice",
        "lastname": "johnson",
        "email": "alicejohnson@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "Supervisor",
        "roleId": "time-keeper",
        "employeeId": 182872
    },
    {
        "firstname": "Bob",
        "lastname": "Brown",
        "email": "bobbrown@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "BP-Assistant",
        "roleId": "worker",
        "employeeId": 182873
    },
    {
        "firstname": "Charlie",
        "lastname": "Davis",
        "email": "charliedavis@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "BP-Operator",
        "roleId": "worker",
        "employeeId": 182874
    },
    {
        "firstname": "David",
        "lastname": "Evans",
        "email": "davidevans@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "Casual",
        "roleId": "worker",
        "employeeId": 182875
    },
    {
        "firstname": "Eve",
        "lastname": "Foster",
        "email": "evefoster@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "Casual",
        "roleId": "worker",
        "employeeId": 182876
    },
    {
        "firstname": "Frank",
        "lastname": "Green",
        "email": "frankgreen@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "BP-Assistant",
        "roleId": "worker",
        "employeeId": 182877
    },
    {
        "firstname": "Grace",
        "lastname": "Harris",
        "email": "graceharris@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "Researcher",
        "roleId": "worker",
        "employeeId": 182878
    },
    {
        "firstname": "Hank",
        "lastname": "Ivy",
        "email": "hankivy@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "BP-Operator",
        "roleId": "worker",
        "employeeId": 182879
    },
    {
        "firstname": "Ivy",
        "lastname": "Jones",
        "email": "ivyjones@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "Casual",
        "roleId": "worker",
        "employeeId": 182880
    },
    {
        "firstname": "Jack",
        "lastname": "King",
        "email": "jackking@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "Forklift Operator",
        "roleId": "worker",
        "employeeId": 182881
    },
    {
        "firstname": "Karen",
        "lastname": "Lewis",
        "email": "karenlewis@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "Electrician",
        "roleId": "worker",
        "employeeId": 182882
    },
    {
        "firstname": "Larry",
        "lastname": "Miller",
        "email": "larrymiller@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "Electrician",
        "roleId": "worker",
        "employeeId": 182883
    },
    {
        "firstname": "Mona",
        "lastname": "Nelson",
        "email": "monanelson@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "Casual",
        "roleId": "worker",
        "employeeId": 182884
    },
    {
        "firstname": "Nina",
        "lastname": "Owens",
        "email": "ninaowens@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "Truck Driver",
        "roleId": "worker",
        "employeeId": 182885
    },
    {
        "firstname": "Oscar",
        "lastname": "Parker",
        "email": "oscarparker@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "BP-Operator",
        "roleId": "worker",
        "employeeId": 182886
    },
    {
        "firstname": "Paul",
        "lastname": "Quinn",
        "email": "paulquinn@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "Casual",
        "roleId": "worker",
        "employeeId": 182887
    },
    {
        "firstname": "Quincy",
        "lastname": "Reed",
        "email": "quincyreed@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "Data Analyst",
        "roleId": "worker",
        "employeeId": 182888
    },
    {
        "firstname": "Rachel",
        "lastname": "Scott",
        "email": "rachelscott@example.com",
        "password": "$2b$10$XVWCYCHQiJ56jsPiu6VeQOZ.ETHZhfvLZB67.ZWDOUJRCHVKqagAC",
        "jobTitle": "Casual",
        "roleId": "worker",
        "employeeId": 182889
    }
]

export const counter = [
    {
        id: "employeeId",
        sequence_value: 182889
    }
]
