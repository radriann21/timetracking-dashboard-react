export const getUserData = async () => {
  const response = await fetch("/user.json")
  if (!response.ok) {
    throw new Error('Error al obtener los datos!')
  }
  return response.json()
}