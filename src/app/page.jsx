"use client"

import { useState, useEffect } from "react"
import { TodoItem } from "../components/todo-item"
import { TodoForm } from "../components/todo-form"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { todoService } from "../services/todoService"

/**
 * Main TodosPage component that fetches and displays todos with CRUD functionality
 */
export default function TodosPage() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [editingTodo, setEditingTodo] = useState(null)
  const [formLoading, setFormLoading] = useState(false)

  useEffect(() => {
    const fetchTodos = async () => {
      try {

        const response = await fetch("https://685be4e989952852c2db6b14.mockapi.io/api/todos")

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        setTodos(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch todos")
        console.error("Error fetching todos:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchTodos()
  }, [])

  const handleAddTodo = async (todoData) => {
    try {
      setFormLoading(true)
      const newTodo = await todoService.createTodo(todoData)
      setTodos((prev) => [...prev, newTodo])
      setShowForm(false)
    } catch (err) {
      setError(err.message)
    } finally {
      setFormLoading(false)
    }
  }

  const handleEditTodo = async (todoData) => {
    try {
      setFormLoading(true)
      const updatedTodo = await todoService.updateTodo(editingTodo.id, todoData)
      setTodos((prev) => prev.map((todo) => (todo.id === editingTodo.id ? updatedTodo : todo)))
      setEditingTodo(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setFormLoading(false)
    }
  }

  const handleDeleteTodo = async (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      try {
        await todoService.deleteTodo(id)
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
      } catch (err) {
        setError(err.message)
      }
    }
  }

  const openEditForm = (todo) => {
    setEditingTodo(todo)
  }

  const closeForm = () => {
    setShowForm(false)
    setEditingTodo(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-md w-full">
            <div className="flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600">Loading todos...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        {/* Header section with Add button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">My Todos</h2>
            <p className="text-gray-600">Manage your tasks and stay organized</p>
            <div className="mt-2 text-sm text-gray-500">Total todos: {todos.length}</div>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
          >
            <div className="h-4 w-4 mr-2">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            Add Todo
          </button>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <div className="flex">
              <div className="h-5 w-5 text-red-400 mr-2">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        )}

        {/* Todos grid */}
        {todos.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="h-12 w-12 text-gray-400 mx-auto mb-4">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No todos found</h3>
            <p className="text-gray-600 mb-4">Get started by creating your first todo!</p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Add Your First Todo
            </button>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onEdit={openEditForm} onDelete={handleDeleteTodo} />
            ))}
          </div>
        )}
      </main>

      <Footer />

      {/* Form Modal */}
      {(showForm || editingTodo) && (
        <TodoForm
          onSubmit={editingTodo ? handleEditTodo : handleAddTodo}
          onCancel={closeForm}
          initialData={editingTodo}
          isLoading={formLoading}
        />
      )}
    </div>
  )
}
