import React from 'react';


        const data = [
            {
                "text": "Home",
                "url": "#"
            },
            {
                "text": "Link 2",
                "url": "#"
            },
            {
                "text": "Link 3",
                "url": "#",
                "submenu": [
                    {
                        "text": "Sublink 1",
                        "url": "#",
                        "submenu": [
                            {
                                "text": "SubSublink 1",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "text": "Sublink 2",
                        "url":"#",
                        "submenu": [
                            {
                                "text": "SubSublink 2",
                                "url": "#"
                            }
                        ]
                    }
                ]
            }
        ];


export default data;