export interface Task {
    id: string;
    title: string;
    description: string;
    status: 'draft' | 'inProgress' | 'completed';
    userId: string;
}
