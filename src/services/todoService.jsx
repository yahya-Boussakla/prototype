/**
 * Todo service for CRUD operations
 */

const API_URL = "https://685be4e989952852c2db6b14.mockapi.io/api/todos"

export const todoService = {
  // Get all todos
  async getAllTodos() {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error("Error fetching todos:", error)
      throw error
    }
  },

  // Create a new todo
  async createTodo(todoData) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoData),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error("Error creating todo:", error)
      throw error
    }
  },

  // Update a todo
  async updateTodo(id, todoData) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoData),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error("Error updating todo:", error)
      throw error
    }
  },

  // Delete a todo
  async deleteTodo(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error("Error deleting todo:", error)
      throw error
    }
  },
}
