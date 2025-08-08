
import React, { useState, useEffect, useCallback } from 'react';
import { Todo } from './types';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import InstructionModal from './components/InstructionModal';

const InfoIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.error("Failed to parse todos from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.error("Failed to save todos to localStorage", error);
    }
  }, [todos]);

  const addTask = useCallback((text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-8 font-sans">
        <main className="w-full max-w-2xl mx-auto bg-slate-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-700/50">
          <Header />
          <TodoInput onAddTask={addTask} />
          <div className="space-y-4">
             {todos.length > 0 ? (
                <ul className="space-y-3">
                  {todos.map(todo => (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      onToggle={toggleTodo}
                      onDelete={deleteTodo}
                    />
                  ))}
                </ul>
              ) : (
                <div className="text-center py-10 px-4 bg-slate-800/50 rounded-lg border border-dashed border-slate-700">
                    <h3 className="text-slate-400 font-medium">No tasks yet!</h3>
                    <p className="text-slate-500 text-sm">Add a task above to get started.</p>
                </div>
              )}
          </div>
        </main>
        <footer className="mt-8 text-center">
            <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center text-sm text-slate-500 hover:text-teal-400 transition-colors duration-300 bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-lg border border-transparent hover:border-slate-700"
            >
                <InfoIcon />
                How to Deploy This App
            </button>
        </footer>
      </div>
      <InstructionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default App;
