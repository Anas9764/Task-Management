export type Todo = {
    id: string;
    task: string;
    description ?: string;
    status?: Filter;
    createdAt: Date;
}

export interface TodoUpdateProps {
    id: string;
    status: Filter;
}


export type TodosContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void; //call signature
    toggleTodoAsCompleted: ({id, status}: TodoUpdateProps) => void;
    handleDeleteTodo: (id: string) => void;
    // handleUpdateTodo: (id: string) => void;

}

export interface TODOs {

    // lets see how, where to use
    id: string;
    task: string;
    status: Filter;
    createdAt: Date;
}

export enum Filter {
    All = "all",
    Todo = "todo",
    inProgress = "progress",
    Completed = "completed",
}

export interface todoProps {
    state: string;
}
