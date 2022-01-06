export interface TasksInterface {
  taskname: string
  taskdescription: string
  status: 'todo' | 'inprogress' | 'done'
  date: string
}
