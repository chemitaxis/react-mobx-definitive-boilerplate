export async function login (email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        email: 'example@example.com',
        token: '1234abcd',
        status: 200,
        error: false
      })
    }, 2000)
  })
}
