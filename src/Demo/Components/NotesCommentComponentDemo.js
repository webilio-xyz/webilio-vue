import NotesCommentComponent from "../../Components/Component/NotesCommentComponent.vue";

export default {
    component: NotesCommentComponent,
    description: "Notes Comment Component",
    importStatement: "import { NotesCommentComponent } from '@webilio-xyz/webilio-vue/Components';",
    propsToDemo: {
        'user': {
            props: {
                'modelValue': {
                    name: 'Jane Doe',
                    size: 50,
                    initials: 'JD',
                    backgroundColor: '#ffcc00',
                    textColor: '#ffffff'
                },
            }
        },
        'comments': {
            props: {
                'modelValue': [
                    {
                        id: 1,
                        parent_id: null,
                        content: 'This is a comment',
                        created_at: '2021-09-01T00:00:00Z',
                        user: {
                            name: 'Jane Doe',
                            size: 50,
                            initials: 'JD',
                            backgroundColor: '#ffcc00',
                            textColor: '#ffffff'
                        },
                        children: [
                            {
                                id: 2,
                                parent_id: 1,
                                content: 'This is a reply',
                                created_at: '2021-09-01T00:00:00Z',
                                user: {
                                    name: 'John Smith',
                                    size: 50,
                                    initials: 'JS',
                                    backgroundColor: '#00ccff',
                                    textColor: '#000000'
                                },
                                children: []
                            },
                            {
                                id: 3,
                                parent_id: 1,
                                content: 'This is another reply',
                                created_at: '2021-09-01T00:00:00Z',
                                user: {
                                    name: 'Alice Johnson',
                                    size: 50,
                                    initials: 'AJ',
                                    backgroundColor: '#ff00cc',
                                    textColor: '#ffffff'
                                },
                                children: []
                            }
                        ]
                    },
                    {
                        id: 4,
                        parent_id: null,
                        content: 'This is another comment',
                        created_at: '2021-09-01T00:00:00Z',
                        user: {
                            name: 'Bob Brown',
                            size: 50,
                            initials: 'BB',
                            backgroundColor: '#ccff00',
                            textColor: '#000000'
                        },
                        children: []
                    }
                ],
            }
        },
    },
}