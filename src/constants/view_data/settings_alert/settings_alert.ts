const SettingsAlert = {
    'settings1': [
            {
                id: 1,
                item: 'Audit Log',
                isToggled: true,
                hadDropdown: false,
                children: [],
                type: 'settings',
            },
            {
                id: 2,
                item: 'Users',
                isToggled: true,
                hasDropdown: true,
                children: [
                    {
                        id: 1,
                        action: 'Users Add',
                        isChecked: true,
                        hasSelect: false,
                        options: [],
                    },
                    {
                        id: 2,
                        action: 'Users Delete',
                        isChecked: false,
                        hasSelect: false,
                        options: [],

                    },
                    {
                        id: 3,
                        action: 'Users Edit',
                        isChecked: true,
                        hasSelect: false,
                        options: []
                    },
                    {
                        id: 4,
                        action: 'Max Users',
                        isChecked: true,
                        hasSelect: true,
                        options: [
                            1,2,3,4,5,
                            6,7,8,9,10]
                    }
                ],
                type: 'settings',
            },
    ],
    'settings2': [
        {
            id: 1,
            item: 'Audit Log',
            isToggled: true,
            hadDropdown: false,
            children: [],
            type: 'settings',
        },
        {
            id: 2,
            item: 'Users',
            isToggled: true,
            hasDropdown: true,
            children: [
                {
                    id: 1,
                    action: 'Users Add',
                    isChecked: true,
                    hasSelect: false,
                    options: [],
                },
                {
                    id: 2,
                    action: 'Users Delete',
                    isChecked: false,
                    hasSelect: false,
                    options: [],

                },
                {
                    id: 3,
                    action: 'Users Edit',
                    isChecked: true,
                    hasSelect: false,
                    options: []
                },
                {
                    id: 4,
                    action: 'Max Users',
                    isChecked: true,
                    hasSelect: true,
                    options: [
                        1,2,3,4,5,
                        6,7,8,9,10]
                }
            ],
            type: 'settings',
        },
    ],
    'alerts': [
        {
            id: 1,
            item: 'Alert Manager',
            isToggled: true,
            hasSelect: false,
            selectOptions: [],
            type: 'alerts',
        },
            {
                id: 2,
                item: 'Alert Rules',
                isToggled: true,
                hasSelect: true,
                selectOptions:
                    ['1','2','3',
                        '4','5',
                        '6','7','8',
                        '9','10'
                    ],
                type: 'alerts',
            }
        ]
};

export default SettingsAlert;
